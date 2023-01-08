import Image from 'next/image'
import Link from 'next/link'

import s from './event.module.css'

export function Event({ event: { slug, date, title, headline, image } }) {
	return (
		<Link className={s.card} href={`/events/${slug}`}>
			<Image
				className={s.image}
				alt={title}
				src={image}
				width={512}
				height={512}
			/>
			<div className={s.details}>
				<div className={s.date}>
					{new Date(date).toLocaleDateString()}
				</div>
				<h3 className={s.title}>{title}</h3>
				<div className={s.headline}>{headline}</div>
			</div>
		</Link>
	)
}
