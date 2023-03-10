import { Hero, Member } from 'components/elements'
import Link from 'next/link'

import { students } from 'lib/constants/students'

import s from 'styles/pages/about.module.css'
import { Button } from 'components/ui'
import Head from 'next/head'
import { Meta } from 'components/layout'

export default function About() {
	const members = students.filter((student) => !!student.roles)

	return (
		<>
			<Head>
				<style>
					{':root { --background-color: #e9edc9 !important; }'}
				</style>
			</Head>
			<Meta title="About" />
			<Hero
				title="About"
				subtitle={
					<>
						MTEC+ is the student organization of{' '}
						<Link href="https://mtec.ethz.ch">MTEC</Link>&apos;s
						students. It organises events and excursions for
						students, and provides study support and representation
						at the department.
					</>
				}
			/>
			<div
				style={{
					width: '100%',
					display: 'grid',
					gap: '1.5rem',
					gridTemplateColumns:
						'repeat(auto-fill, minmax(15rem, 15fr))',
				}}
			>
				{members.map((member, idx) => (
					<Member member={member} key={idx} />
				))}
			</div>
			<div className={s.cta}>
				<div style={{ fontSize: '1.25rem' }}>
					What about you ? Do you want to join us to organize the best
					events ?
				</div>
				<Button>Join the team</Button>
			</div>
		</>
	)
}
