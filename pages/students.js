import Link from 'next/link'

import { members as students } from 'lib/constants/members'

import { Member } from 'components/elements'

import s from 'styles/pages/students.module.css'
import Head from 'next/head'

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export default function Students() {
	return (
		<>
			<Head>
				<style>
					{':root { --background-color: #ecd7d1 !important; }'}
				</style>
			</Head>
			<div style={{ padding: '2rem' }}>
				<h1>Student Directory</h1>
			</div>
			<div className={s.letters}>
				{ALPHABET.split('').map((letter, idx) => (
					<Link
						className={s.letter}
						href={`/students/${letter.toLowerCase()}`}
						onClick={(event) => event.preventDefault()}
						key={idx}
					>
						{letter}
					</Link>
				))}
			</div>
			<div className={s.students}>
				<h2 className={s.year}>Class of 2022</h2>
				<div className={s.class}>
					{students.map((student, idx) => (
						<Member member={student} key={idx} />
					))}
				</div>
			</div>
		</>
	)
}
