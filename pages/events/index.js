import { Event, Hero } from 'components/elements'

import { events } from 'lib/constants/events'
import Head from 'next/head'

export default function About() {
	return (
		<>
			<Head>
				<style>
					{':root { --background-color: #fefae0 !important; }'}
				</style>
			</Head>
			<Hero title="Events" />
			<div
				style={{
					width: '100%',
					display: 'grid',
					gap: '1.5rem',
					gridTemplateColumns:
						'repeat(auto-fill, minmax(20rem, 1fr))',
				}}
			>
				{events.map((event, idx) => (
					<Event event={event} key={idx} />
				))}
			</div>
		</>
	)
}
