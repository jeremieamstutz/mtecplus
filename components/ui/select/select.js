import cn from 'clsx'

import s from './select.module.css'

export function Select({ name, label, children, ...props }) {
	return (
		<div className={s.group}>
			<label className={s.label} htmlFor={name}>
				{label}
			</label>
			<select
				className={cn(s.select, props.className)}
				name={name}
				{...props}
			>
				{children}
			</select>
		</div>
	)
}
