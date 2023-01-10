import Head from 'next/head'
import { Formik } from 'formik'

import { students } from 'lib/constants/students'

import { Meta } from 'components/layout'
import { Hero, Member } from 'components/elements'
import { Input } from 'components/ui'

import s from 'styles/pages/students.module.css'

export default function Students() {
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
								{students
									.filter(
										({ first_name, last_name }) =>
											(first_name + ' ' + last_name)
												.toLowerCase()
												.indexOf(
													values.query.toLowerCase(),
												) > -1,
									)
									.map((student, idx) => (
										<Member member={student} key={idx} />
									))}
							</div>
						</div>
					</>
				)}
			</Formik>
		</>
	)
}
