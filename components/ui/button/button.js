import s from './button.module.css'
export function Button({ children }) {
	return <button className={s.button}>{children}</button>
}
