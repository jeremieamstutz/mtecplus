import Head from 'next/head'
import { Formik } from 'formik'

import { Meta } from 'components/layout'
import { Hero } from 'components/elements'
import { Input, Modal } from 'components/ui'

import s from 'styles/pages/students.module.css'
import { google } from 'googleapis'
import { useState } from 'react'

// https://www.vorlesungen.ethz.ch/Vorlesungsverzeichnis/sucheLehrangebot.view?lang=en&search=on&semkez=2023S&studiengangTyp=&deptId=&studiengangAbschnittId=&lerneinheitstitel=&lerneinheitscode=&famname=&rufname=&wahlinfo=&lehrsprache=&periodizitaet=&kpRange=0%2C999&katalogdaten=&_strukturAus=on&search=Search
// https://www.gla.ac.uk/coursecatalogue/course/?code=ENG4050
// https://pgc.unige.ch/main/teachings/details/2022-S411040

function filter(objects, query) {
	// console.log(objects, query)
	return objects.filter((object) =>
		Object.keys(object).some((key) =>
			object[key]
				? object[key]
						?.toString()
						?.toLowerCase()
						?.indexOf(query.toLowerCase()) !== -1
				: false,
		),
	)
}

export default function Lectures({ lectures }) {
	const [showModal, setShowModal] = useState(false)

	return (
		<>
			<Head>
				<style>
					{':root { --background-color: #e6d1ec !important; }'}
				</style>
			</Head>
			<Meta title="Lectures" />
			<Hero title="Lectures" />
			{showModal && (
				<LectureModal
					lecture={
						lectures.filter(
							(lecture) => lecture.slug === showModal,
						)[0]
					}
					onClose={() => setShowModal(false)}
				/>
			)}
			<Formik initialValues={{ query: '' }}>
				{({ values }) => (
					<>
						<Input
							name="query"
							type="search"
							placeholder="Search..."
						/>
						<div className={s.students}>
							<h2 className={s.year}>Lectures</h2>
							<div className={s.class}>
								{filter(lectures, values.query).map(
									(
										{ slug, code, title, instructor },
										idx,
									) => {
										const re = new RegExp(
											values.query,
											'gi',
										)
										function highlight(string) {
											return values.query.length > 0
												? string.replace(
														re,
														(match) =>
															`<strong style="background: yellow">${match}</strong>`,
												  )
												: string
										}

										return (
											<div
												onClick={() =>
													setShowModal(slug)
												}
												key={idx}
											>
												<div>{code}</div>
												<h3
													dangerouslySetInnerHTML={{
														__html: highlight(
															title,
														),
													}}
												/>
												<div
													dangerouslySetInnerHTML={{
														__html: highlight(
															instructor,
														),
													}}
												/>
											</div>
										)
									},
								)}
							</div>
						</div>
					</>
				)}
			</Formik>
		</>
	)
}

function LectureModal({
	lecture: { code, instructor, title, summary, objectives, content },
	onClose,
}) {
	return (
		<Modal onClose={onClose}>
			<header style={{ padding: '1rem', borderBottom: '1px solid #000' }}>
				<h2>{title}</h2>
			</header>
			<main
				style={{
					padding: '1.5rem',
					display: 'flex',
					flexDirection: 'column',
					gap: '1rem',
				}}
			>
				<div>
					{code} - {instructor}
				</div>
				<section>
					<h3>Summary</h3>
					<p>{summary}</p>
				</section>
				<section>
					<h3>Objectives</h3>
					<p style={{ whiteSpace: 'pre', overflowWrap: 'normal' }}>
						{objectives}
					</p>
				</section>
				<section>
					<h3>Content</h3>
					<p>{content}</p>
				</section>
			</main>
		</Modal>
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
		range: 'Lectures',
	})

	const [header, types, ...rows] = response.data.values

	let lectures = []
	for (const row of rows) {
		const lecture = {}
		for (const [index, value] of row.entries()) {
			lecture[header[index]] = value
		}
		lectures.push(lecture)
	}

	// console.log(lectures)

	lectures = [...lectures, ...lectures, ...lectures]
	lectures = [...lectures, ...lectures, ...lectures]
	lectures = [...lectures, ...lectures, ...lectures]

	lectures = lectures.map((lecture) => ({
		...lecture,
		level: null,
		faculty: null,
		area: null,
	}))

	return {
		props: {
			lectures: lectures,
		},
		revalidate: 60,
	}
}
