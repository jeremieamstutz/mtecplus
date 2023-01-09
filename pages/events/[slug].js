import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { events } from 'lib/constants/events'

import { Hero } from 'components/elements'

import s from 'styles/pages/event.module.css'
import { Button } from 'components/ui'
import { Meta } from 'components/layout'

export default function Event() {
	const router = useRouter()

	const event = events.filter((event) => event.slug === router.query.slug)[0]

	if (!event) return

	const { date, title, headline, image, body, registration_link } = event

	return (
		<>
			<Head>
				<style>
					{':root { --background-color: #fefae0 !important; }'}
				</style>
			</Head>
			<Meta title={title} />
			<Hero title={title} subtitle={headline} />
			{/* <div className={s.date}>
					{new Date(date).toLocaleDateString()}
				</div> */}
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
			{registration_link && (
				<Button href={registration_link}>Register now</Button>
			)}
		</>
	)
}
