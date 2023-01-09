import { Footer } from './footer'
import { Header } from './header'
import { Main } from './main'

export { Meta } from './meta'

export function Layout({ children }) {
	return (
		<div
			style={{
				minHeight: '100dvh',
				display: 'flex',
				flexDirection: 'column',
				transition: 'all 0s',
			}}
		>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</div>
	)
}
