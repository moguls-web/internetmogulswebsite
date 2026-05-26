import type { ZohoWebToLeadPublicConfig } from './submitFromBrowser'

const DEFAULT_ACTION = 'https://crm.zoho.in/crm/WebToLeadForm'
const DEFAULT_RETURN = 'https://www.internetmoguls.com/thank-you'

/** Tokens baked in at build time via next.config env (Railway ZOHO_* vars). */
export function getBuildTimeZohoConfig(): ZohoWebToLeadPublicConfig | null {
  const xnQsjsdp = process.env.NEXT_PUBLIC_ZOHO_XNQSJSDP?.trim()
  const xmIwtLD = process.env.NEXT_PUBLIC_ZOHO_XMIWTLD?.trim()
  if (!xnQsjsdp || !xmIwtLD) return null

  return {
    actionUrl:
      process.env.NEXT_PUBLIC_ZOHO_WEBTOLEAD_URL?.trim() || DEFAULT_ACTION,
    xnQsjsdp,
    xmIwtLD,
    returnURL:
      process.env.NEXT_PUBLIC_ZOHO_RETURN_URL?.trim() || DEFAULT_RETURN,
  }
}

let cachedConfig: ZohoWebToLeadPublicConfig | null | undefined

export async function fetchZohoWebToLeadConfig(): Promise<ZohoWebToLeadPublicConfig | null> {
  if (cachedConfig !== undefined) return cachedConfig

  const fromBuild = getBuildTimeZohoConfig()
  if (fromBuild) {
    cachedConfig = fromBuild
    return fromBuild
  }

  try {
    const response = await fetch('/api/zoho-web-to-lead/config/', {
      method: 'GET',
      cache: 'no-store',
    })
    if (!response.ok) {
      cachedConfig = null
      return null
    }
    const data = await response.json()
    if (!data?.xnQsjsdp || !data?.xmIwtLD) {
      cachedConfig = null
      return null
    }
    cachedConfig = {
      actionUrl: data.actionUrl || DEFAULT_ACTION,
      xnQsjsdp: data.xnQsjsdp,
      xmIwtLD: data.xmIwtLD,
      returnURL: data.returnURL || DEFAULT_RETURN,
    }
    return cachedConfig
  } catch {
    cachedConfig = null
    return null
  }
}
