import Head from 'next/head'

import { Meta } from 'components/layout'
import { google } from 'googleapis'

import s from 'styles/pages/student.module.css'
import Image from 'next/image'

export default function Person({ person }) {
	const {
		first_name,
		last_name,
		// roles,
		education,
		picture,
		// contact: { email, linkedin, instagram },
	} = person

	return (
		<>
			<Head>
				<style>
					{':root { --background-color: #ecd7d1 !important; }'}
				</style>
			</Head>
			<Meta title={`${first_name} ${last_name}`} />
			<section className={s.header}>
				<Image
					className={s.picture}
					src={picture}
					alt={`${first_name} ${last_name}`}
					width={256}
					height={256}
				/>
				<div className={s.info}>
					<h1 className={s.name}>{`${first_name} ${last_name}`}</h1>
					{/* <div className={s.roles}>
						{roles.map(({ name }, idx) => (
							<div className={s.role} key={idx}>
								{name}
							</div>
						))}
					</div> */}
					<div className={s.education}>{education}</div>
					{/* <div className={s.links}>
						{email && (
							<Link className={s.link} href={email}>
								Linkedin
							</Link>
						)}
						{linkedin && (
							<Link className={s.link} href={linkedin}>
								Linkedin
							</Link>
						)}
						{instagram && (
							<Link className={s.link} href={instagram}>
								Instagram
							</Link>
						)}
					</div> */}
				</div>
			</section>
		</>
	)
}

export async function getStaticPaths() {
	const auth = new google.auth.GoogleAuth({
		credentials: {
			client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
			private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(
				/\\n/g,
				'\n',
			),
		},
		scopes: ['https://www.googleapis.com/auth/spreadsheets'],
	})

	const sheets = google.sheets({
		auth,
		version: 'v4',
	})

	const response = await sheets.spreadsheets.values.get({
		spreadsheetId: '1TEujoucfd2n43tan5gH_pbKi9eyr7n3hZfpU6PDEDZg',
		range: 'Directory',
	})

	const [header, types, ...rows] = response.data.values

	const people = []
	for (const row of rows) {
		const person = {}
		for (const [index, value] of row.entries()) {
			person[header[index]] = value
		}
		people.push(person)
	}

	return {
		paths: people.map((person) => ({ params: { slug: person.slug } })),
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	const auth = new google.auth.GoogleAuth({
		credentials: {
			client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
			private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(
				/\\n/g,
				'\n',
			),
		},
		scopes: ['https://www.googleapis.com/auth/spreadsheets'],
	})

	const sheets = google.sheets({
		auth,
		version: 'v4',
	})

	const response = await sheets.spreadsheets.values.get({
		spreadsheetId: '1TEujoucfd2n43tan5gH_pbKi9eyr7n3hZfpU6PDEDZg',
		range: 'Directory',
	})

	const [header, types, ...rows] = response.data.values

	const people = []
	for (const row of rows) {
		const person = {}
		for (const [index, value] of row.entries()) {
			person[header[index]] = value
		}
		people.push(person)
	}

	const person = people.filter((person) => person.slug === params.slug)[0]

	return {
		props: {
			person: person,
		},
		revalidate: 60,
	}
}
