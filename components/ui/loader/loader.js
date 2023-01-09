import s from './loader.module.css'

export function Loader(props) {
	return (
		<div className={s.container} {...props}>
			<div className={s.dot} />
		</div>
	)
}
