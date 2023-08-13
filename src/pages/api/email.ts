import type { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

const { RESEND_API_KEY, EMAIL_SENDER } = process.env
const resend = new Resend(RESEND_API_KEY)
interface IRequest {
  name: string
  toEmail: string
  subject: string
}

export default async function onSendMail (
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body } = req

  if (!body) { res.status(403).send({ error: 'You must send the body content.' }); return }
  const { name, toEmail, subject }: IRequest = body

  const mail = {
    to: 'deviego4@gmail.com',
    from: EMAIL_SENDER ?? '',
    subject,
    html:
    `
      <div>
        <strong>You got a new email from ${name}, ${toEmail}</strong>
        <p>${subject}</p>
      </div>
    `
  }

  await resend.emails.send(mail).catch()
  res.status(201)
}
