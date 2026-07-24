// Same-origin proxy for the contact form. Keeps the intake secret server-side
// and avoids CORS: the browser only ever talks to this route, which then
// forwards to rozalix-web-app's POST /api/leads with the shared secret.

type LeadRequestBody = {
  firstName?: unknown
  lastName?: unknown
  email?: unknown
  phone?: unknown
  message?: unknown
  company?: unknown
  ptype?: unknown
  budget?: unknown
}

function str(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}

export async function POST(request: Request) {
  let body: LeadRequestBody
  try {
    body = (await request.json()) as LeadRequestBody
  } catch {
    return Response.json({ error: 'invalid request body' }, { status: 400 })
  }

  const firstName = str(body?.firstName)
  const lastName = str(body?.lastName)
  const phone = str(body?.phone)
  const message = str(body?.message)
  const email = str(body?.email)
  const company = str(body?.company)
  const ptype = str(body?.ptype)
  const budget = str(body?.budget)

  if (!firstName || !lastName || !phone || !message) {
    return Response.json({ error: 'missing required field' }, { status: 400 })
  }

  const appUrl = process.env.ROZALIX_APP_URL
  const secret = process.env.LEAD_INTAKE_SECRET
  if (!appUrl || !secret) {
    console.error('/api/lead: missing ROZALIX_APP_URL or LEAD_INTAKE_SECRET')
    return Response.json({ error: 'failed' }, { status: 502 })
  }

  let upstream: Response
  try {
    upstream = await fetch(`${appUrl}/api/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-intake-secret': secret,
      },
      body: JSON.stringify({
        clientId: 'rozalix-landing',
        firstName,
        lastName,
        phone,
        message,
        email,
        fields: {
          company,
          projectType: ptype,
          budget,
        },
      }),
    })
  } catch (err) {
    console.error('/api/lead: upstream request failed', err)
    return Response.json({ error: 'failed' }, { status: 502 })
  }

  if (!upstream.ok) {
    console.error('/api/lead: upstream returned', upstream.status)
    return Response.json({ error: 'failed' }, { status: 502 })
  }

  const lead = await upstream.json()
  return Response.json(lead, { status: 201 })
}
