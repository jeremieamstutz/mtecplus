import s from './main.module.css'

export function Main({ children }) {
	return <main className={s.main}>{children}</main>
}
