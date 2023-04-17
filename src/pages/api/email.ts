import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { IEmailInputs } from '../../schemas/Email';

export default async function onSendMail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const data: IEmailInputs = req.body;

      const mailTransporter = nodemailer.createTransport({
        host: 'smtp.mandrillapp.com',
        port: 465,
        auth:{
          user:"deviego",
          pass:"md-zx9sQCC4lMeL_Ehm9wGnNw"
         
        }
        
      });

      const mailDetails = {
        from: data.name,
        to: "deviego4@gmail.com",
        subject: `${data.name} - via deviego.dev`,
        text: `
        Name: ${data.name}
        Email: ${data.email}
        ${data.message}`
      };
     

      await mailTransporter.sendMail(mailDetails); 
      console.log(mailDetails)
      return res.status(200).json({ message: 'Email sent' });
    } catch (error: any) {
      res
        .status(510)
        .send({ message: `cheguei mais dei ruim: ${error.message}` });
    }

  }
  return res.status(405).json({ message: 'method not accept' });
}
