import Image from 'next/image'
import Link from 'next/link'

import s from './member.module.css'

export function Member({ member: { name, role, picture, contact } }) {
	return (
		<div className={s.card}>
			<Image
				className={s.image}
				alt={name}
				src={picture}
				width={256}
				height={256}
			/>
			<div className={s.details}>
				<h3 className={s.name}>{name}</h3>
				{role ? (
					<div className={s.role}>{role}</div>
				) : (
					<div>BSc Civil Engineering, EPFL</div>
				)}
				{/* <div></div>
				<div>Swiss · 24 yo</div> */}
				{/* {contact && (
					<Link href={`mailto:${contact}`} className={s.contact}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={20}
							height={20}
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={1.5}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
					</Link>
				)} */}
			</div>
		</div>
	)
}
