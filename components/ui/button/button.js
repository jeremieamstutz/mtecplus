import cn from 'clsx'

import s from './button.module.css'

export function Button({ children, ...props }) {
	return <button className={cn(s.button, props.className)}>{children}</button>
}
