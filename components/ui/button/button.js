import cn from 'clsx'
import Link from 'next/link'

import s from './button.module.css'

export function Button({ children, href, ...props }) {
	if (href) {
		return (
			<Link className={cn(s.button, props.className)} href={href}>
				{children}
			</Link>
		)
	}
	return <button className={cn(s.button, props.className)}>{children}</button>
}
