import Head from 'next/head'

import { students } from 'lib/constants/students'

import { Hero, Member } from 'components/elements'

import s from 'styles/pages/students.module.css'
import { Input } from 'components/ui'
import { useState } from 'react'
import { Meta } from 'components/layout'

export default function Students() {
	const [query, setQuery] = useState('')

	const filteredStudents = students.filter(
		({ first_name, last_name }) =>
			(first_name + ' ' + last_name)
				.toLowerCase()
				.indexOf(query.toLowerCase()) > -1,
	)

	return (
		<>
			<Head>
				<style>
					{':root { --background-color: #ecd7d1 !important; }'}
				</style>
			</Head>
			<Meta title="Directory" />
			<Hero title="Directory" />
			<Input
				type="search"
				placeholder="Search..."
				value={query}
				onChange={(event) => setQuery(event.target.value)}
			/>
			<div className={s.students}>
				<h2 className={s.year}>Class of 2022</h2>
				<div className={s.class}>
					{filteredStudents.map((student, idx) => (
						<Member member={student} key={idx} />
					))}
				</div>
			</div>
		</>
	)
}
