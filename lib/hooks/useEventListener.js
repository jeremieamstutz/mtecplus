import { useEffect, useRef } from 'react'

export function useEventListener(eventName, handler, element) {
	const savedHandler = useRef()

	useEffect(() => {
		savedHandler.current = handler
	}, [handler])

	useEffect(() => {
		element = element ?? window
		const isSupported = element.addEventListener
		if (!isSupported) return

		function eventListener(event) {
			savedHandler.current(event)
		}
		element.addEventListener(eventName, eventListener)

		return () => {
			element.removeEventListener(eventName, eventListener)
		}
	}, [eventName, element])
}
