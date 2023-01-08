import { students } from 'lib/constants/students'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import s from 'styles/pages/student.module.css'

export default function Student() {
	const router = useRouter()

	const student = students.filter(
		(student) => student.slug === router.query.slug,
	)[0]

	if (!student) return

	const {
		first_name,
		last_name,
		roles,
		education,
		picture,
		contact: { email, linkedin, instagram },
	} = student

	return (
		<>
			<Head>
				<style>
					{':root { --background-color: #ecd7d1 !important; }'}
				</style>
			</Head>
			<section className={s.header}>
				<Image
					className={s.picture}
					src={picture}
					alt={name}
					width={256}
					height={256}
				/>
				<div className={s.info}>
					<h1 className={s.name}>{`${first_name} ${last_name}`}</h1>
					<div className={s.roles}>
						{roles.map(({ name }, idx) => (
							<div className={s.role} key={idx}>
								{name}
							</div>
						))}
					</div>
					<div className={s.education}>{education}</div>
					<div className={s.links}>
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
					</div>
				</div>
			</section>
		</>
	)
}
