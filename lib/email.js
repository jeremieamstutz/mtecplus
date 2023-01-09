import { createTransport } from 'nodemailer'

export const transporter = createTransport({
	host: process.env.EMAIL_SERVER_HOST,
	port: process.env.EMAIL_SERVER_PORT,
	auth: {
		user: process.env.EMAIL_SERVER_USER,
		pass: process.env.EMAIL_SERVER_PASSWORD,
	},
})
