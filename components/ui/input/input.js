import cn from 'clsx'
import { useField } from 'formik'

import s from './input.module.css'

export function Input({ name, label, ...props }) {
	const [field, meta] = useField(name)

	return (
		<div className={s.group}>
			{label && <label className={s.label}>{label}</label>}
			<div className={s.control}>
				<input
					className={cn(s.input, props.className)}
					name={name}
					{...field}
					{...props}
				/>
			</div>
			{meta.touched && meta.error && (
				<div className={s.error}>{meta.error}</div>
			)}
		</div>
	)
}
