import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

import s from './header.module.css'

export function Header() {
	const router = useRouter()

	return (
		<header className={s.header}>
			<Link href="/" className={s.logo}>
				MTEC+
			</Link>
			<nav className={s.nav}>
				<Link
					href="/"
					className={cn(s.link, { [s.active]: router.asPath == '/' })}
				>
					Home
				</Link>
				<Link
					href="/about"
					className={cn(s.link, {
						[s.active]: router.asPath == '/about',
					})}
				>
					About
				</Link>
				<Link
					href="/events"
					className={cn(s.link, {
						[s.active]: router.asPath.startsWith('/events'),
					})}
				>
					Events
				</Link>
				<Link
					href="/services"
					className={cn(s.link, {
						[s.active]: router.asPath == '/services',
					})}
				>
					Services
				</Link>
				<Link
					href="/info"
					className={cn(s.link, {
						[s.active]: router.asPath == '/info',
					})}
				>
					Info
				</Link>
				<Link
					href="/students"
					className={cn(s.link, {
						[s.active]: router.asPath == '/students',
					})}
				>
					Students
				</Link>
			</nav>
			<Link href="/login" className={s.login}>
				Login
			</Link>
		</header>
	)
}
