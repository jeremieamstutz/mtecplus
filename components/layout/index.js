import { Footer } from './footer'
import { Header } from './header'
import { Main } from './main'

export function Layout({ children }) {
	return (
		<div
			style={{
				minHeight: '100dvh',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</div>
	)
}
