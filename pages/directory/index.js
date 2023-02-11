import Head from 'next/head'
import { Formik } from 'formik'

import { Meta } from 'components/layout'
import { Hero, Member } from 'components/elements'
import { Input } from 'components/ui'

import s from 'styles/pages/students.module.css'
import { google } from 'googleapis'

export default function Directory({ people }) {
	return (
		<>
			<Head>
				<style>
					{':root { --background-color: #e6d1ec !important; }'}
				</style>
			</Head>
			<Meta title="Directory" />
			<Hero title="Directory" />
			<Formik initialValues={{ query: '' }}>
				{({ values }) => (
					<>
						<Input
							name="query"
							type="search"
							placeholder="Search..."
						/>
						<div className={s.students}>
							<h2 className={s.year}>Class of 2022</h2>
							<div className={s.class}>
								{people
									.filter(
										({ first_name, last_name }) =>
											(first_name + ' ' + last_name)
												.toLowerCase()
												.indexOf(
													values.query.toLowerCase(),
												) > -1,
									)
									.map((person, idx) => (
										<Member member={person} key={idx} />
									))}
							</div>
						</div>
					</>
				)}
			</Formik>
		</>
	)
}

export async function getStaticProps() {
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

	console.log(people)

	return {
		props: {
			people: people,
		},
		revalidate: 60,
	}
}
