import Image from 'next/image'
import Link from 'next/link'

import s from './member.module.css'

export function Member({
	member: { slug, first_name, last_name, roles, picture },
}) {
	return (
		<Link className={s.card} href={`/students/${slug}`}>
			<Image
				className={s.image}
				alt={`${first_name} ${last_name}`}
				src={picture}
				width={256}
				height={256}
			/>
			<div className={s.details}>
				<h3 className={s.name}>{`${first_name} ${last_name}`}</h3>
				{roles && <div className={s.role}>{roles[0].name}</div>}
			</div>
		</Link>
	)
}
