import { useEffect, useRef, useState } from 'react'

import s from './accordion.module.css'

export function Accordion({ header, content }) {
	const [open, setOpen] = useState()
	const contentRef = useRef()

	useEffect(() => {
		contentRef.current.style.maxHeight = open
			? `${contentRef.current.scrollHeight}px`
			: '0px'
	}, [contentRef, open])

	return (
		<div className={s.accordion}>
			<div className={s.title} onClick={() => setOpen((prev) => !prev)}>
				{open ? '-' : '+'}
			</div>
			<h2 className={s.title} onClick={() => setOpen((prev) => !prev)}>
				{header}
			</h2>
			<div ref={contentRef} className={s.content}>
				{content}
			</div>
		</div>
	)
}
