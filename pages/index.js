import { Hero } from 'components/elements'
import Head from 'next/head'

export default function Home() {
	return (
		<>
			<Head>
				<style>
					{':root { --background-color: #e0e5ce !important; }'}
				</style>
			</Head>
			<Hero title="MTEC+" />
		</>
	)
}
