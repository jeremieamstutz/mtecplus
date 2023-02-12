import Head from 'next/head'
import Link from 'next/link'

import { jobs } from 'lib/constants/jobs'

import { Meta } from 'components/layout'
import { Hero, Job } from 'components/elements'
import { Input } from 'components/ui'

import s from 'styles/pages/jobs.module.css'
import { Formik } from 'formik'

export default function Jobs() {
	return (
		<>
			<Head>
				<style>
					{':root { --background-color: #ecd7d1 !important; }'}
				</style>
			</Head>
			<Meta title="Jobs" />
			<Hero
				title="Jobs"
				subtitle={
					<>
						You would like to advertise a position on this board ?{' '}
						<Link href="mailto:jobs@plus.mtec.ethz.ch">
							Contact us
						</Link>
					</>
				}
			/>
			<Formik initialValues={{ query: '' }}>
				{({ values }) => (
					<>
						<Input
							name="query"
							type="search"
							placeholder="Search..."
						/>

						<div className={s.jobs}>
							{jobs
								.filter(
									(job) =>
										job.title
											.toLowerCase()
											.indexOf(
												values.query.toLowerCase(),
											) > -1 ||
										job.company
											.toLowerCase()
											.indexOf(
												values.query.toLowerCase(),
											) > -1,
								)
								.map((job, idx) => (
									<Job job={job} key={idx} />
								))}
						</div>
					</>
				)}
			</Formik>
		</>
	)
}
