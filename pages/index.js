import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'

import { Hero } from 'components/elements'

import s from 'styles/pages/home.module.css'

const sponsors = [
	{
		name: 'KPMG',
		logo: 'https://logo.clearbit.com/home.kpmg?s=256',
		website: 'https://home.kpmg',
	},
	{
		name: 'PwC',
		logo: 'https://logo.clearbit.com/pwc.ch?s=256',
		website: 'https://pwc.ch',
	},
	{
		name: 'ETHZ',
		logo: 'https://logo.clearbit.com/ethz.ch?s=256',
		website: 'https://ethz.ch',
	},
	{
		name: 'KPMG',
		logo: 'https://logo.clearbit.com/home.kpmg?s=256',
		website: 'https://home.kpmg',
	},
	{
		name: 'PwC',
		logo: 'https://logo.clearbit.com/pwc.ch?s=256',
		website: 'https://pwc.ch',
	},
	{
		name: 'ETHZ',
		logo: 'https://logo.clearbit.com/ethz.ch?s=256',
		website: 'https://ethz.ch',
	},
	{
		name: 'KPMG',
		logo: 'https://logo.clearbit.com/home.kpmg?s=256',
		website: 'https://home.kpmg',
	},
	{
		name: 'PwC',
		logo: 'https://logo.clearbit.com/pwc.ch?s=256',
		website: 'https://pwc.ch',
	},
	{
		name: 'ETHZ',
		logo: 'https://logo.clearbit.com/ethz.ch?s=256',
		website: 'https://ethz.ch',
	},
]

export default function Home() {
	return (
		<>
			<Head>
				<style>
					{':root { --background-color: #e0e5ce !important; }'}
				</style>
			</Head>
			<Hero title="MTEC+" />
			<h2>Sponsors</h2>
			<p>We are grateful for the generous support of our sponsors.</p>
			<Marquee className={s.marquee} speed={20} gradient={false}>
				{sponsors.map(({ name, logo, website }, idx) => (
					<Link
						href={website}
						key={idx}
						style={{ textDecoration: 'none' }}
					>
						<Image
							className={s.logo}
							src={logo}
							alt={name}
							width={80}
							height={80}
							priority={true}
						/>
					</Link>
				))}
			</Marquee>
		</>
	)
}
