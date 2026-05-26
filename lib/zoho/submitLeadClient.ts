import { fetchZohoWebToLeadConfig } from './clientConfig'
import { submitZohoWebToLeadFromBrowser } from './submitFromBrowser'
import type { ContactLeadPayload } from './webToLead'

const ZOHO_API_URL = '/api/zoho-web-to-lead/'

/**
 * Submit lead to Zoho CRM via server API (primary) and browser form POST (backup).
 * Uses trailing slash to avoid Next.js 308 redirect stripping POST bodies.
 */
export async function submitLeadToZohoCRM(
  payload: ContactLeadPayload
): Promise<void> {
  const config = await fetchZohoWebToLeadConfig()
  if (!config) {
    throw new Error(
      'Zoho CRM is not configured. In Railway, set ZOHO_XNQSJSDP and ZOHO_XMIWTLD, then redeploy.'
    )
  }

  let serverOk = false
  let serverError = ''

  try {
    const response = await fetch(ZOHO_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      cache: 'no-store',
    })
    const data = (await response.json().catch(() => ({}))) as {
      ok?: boolean
      error?: string
    }
    if (response.ok && data.ok) {
      serverOk = true
    } else {
      serverError = data.error || `Server returned ${response.status}`
    }
  } catch (err) {
    serverError = err instanceof Error ? err.message : 'Network error'
  }

  try {
    await submitZohoWebToLeadFromBrowser(config, payload)
  } catch {
    if (!serverOk) {
      throw new Error(
        serverError ||
          'Could not submit to Zoho CRM. Please try again or call +91 8826104440.'
      )
    }
  }

  if (!serverOk) {
    console.warn('Zoho server API did not confirm lead; browser form was used.', serverError)
  }
}
