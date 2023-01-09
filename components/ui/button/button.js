import cn from 'clsx'
import Link from 'next/link'
import { Loader } from 'components/ui'

import s from './button.module.css'

export function Button({
	children,
	href,
	variant,
	loading,
	disabled,
	className,
	...props
}) {
	variant = variant || 'primary'

	let Component = 'button'
	if (href) {
		Component = Link
	}

	return (
		<Component
			className={cn(
				s.button,
				{
					[s.naked]: variant === 'naked',
					[s.primary]: variant === 'primary',
				},
				className,
			)}
			href={href}
			disabled={disabled || loading}
			{...props}
		>
			{loading ? <Loader /> : children}
		</Component>
	)
}
