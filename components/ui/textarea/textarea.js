import cn from 'clsx'

import s from './textarea.module.css'

export function Textarea({ name, label, ...props }) {
	return (
		<div className={s.group}>
			<label className={s.label} htmlFor={name}>
				{label}
			</label>
			<textarea className={cn(s.textarea, props.className)} {...props} />
		</div>
	)
}
