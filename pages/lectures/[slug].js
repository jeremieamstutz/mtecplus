import Head from 'next/head'
import { Formik } from 'formik'

import { Meta } from 'components/layout'
import { Hero, Member } from 'components/elements'
import { Input } from 'components/ui'

import s from 'styles/pages/students.module.css'
import { google } from 'googleapis'
import Link from 'next/link'
import { object } from 'yup'

export default function Directory({ lecture }) {
	return (
		<>
			<Head>
				<style>
					{':root { --background-color: #e6d1ec !important; }'}
				</style>
			</Head>
			<Meta title={lecture.title} />
			<Hero title={lecture.title} />
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
		range: 'Lectures',
	})

	const [header, types, ...rows] = response.data.values

	const lectures = []
	for (const row of rows) {
		const lecture = {}
		for (const [index, value] of row.entries()) {
			lecture[header[index]] = value
		}
		lectures.push(lecture)
	}

	return {
		paths: lectures.map((lecture) => ({ params: { slug: lecture.slug } })),
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
		range: 'Lectures',
	})

	const [header, types, ...rows] = response.data.values

	const lectures = []
	for (const row of rows) {
		const lecture = {}
		for (const [index, value] of row.entries()) {
			lecture[header[index]] = value
		}
		lectures.push(lecture)
	}

	const lecture = lectures.filter(
		(lecture) => lecture.slug === params.slug,
	)[0]

	return {
		props: {
			lecture: lecture,
		},
		revalidate: 60,
	}
}
