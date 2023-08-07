import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

const { SG_API_KEY, EMAIL_SENDER } = process.env
sgMail.setApiKey(SG_API_KEY ?? '')

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

  if (!toEmail || !subject) { res.status(400).send({ error: 'Bad request' }); return }

  const mail = {
    to: toEmail,
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

  await sgMail.send(mail)
  res.status(201).send({ msg: 'Mail sent' })
}
