import { Hero } from 'components/elements'
import Head from 'next/head'

export default function Home() {
	return (
		<>
			<Head>
				<style>
					{':root { --background-color: #ccd5ae !important; }'}
				</style>
			</Head>
			<Hero title="MTEC+" />
		</>
	)
}
