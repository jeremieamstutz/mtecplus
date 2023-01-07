import { useRouter } from 'next/router'
import Image from 'next/image'

import { events } from 'lib/constants/events'

import s from 'styles/pages/event.module.css'

export default function Event() {
	const router = useRouter()

	const event = events.filter((event) => event.slug === router.query.slug)[0]

	if (!event) return

	const { date, title, headline, body, image } = event

	return (
		<>
			<div className={s.hero}>
				<div className={s.date}>
					{new Date(date).toLocaleDateString()}
				</div>
				<h1 className={s.title}>{title}</h1>
				<div className={s.headline}>{headline}</div>
			</div>
			<Image
				className={s.image}
				alt={title}
				src={image}
				width={900}
				height={600}
			/>
			<div className={s.body}>
				{body?.split('\n').map((paragraph, idx) => (
					<p key={idx}>{paragraph}</p>
				))}
			</div>
		</>
	)
}
