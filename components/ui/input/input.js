import cn from 'clsx'

import s from './input.module.css'

export function Input({ name, label, ...props }) {
	return (
		<div className={s.group}>
			<label className={s.label} htmlFor={name}>
				{label}
			</label>
			<input
				className={cn(s.input, props.className)}
				name={name}
				{...props}
			/>
		</div>
	)
}
