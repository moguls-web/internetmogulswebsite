import type { ContactLeadPayload } from './webToLead'

export function sanitizeContactLeadPayload(
  payload: ContactLeadPayload
): ContactLeadPayload {
  const website = payload.website?.trim()
  const skipWebsite =
    !website ||
    website === 'https://' ||
    website === 'http://' ||
    website === 'https://www.' ||
    website === 'http://www.'

  return {
    ...payload,
    website: skipWebsite ? undefined : website,
    otherChallenges: payload.otherChallenges?.trim() || 'N/A',
  }
}
