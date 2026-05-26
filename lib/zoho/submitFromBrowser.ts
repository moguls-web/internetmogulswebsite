import {
  buildZohoContactLeadBody,
  normalizeZohoPicklistValue,
  type ContactLeadPayload,
} from './webToLead'

export type ZohoWebToLeadPublicConfig = {
  actionUrl: string
  xnQsjsdp: string
  xmIwtLD: string
  returnURL: string
}

export function submitZohoWebToLeadFromBrowser(
  config: ZohoWebToLeadPublicConfig,
  payload: ContactLeadPayload
): Promise<void> {
  if (typeof document === 'undefined') {
    return Promise.resolve()
  }

  const normalized: ContactLeadPayload = {
    ...payload,
    numberOfRooms: normalizeZohoPicklistValue(payload.numberOfRooms),
    averageRoomRate: normalizeZohoPicklistValue(payload.averageRoomRate),
    bookingSource: normalizeZohoPicklistValue(payload.bookingSource),
    banquetEnquiries: normalizeZohoPicklistValue(payload.banquetEnquiries),
    restaurantDiscoverable: normalizeZohoPicklistValue(payload.restaurantDiscoverable),
    otherChallenges: payload.otherChallenges?.trim() || 'N/A',
  }

  const body = buildZohoContactLeadBody(normalized, {
    xnQsjsdp: config.xnQsjsdp,
    xmIwtLD: config.xmIwtLD,
    returnURL: config.returnURL,
  })

  return new Promise((resolve) => {
    const iframeName = 'zoho_webtolead_iframe'
    let iframe = document.getElementById(iframeName) as HTMLIFrameElement | null
    if (!iframe) {
      iframe = document.createElement('iframe')
      iframe.name = iframeName
      iframe.id = iframeName
      iframe.title = 'Zoho CRM'
      iframe.setAttribute('aria-hidden', 'true')
      iframe.style.cssText = 'display:none;width:0;height:0;border:0'
      document.body.appendChild(iframe)
    }

    const form = document.createElement('form')
    form.method = 'POST'
    form.action = config.actionUrl
    form.target = iframeName
    form.acceptCharset = 'UTF-8'
    form.style.display = 'none'

    for (const [name, value] of body.entries()) {
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = name
      input.value = value
      form.appendChild(input)
    }

    document.body.appendChild(form)

    try {
      ;(document as Document & { charset?: string }).charset = 'UTF-8'
    } catch {
      /* ignore */
    }

    form.submit()

    window.setTimeout(() => {
      form.remove()
      resolve()
    }, 2500)
  })
}
