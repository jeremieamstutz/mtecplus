import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

import useClickOutside from 'lib/hooks/useClickOutside'

import s from './header.module.css'

export function Header() {
	const router = useRouter()
	const [open, setOpen] = useState(false)
	const headerRef = useRef()

	useClickOutside(headerRef, () => setOpen(false))

	useEffect(() => {
		setOpen(false)
	}, [router.asPath])

	return (
		<header className={s.header} ref={headerRef}>
			<div className={s.main}>
				<Link href="/" className={s.logo}>
					MTEC<span className={s.plus}>+</span>
				</Link>
				<button
					className={s.button}
					onClick={() => setOpen((prev) => !prev)}
				>
					{open ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							width={24}
							height={24}
						>
							<path
								strokeLinecap="square"
								strokeLinejoin="square"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							width={24}
							height={24}
						>
							<path
								strokeLinecap="square"
								strokeLinejoin="square"
								d="M3.75 9h16.5m-16.5 6.75h16.5"
							/>
						</svg>
					)}
				</button>
			</div>
			<div className={cn(s.menu, { [s.open]: open })}>
				<nav className={s.nav}>
					<Link
						href="/"
						className={cn(s.link, {
							[s.active]: router.pathname == '/',
						})}
					>
						Home
					</Link>
					<Link
						href="/about"
						className={cn(s.link, {
							[s.active]: router.pathname == '/about',
						})}
					>
						About
					</Link>
					<Link
						href="/events"
						className={cn(s.link, {
							[s.active]: router.pathname.startsWith('/events'),
						})}
					>
						Events
					</Link>
					<Link
						href="/services"
						className={cn(s.link, {
							[s.active]: router.pathname == '/services',
						})}
					>
						Services
					</Link>
					<Link
						href="/info"
						className={cn(s.link, {
							[s.active]: router.pathname == '/info',
						})}
					>
						Info
					</Link>
					<Link
						href="/jobs"
						className={cn(s.link, {
							[s.active]: router.pathname.startsWith('/jobs'),
						})}
					>
						Jobs
					</Link>
					<Link
						href="/students"
						className={cn(s.link, {
							[s.active]: router.pathname.startsWith('/students'),
						})}
					>
						Students
					</Link>
				</nav>
				<Link href="/login" className={s.login}>
					Login
				</Link>
			</div>
		</header>
	)
}
