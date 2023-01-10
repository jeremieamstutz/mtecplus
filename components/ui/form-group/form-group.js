import s from './form-group.module.css'

export function FormGroup({ children }) {
	return <div className={s.group}>{children}</div>
}
