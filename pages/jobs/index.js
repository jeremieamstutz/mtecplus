import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { jobs } from 'lib/constants/jobs'

import { Meta } from 'components/layout'
import { Hero, Job } from 'components/elements'
import { Input } from 'components/ui'

import s from 'styles/pages/jobs.module.css'

export default function Jobs() {
	const [query, setQuery] = useState('')

	const filteredJobs = jobs.filter(
		(job) =>
			job.title.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
			job.company.toLowerCase().indexOf(query.toLowerCase()) > -1,
	)
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
			<Input
				type="search"
				placeholder="Search..."
				value={query}
				onChange={(event) => setQuery(event.target.value)}
			/>
			<div className={s.jobs}>
				{filteredJobs.map((job, idx) => (
					<Job job={job} key={idx} />
				))}
			</div>
		</>
	)
}
