import {
  buildZohoContactLeadBody,
  normalizeZohoPicklistValue,
  type ContactLeadPayload,
} from './webToLead'
import { sanitizeContactLeadPayload } from './sanitizePayload'

export type ZohoWebToLeadPublicConfig = {
  actionUrl: string
  xnQsjsdp: string
  xmIwtLD: string
  returnURL: string
}

/** Zoho embed form id from CRM Web-to-Lead setup. */
export const ZOHO_FORM_NAME = 'WebToLeads1833590000044323165'

function normalizePayload(payload: ContactLeadPayload): ContactLeadPayload {
  const clean = sanitizeContactLeadPayload(payload)
  return {
    ...clean,
    numberOfRooms: normalizeZohoPicklistValue(clean.numberOfRooms),
    averageRoomRate: normalizeZohoPicklistValue(clean.averageRoomRate),
    bookingSource: normalizeZohoPicklistValue(clean.bookingSource),
    banquetEnquiries: normalizeZohoPicklistValue(clean.banquetEnquiries),
    restaurantDiscoverable: normalizeZohoPicklistValue(clean.restaurantDiscoverable),
  }
}

/**
 * POST to Zoho the way their embed does: real HTML form + hidden iframe.
 * This is more reliable than server-side fetch for Web-to-Lead.
 */
export function submitZohoWebToLeadFromBrowser(
  config: ZohoWebToLeadPublicConfig,
  payload: ContactLeadPayload
): Promise<void> {
  if (typeof document === 'undefined') {
    return Promise.resolve()
  }

  const normalized = normalizePayload(payload)
  const body = buildZohoContactLeadBody(normalized, {
    xnQsjsdp: config.xnQsjsdp,
    xmIwtLD: config.xmIwtLD,
    returnURL: config.returnURL,
  })

  return new Promise((resolve, reject) => {
    const iframeName = 'zoho_webtolead_iframe'
    let iframe = document.getElementById(iframeName) as HTMLIFrameElement | null
    if (!iframe) {
      iframe = document.createElement('iframe')
      iframe.name = iframeName
      iframe.id = iframeName
      iframe.title = 'Zoho CRM'
      iframe.setAttribute('aria-hidden', 'true')
      iframe.style.cssText =
        'position:absolute;width:0;height:0;border:0;visibility:hidden'
      document.body.appendChild(iframe)
    }

    const form = document.createElement('form')
    form.method = 'POST'
    form.action = config.actionUrl
    form.name = ZOHO_FORM_NAME
    form.id = 'webform1833590000044323165'
    form.target = iframeName
    form.acceptCharset = 'UTF-8'
    form.className = 'crmWebToEntityForm'
    form.style.display = 'none'

    for (const [name, value] of body.entries()) {
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = name
      input.value = value
      form.appendChild(input)
    }

    let settled = false
    const finish = (ok: boolean) => {
      if (settled) return
      settled = true
      form.remove()
      if (ok) resolve()
      else reject(new Error('Zoho form submission did not complete'))
    }

    const timeout = window.setTimeout(() => finish(true), 4000)

    iframe.onload = () => {
      window.clearTimeout(timeout)
      try {
        const doc = iframe?.contentDocument
        const text = doc?.body?.innerText?.toLowerCase() || ''
        if (
          text.includes('successfully received') ||
          text.includes('thank you for choosing') ||
          text.length === 0
        ) {
          finish(true)
        } else {
          finish(true)
        }
      } catch {
        finish(true)
      }
    }

    document.body.appendChild(form)

    try {
      ;(document as Document & { charset?: string }).charset = 'UTF-8'
    } catch {
      /* ignore */
    }

    form.submit()
  })
}
