import { useRef, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import { useCopyToClipboard } from 'lib/hooks'

import { Meta } from 'components/layout'
import { Hero } from 'components/elements'
import {
	Button,
	FormGroup,
	Input,
	Modal,
	Select,
	Textarea,
} from 'components/ui'

import s from 'styles/pages/cover-letter.module.css'

export default function CoverLetter() {
	const fileInputRef = useRef()
	const [text, setText] = useState('')
	const [showModal, setShowModal] = useState(false)
	const [copied, setCopied] = useState(false)
	const copy = useCopyToClipboard()

	function handleClose() {
		const answer = confirm('Are you sure you want to close this window ?')
		if (answer === true) {
			setShowModal(false)
			setCopied(false)
		}
	}

	return (
		<>
			<Meta
				title="AI Cover letter"
				description="Let an AI write your cover letter"
				image="/og/cover-letter.png"
			/>
			<Hero
				title="Cover letter"
				subtitle="Let an AI write your cover letter"
			/>
			<section className={s.container}>
				<Formik
					initialValues={{
						name: '',
						summary: '',
						hard_skills: '',
						soft_skills: '',
						experience: '',
						education: '',
						projects: '',
						title: '',
						company: '',
						description: '',
						motivation: '',
						language: 'english',
						creativity: '0.75',
					}}
					validationSchema={Yup.object({
						name: Yup.string().required().min(5).max(48),
						summary: Yup.string().max(256),
						hard_skills: Yup.string().max(48),
						soft_skills: Yup.string().max(48),
						experience: Yup.string().max(256),
						education: Yup.string().max(256),
						projects: Yup.string().max(256),
						title: Yup.string().required().min(5).max(48),
						company: Yup.string().required().min(5).max(48),
						description: Yup.string().required().min(50).max(512),
						motivation: Yup.string().max(256),
						language: Yup.string().required(),
						creativity: Yup.number().required(),
					})}
					onSubmit={async (values) => {
						const res = await axios({
							method: 'POST',
							url: '/api/ai/prompt',
							data: {
								type: 'cover-letter',
								...values,
							},
						})
						setText(res.data)
						setShowModal(true)
					}}
				>
					{({ values, setValues, isSubmitting }) => (
						<Form className={s.form}>
							<div className={s.header}>
								<h2>Personal</h2>
								<div className={s.options}>
									<Button
										type="button"
										variant="naked"
										href={`data:text/json;charset=utf-8,${encodeURIComponent(
											JSON.stringify(values),
										)}`}
										download="cover-letter.json"
									>
										Download for later
									</Button>
									or
									<Button
										type="button"
										variant="naked"
										onClick={() =>
											fileInputRef.current.click()
										}
									>
										Restore
									</Button>
									<input
										ref={fileInputRef}
										type="file"
										accept=".json"
										style={{ display: 'none' }}
										onChange={(event) => {
											const files = event.target.files
											if (files.length === 0) return
											let reader = new FileReader()
											reader.onload = (event) =>
												setValues(
													JSON.parse(
														event.target.result,
													),
												)
											reader.readAsText(files[0])
										}}
									/>
								</div>
							</div>
							<Input
								name="name"
								label="Name"
								placeholder="John Doe"
							/>
							<Textarea
								name="summary"
								label="Summary"
								placeholder="Energetic and passionate student with skills in leadership..."
								rows={3}
							/>
							<FormGroup>
								<Input
									name="hard_skills"
									label="Hard skills"
									placeholder="Microsoft Office, JIRA, Google Analytics, Photoshop"
								/>
								<Input
									name="soft_skills"
									label="Soft skills"
									placeholder="Empathy, communication, time management"
								/>
							</FormGroup>
							<Textarea
								name="experience"
								label="Experience"
								placeholder="ETH Zürich, Teaching assistant for the Physics class, 2022-2023"
								rows={5}
							/>
							<Textarea
								name="education"
								label="Education"
								placeholder="ETH Zürich, MSc in Management, Technology and Economics, 2020-2023"
								rows={5}
							/>
							<Textarea
								name="projects"
								label="Projects"
								placeholder="MTEC.plus: the official website for MTEC students, 2023-Present"
								rows={5}
							/>
							<div className={s.header}>
								<h2 className={s.title}>Job</h2>
							</div>
							<FormGroup>
								<Input
									name="title"
									label="Title"
									placeholder="Digital Strategy Consultant"
								/>
								<Input
									name="company"
									label="Company"
									placeholder="Big4"
								/>
							</FormGroup>
							<Textarea
								name="description"
								label="Description"
								rows={10}
							/>
							<div className={s.header}>
								<h2>Generation</h2>
							</div>
							<Textarea
								name="motivation"
								label="Motivation"
								placeholder="What interests me in this role is ..."
								rows={5}
							/>
							<FormGroup>
								<Select name="language" label="Language">
									<option value="ENGLISH">English</option>
									<option value="GERMAN">Deutsch</option>
									<option value="FRENCH">Français</option>
								</Select>
								<Select name="creativity" label="Creativity">
									<option value="0.25">Low</option>
									<option value="0.5">Medium</option>
									<option value="0.75">High</option>
								</Select>
							</FormGroup>
							<p>
								Generating this text takes time (around{' '}
								<i>20s</i>) and is <i>expensive</i> (10
								cents/generation). If you enjoy this service,
								please consider{' '}
								<Link
									href="https://buy.stripe.com/14k5lX0QW9nl38Q288"
									target="_blank"
									rel="noreferrer noopener"
								>
									supporting it
								</Link>
								!
							</p>
							<Button
								type="submit"
								style={{ margin: '1rem 0' }}
								loading={isSubmitting}
							>
								Generate
							</Button>
						</Form>
					)}
				</Formik>
				{showModal && (
					<Modal onClose={handleClose}>
						<header
							style={{
								padding: '1rem',
								borderBottom: '1px solid #000',
							}}
						>
							<h2 style={{ fontSize: '1.75rem' }}>
								Cover letter
							</h2>
						</header>
						<main style={{ height: '100vh', display: 'flex' }}>
							<textarea
								value={text}
								onChange={(event) =>
									setText(event.target.value)
								}
								style={{
									flex: 1,
									display: 'block',
									padding: '1.5rem',
									width: '100%',
									resize: 'none',
									borderRadius: 0,
								}}
							/>
						</main>
						<footer
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								padding: '1rem',
								borderTop: '1px solid #000',
							}}
						>
							{copied ? (
								<div style={{ fontSize: '1.125rem' }}>
									Copied to clipboard
								</div>
							) : (
								<Button
									variant="naked"
									onClick={() => {
										const success = copy(text)
										setCopied(success)
									}}
								>
									Copy to clipboard
								</Button>
							)}
							<Button onClick={handleClose}>Close</Button>
						</footer>
					</Modal>
				)}
			</section>
		</>
	)
}
