import Head from 'next/head'
import Link from 'next/link'

import { Meta } from 'components/layout'
import { Hero } from 'components/elements'
import { BriefcaseIcon, DocumentsIcon } from 'components/icons'

const services = [
	{
		icon: <BriefcaseIcon width={32} height={32} />,
		name: 'AI Cover Letter',
		description: 'Let GPT-3 write a beautiful cover letter',
		link: '/services/cover-letter',
	},
	{
		icon: <DocumentsIcon width={32} height={32} />,
		name: 'Magic Drive',
		description: 'Old slides, summaries, and exams',
		link: 'https://drive.google.com/drive/folders/1pLsLAcpe_QKffzoKIqufvvTIruIp6JxQ?usp=sharing',
	},
]

import s from 'styles/pages/services.module.css'

export default function Services() {
	return (
		<>
			<Head>
				<style>
					{':root { --background-color: #faedcd !important; }'}
				</style>
			</Head>
			<Meta title="Services" />
			<Hero title="Services" />
			<div className={s.services}>
				{services.map(({ icon, name, description, link }) => (
					<Link className={s.service} href={link}>
						{icon}
						<h3>{name}</h3>
						<p>{description}</p>
					</Link>
				))}
			</div>
		</>
	)
}
