import { NextRequest, NextResponse } from 'next/server'
import {
  type ContactLeadPayload,
  getZohoWebToLeadConfig,
  submitContactLeadToZoho,
} from '@/lib/zoho/webToLead'

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

function parsePayload(body: unknown): ContactLeadPayload | null {
  if (!body || typeof body !== 'object') return null
  const data = body as Record<string, unknown>

  const required = [
    'firstName',
    'lastName',
    'email',
    'mobile',
    'company',
    'city',
    'numberOfRooms',
    'averageRoomRate',
    'revenueImpactAreas',
    'bookingSource',
    'banquetEnquiries',
    'restaurantDiscoverable',
  ] as const

  for (const key of required) {
    if (!isNonEmptyString(data[key])) return null
  }

  return {
    firstName: data.firstName.trim(),
    lastName: data.lastName.trim(),
    email: data.email.trim(),
    mobile: data.mobile.trim(),
    website: isNonEmptyString(data.website) ? data.website.trim() : undefined,
    company: data.company.trim(),
    city: data.city.trim(),
    numberOfRooms: data.numberOfRooms.trim(),
    averageRoomRate: data.averageRoomRate.trim(),
    revenueImpactAreas: data.revenueImpactAreas.trim(),
    bookingSource: data.bookingSource.trim(),
    banquetEnquiries: data.banquetEnquiries.trim(),
    restaurantDiscoverable: data.restaurantDiscoverable.trim(),
    otherChallenges: isNonEmptyString(data.otherChallenges)
      ? data.otherChallenges.trim()
      : undefined,
  }
}

export async function POST(request: NextRequest) {
  const config = getZohoWebToLeadConfig()
  if (!config.configured) {
    return NextResponse.json(
      {
        ok: false,
        skipped: true,
        error:
          'Zoho CRM is not configured. Set ZOHO_XNQSJSDP and ZOHO_XMIWTLD in environment variables (from Zoho Web-to-Lead embed code).',
      },
      { status: 503 }
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON body' }, { status: 400 })
  }

  const payload = parsePayload(body)
  if (!payload) {
    return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 })
  }

  const result = await submitContactLeadToZoho(payload)
  if (result.skipped) {
    return NextResponse.json({ ok: false, skipped: true, error: result.error }, { status: 503 })
  }
  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: result.error, status: result.status },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
