import cn from 'clsx'
import { ChevronUpDownIcon } from 'components/icons'

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
				<ChevronUpDownIcon className={s.chevron} />
			</div>
		</div>
	)
}
