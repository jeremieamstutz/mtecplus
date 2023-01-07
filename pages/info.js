import { Hero } from 'components/elements'
import Head from 'next/head'

export default function Info() {
	return (
		<>
			<Head>
				<style>
					{':root { --background-color: #d4a373 !important; }'}
				</style>
			</Head>
			<Hero title="Info" />
		</>
	)
}
