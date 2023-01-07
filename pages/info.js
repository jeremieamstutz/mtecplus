import { Hero } from 'components/elements'
import Head from 'next/head'

export default function Info() {
	return (
		<>
			<Head>
				<style>
					{':root { --background-color: #e8d9ca !important; }'}
				</style>
			</Head>
			<Hero title="Info" />
		</>
	)
}
