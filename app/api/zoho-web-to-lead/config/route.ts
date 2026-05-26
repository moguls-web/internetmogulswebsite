import { NextResponse } from 'next/server'
import { getZohoWebToLeadConfig } from '@/lib/zoho/webToLead'

/** Public Web-to-Lead tokens (same as in Zoho embed HTML). Used for browser form POST. */
export async function GET() {
  const config = getZohoWebToLeadConfig()
  if (!config.configured) {
    return NextResponse.json(
      { configured: false, error: 'Zoho Web-to-Lead environment variables are not set.' },
      { status: 503 }
    )
  }

  return NextResponse.json({
    configured: true,
    actionUrl: config.actionUrl,
    xnQsjsdp: config.xnQsjsdp,
    xmIwtLD: config.xmIwtLD,
    returnURL: config.returnURL,
  })
}
