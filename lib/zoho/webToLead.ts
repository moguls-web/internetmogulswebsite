import { sanitizeContactLeadPayload } from './sanitizePayload'

/** Hotel contact form → Zoho CRM Web-to-Lead field names (from Zoho embed). */
export type ContactLeadPayload = {
  firstName: string
  lastName: string
  email: string
  mobile: string
  website?: string
  company: string
  city: string
  numberOfRooms: string
  averageRoomRate: string
  revenueImpactAreas: string
  bookingSource: string
  banquetEnquiries: string
  restaurantDiscoverable: string
  otherChallenges?: string
}

/** Zoho picklists expect "-None-" not "None". */
export function normalizeZohoPicklistValue(value: string): string {
  const trimmed = value.trim()
  if (trimmed === 'None' || trimmed === '') return '-None-'
  return trimmed
}

/** Zoho returns HTTP 200 even when no lead is created; inspect HTML instead. */
export function parseZohoWebToLeadResponse(html: string): {
  accepted: boolean
  reason?: string
} {
  const text = html.toLowerCase()

  if (
    text.includes('your request has been successfully received') ||
    text.includes('thank you for choosing us') ||
    text.includes('record has been added') ||
    text.includes('window.location.assign') && text.includes('thank-you')
  ) {
    return { accepted: true }
  }

  if (
    text.includes('cloud software suite for businesses') ||
    text.includes('zoho | cloud software suite')
  ) {
    return {
      accepted: false,
      reason:
        'Zoho did not accept the submission. Re-copy ZOHO_XNQSJSDP and ZOHO_XMIWTLD from Zoho Web-to-Lead embed code.',
    }
  }

  if (
    text.includes('security validation') ||
    text.includes('captcha') ||
    text.includes('unable to process your request')
  ) {
    return { accepted: false, reason: 'Zoho rejected the submission (security or captcha).' }
  }

  return { accepted: false, reason: 'Could not confirm lead creation from Zoho response.' }
}

export function buildZohoContactLeadBody(
  payload: ContactLeadPayload,
  tokens: { xnQsjsdp: string; xmIwtLD: string; returnURL?: string }
): URLSearchParams {
  const body = new URLSearchParams()

  body.set('xnQsjsdp', tokens.xnQsjsdp)
  body.set('zc_gad', '')
  body.set('xmIwtLD', tokens.xmIwtLD)
  body.set('actionType', 'TGVhZHM=')
  body.set(
    'returnURL',
    tokens.returnURL || 'https://www.internetmoguls.com/thank-you'
  )

  body.set('First Name', payload.firstName)
  body.set('Last Name', payload.lastName)
  body.set('Email', payload.email)
  body.set('Mobile', payload.mobile)
  body.set('Company', payload.company)
  body.set('City', payload.city)
  body.set('LEADCF7', payload.averageRoomRate)
  body.set('LEADCF8', payload.numberOfRooms)
  body.set('LEADCF22', payload.otherChallenges?.trim() || 'N/A')
  body.set('LEADCF24', payload.banquetEnquiries)
  body.set('LEADCF25', payload.bookingSource)
  body.set('LEADCF26', payload.restaurantDiscoverable)
  body.set('LEADCF28', payload.revenueImpactAreas)

  if (payload.website?.trim()) {
    body.set('Website', payload.website.trim())
  }

  return body
}

export function getZohoWebToLeadConfig():
  | { configured: false }
  | {
      configured: true
      actionUrl: string
      xnQsjsdp: string
      xmIwtLD: string
      returnURL: string
    } {
  const xnQsjsdp = process.env.ZOHO_XNQSJSDP?.trim()
  const xmIwtLD = process.env.ZOHO_XMIWTLD?.trim()

  if (!xnQsjsdp || !xmIwtLD) {
    return { configured: false }
  }

  return {
    configured: true,
    actionUrl:
      process.env.ZOHO_WEBTOLEAD_URL?.trim() ||
      'https://crm.zoho.in/crm/WebToLeadForm',
    xnQsjsdp,
    xmIwtLD,
    returnURL:
      process.env.ZOHO_RETURN_URL?.trim() ||
      'https://www.internetmoguls.com/thank-you',
  }
}

export async function submitContactLeadToZoho(
  payload: ContactLeadPayload
): Promise<{ ok: boolean; skipped?: boolean; status?: number; error?: string }> {
  const config = getZohoWebToLeadConfig()
  if (!config.configured) {
    return { ok: false, skipped: true, error: 'Zoho Web-to-Lead is not configured' }
  }

  const sanitized = sanitizeContactLeadPayload(payload)
  const normalized: ContactLeadPayload = {
    ...sanitized,
    numberOfRooms: normalizeZohoPicklistValue(sanitized.numberOfRooms),
    averageRoomRate: normalizeZohoPicklistValue(sanitized.averageRoomRate),
    bookingSource: normalizeZohoPicklistValue(sanitized.bookingSource),
    banquetEnquiries: normalizeZohoPicklistValue(sanitized.banquetEnquiries),
    restaurantDiscoverable: normalizeZohoPicklistValue(sanitized.restaurantDiscoverable),
  }

  const body = buildZohoContactLeadBody(normalized, {
    xnQsjsdp: config.xnQsjsdp,
    xmIwtLD: config.xmIwtLD,
    returnURL: config.returnURL,
  })

  const referer =
    process.env.ZOHO_REFERER_URL?.trim() || 'https://www.internetmoguls.com/Reach_Us'

  try {
    const response = await fetch(config.actionUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        Accept: 'text/html,application/xhtml+xml',
        Referer: referer,
        Origin: new URL(referer).origin,
        'User-Agent':
          'Mozilla/5.0 (compatible; InternetMoguls-WebToLead/1.0; +https://www.internetmoguls.com)',
      },
      body: body.toString(),
    })

    const html = await response.text()
    const parsed = parseZohoWebToLeadResponse(html)

    if (!response.ok) {
      return {
        ok: false,
        status: response.status,
        error: `Zoho returned HTTP ${response.status}`,
      }
    }

    if (!parsed.accepted) {
      return {
        ok: false,
        status: response.status,
        error: parsed.reason || 'Zoho did not confirm lead creation',
      }
    }

    return { ok: true, status: response.status }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Zoho request failed'
    return { ok: false, error: message }
  }
}
