import { Hero } from 'components/elements'
import Head from 'next/head'

export default function Services() {
	return (
		<>
			<Head>
				<style>
					{':root { --background-color: #faedcd !important; }'}
				</style>
			</Head>
			<Hero title="Services" />
		</>
	)
}
