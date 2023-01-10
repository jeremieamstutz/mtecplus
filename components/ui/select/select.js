import cn from 'clsx'
import { ChevronUpDownIcon } from 'components/icons'
import { useField } from 'formik'

import s from './select.module.css'

export function Select({ name, label, children, ...props }) {
	const [field, meta] = useField(name)

	return (
		<div className={s.group}>
			{label && <label className={s.label}>{label}</label>}
			<div className={s.control}>
				<select
					className={cn(s.select, props.className)}
					name={name}
					{...field}
					{...props}
				>
					{children}
				</select>
				<ChevronUpDownIcon className={s.chevron} />
			</div>
			{meta.touched && meta.error && (
				<div className={s.error}>{meta.error}</div>
			)}
		</div>
	)
}
