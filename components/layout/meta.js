import Head from 'next/head'

export function Meta({
	title = 'MTEC+ | MTEC Student Organisation',
	description = 'Organisation of Students in Management, Technology and Economics at ETHZ',
	image = '/og.png',
}) {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />

			<meta property="og:logo" content="/logo.png" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />

			<meta charSet="utf-8" />
			<link rel="manifest" href="/site.webmanifest" />
			<link
				rel="mask-icon"
				href="/safari-pinned-tab.svg"
				color="#5bbad5"
			/>
			<meta name="msapplication-TileColor" content="#ffffff" />
			<meta name="theme-color" content="#ffffff" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon-16x16.png"
			/>
		</Head>
	)
}
