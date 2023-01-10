import { Hero } from 'components/elements'
import { Meta } from 'components/layout'
import { Button, Input } from 'components/ui'

import s from 'styles/pages/login.module.css'

export default function Login() {
	return (
		<>
			<Meta title="Login" />
			{/* <Hero title="Login" subtitle="Please use your ETH email address" /> */}
			<Hero title="Login" subtitle="(Doesn't work at the moment)" />
			<div
				style={{
					width: '100%',
					maxWidth: '480px',
					display: 'flex',
					flexDirection: 'column',
					gap: '1rem',
				}}
			>
				<Input name="email" label="Email" type="email" />
				<Input name="password" label="Password" type="password" />
				<Button className={s.button}>Login</Button>
			</div>
		</>
	)
}
