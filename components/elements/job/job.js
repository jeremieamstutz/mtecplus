import Image from 'next/image'
import Link from 'next/link'

import s from './job.module.css'

export function Job({ job }) {
	const { title, company, location, description, website } = job

	const match = website.match(/^(?:https?:)?(?:\/\/)?([^\/\?]+)/i)
	const hostname = match && match[1]
	const logo = `https://logo.clearbit.com/${hostname}?s=256`

	return (
		<Link
			className={s.job}
			href={website}
			target="_blank"
			rel="noreferrer noopener"
		>
			<Image
				className={s.logo}
				src={logo}
				alt={company}
				width={80}
				height={80}
			/>
			<div className={s.content}>
				<h3 className={s.title}>{title}</h3>
				<div className={s.details}>
					{company} · {location}
				</div>
				<p className={s.description}>{description}</p>
			</div>
		</Link>
	)
}
