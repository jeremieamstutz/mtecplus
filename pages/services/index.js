import Head from 'next/head'

import { Meta } from 'components/layout'
import { Hero } from 'components/elements'

export default function Services() {
	return (
		<>
			<Head>
				<style>
					{':root { --background-color: #faedcd !important; }'}
				</style>
			</Head>
			<Meta title="Services" />
			<Hero title="Services" />
		</>
	)
}
