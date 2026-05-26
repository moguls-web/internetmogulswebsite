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

export function buildZohoContactLeadBody(
  payload: ContactLeadPayload,
  tokens: { xnQsjsdp: string; xmIwtLD: string; returnURL?: string }
): URLSearchParams {
  const body = new URLSearchParams()

  body.set('xnQsjsdp', tokens.xnQsjsdp)
  body.set('zc_gad', '')
  body.set('xmIwtLD', tokens.xmIwtLD)
  body.set('actionType', 'TGVhZHM=')
  body.set('returnURL', tokens.returnURL ?? 'null')

  body.set('First Name', payload.firstName)
  body.set('Last Name', payload.lastName)
  body.set('Email', payload.email)
  body.set('Mobile', payload.mobile)
  body.set('Company', payload.company)
  body.set('City', payload.city)
  body.set('LEADCF7', payload.averageRoomRate)
  body.set('LEADCF8', payload.numberOfRooms)
  body.set('LEADCF22', payload.otherChallenges ?? '')
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
    returnURL: process.env.ZOHO_RETURN_URL?.trim() || 'null',
  }
}

export async function submitContactLeadToZoho(
  payload: ContactLeadPayload
): Promise<{ ok: boolean; skipped?: boolean; status?: number; error?: string }> {
  const config = getZohoWebToLeadConfig()
  if (!config.configured) {
    return { ok: false, skipped: true, error: 'Zoho Web-to-Lead is not configured' }
  }

  const body = buildZohoContactLeadBody(payload, {
    xnQsjsdp: config.xnQsjsdp,
    xmIwtLD: config.xmIwtLD,
    returnURL: config.returnURL,
  })

  try {
    const response = await fetch(config.actionUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: body.toString(),
    })

    if (!response.ok) {
      return {
        ok: false,
        status: response.status,
        error: `Zoho returned HTTP ${response.status}`,
      }
    }

    return { ok: true, status: response.status }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Zoho request failed'
    return { ok: false, error: message }
  }
}
