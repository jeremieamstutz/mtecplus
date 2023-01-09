import { Layout } from 'components/layout'
import { Meta } from 'components/layout/meta'
import Script from 'next/script'

import '../styles/globals.css'

export default function App({ Component, pageProps }) {
	return (
		<>
			{process.env.NODE_ENV === 'production' && (
				<>
					<Script
						strategy="afterInteractive"
						src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_API_KEY}`}
					/>
					<Script id="google-analytics" strategy="afterInteractive">
						{`
							window.dataLayer = window.dataLayer || []
							function gtag(){dataLayer.push(arguments)}
							gtag('js', new Date())
							gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_API_KEY}')
						`}
					</Script>
				</>
			)}
			<Meta />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}
