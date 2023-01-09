import Head from 'next/head'

export function Meta({ title, description, image }) {
	title = title ? `${title} ┃ MTEC+` : 'MTEC+ ┃ MTEC Student Organisation'
	description =
		description ||
		'Organisation of Students in Management, Technology and Economics at ETHZ'
	image = image || '/og/default.png'

	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} key="description" />

			<meta property="og:logo" content="/logo.png" key="og:logo" />
			<meta property="og:title" content={title} key="og:title" />
			<meta
				property="og:description"
				content={description}
				key="og:description"
			/>
			<meta property="og:image" content={image} key="og:image" />

			<meta
				name="twitter:card"
				content="summary_large_image"
				key="twitter:card"
			/>
			<meta name="twitter:title" content={title} key="twitter:title" />
			<meta
				name="twitter:description"
				content={description}
				key="twitter:description"
			/>
			<meta name="twitter:image" content={image} key="twitter:image" />
			{/* <link rel="manifest" href="/site.webmanifest" /> */}
			<link
				rel="mask-icon"
				href="/safari-pinned-tab.svg"
				color="#5bbad5"
				key="mask-icon"
			/>
			<meta
				name="msapplication-TileColor"
				content="#ffffff"
				key="msapplication-TileColor"
			/>
			<meta name="theme-color" content="#ffffff" key="theme-color" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
				key="viewport"
			/>
			<link rel="icon" href="/icon.svg" type="image/svg+xml" key="icon" />
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-touch-icon.png"
				key="apple-touch-icon"
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
