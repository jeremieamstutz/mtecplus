import cn from 'clsx'
import { useField } from 'formik'
import { useLayoutEffect, useRef, useState } from 'react'

import s from './textarea.module.css'

export function Textarea({ name, label, onChange, style, ...props }) {
	const [field, meta] = useField(name)

	const textAreaRef = useRef()
	const [text, setText] = useState('')
	const [textAreaHeight, setTextAreaHeight] = useState('auto')

	// useLayoutEffect(() => {
	// 	setTextAreaHeight(`${textAreaRef.current?.scrollHeight}px`)
	// }, [text])

	function handleChange(event) {
		setTextAreaHeight('auto')
		setText(event.target.value)
		onChange?.(event)
	}

	return (
		<div className={s.group}>
			<label className={s.label} htmlFor={name}>
				{label}
			</label>
			<div className={s.control}>
				<textarea
					ref={textAreaRef}
					name={name}
					className={cn(s.textarea, props.className)}
					onChange={handleChange}
					style={{
						height: textAreaHeight,
						...props.style,
					}}
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
