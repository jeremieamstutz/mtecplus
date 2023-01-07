import Image from 'next/image'
import s from './event.module.css'

export function Event({ event: { date, title, headline, image } }) {
	return (
		<div className={s.card}>
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
		</div>
	)
}
