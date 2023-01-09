import cn from 'clsx'
import { useRef } from 'react'

import { useLockBodyScroll, useEventListener } from 'lib/hooks'

import { Portal } from 'components/ui'

import s from './modal.module.css'

const Backdrop = ({ onClick }) => {
	return <div className={s.backdrop} onClick={onClick} />
}

export function Modal({ children, onClose, className, ...props }) {
	useLockBodyScroll()
	const modalRef = useRef()

	useEventListener('keydown', (event) => {
		switch (event.key) {
			case 'Espace':
				if (onClose) onClose()
				break

			// Trap focus
			case 'Tab':
				const focusableModalElements =
					modalRef.current.querySelectorAll(
						'a, button, textarea, input, select',
					)

				const firstElement = focusableModalElements[0]
				const lastElement =
					focusableModalElements[focusableModalElements.length - 1]

				// Start in the modal
				if (
					!Array.from(focusableModalElements).find(
						(node) => node === document.activeElement,
					)
				) {
					firstElement.focus()
					return event.preventDefault()
				}

				// Loop through the elements
				if (!event.shiftKey && document.activeElement === lastElement) {
					firstElement.focus()
					return event.preventDefault()
				}

				if (event.shiftKey && document.activeElement === firstElement) {
					lastElement.focus()
					return event.preventDefault()
				}
		}
	})

	return (
		<Portal selector="#modals">
			<Backdrop onClick={onClose} />
			<div className={s.container}>
				<div
					className={cn(s.modal, className)}
					role="dialog"
					aria-modal="true"
					ref={modalRef}
					{...props}
				>
					{children}
				</div>
			</div>
		</Portal>
	)
}
