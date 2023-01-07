import s from './hero.module.css'

export function Hero({ title, subtitle }) {
	return (
		<div className={s.hero}>
			{title && <h1 className={s.title}>{title}</h1>}
			{subtitle && <div className={s.subtitle}>{subtitle}</div>}
		</div>
	)
}
