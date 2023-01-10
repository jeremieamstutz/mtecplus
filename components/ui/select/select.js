import cn from 'clsx'
import { ChevronUpDown } from 'components/icons/chevron-up-down'

import s from './select.module.css'

export function Select({ name, label, children, ...props }) {
	return (
		<div className={s.group}>
			<label className={s.label} htmlFor={name}>
				{label}
			</label>
			<div className={s.control}>
				<select
					className={cn(s.select, props.className)}
					name={name}
					{...props}
				>
					{children}
				</select>
				<ChevronUpDown className={s.chevron} />
			</div>
		</div>
	)
}
