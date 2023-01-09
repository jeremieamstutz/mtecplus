import axios from 'axios'
import { Hero } from 'components/elements'
import { Meta } from 'components/layout'
import { Button, Input, Modal, Select, Textarea } from 'components/ui'
import { useFormik } from 'formik'
import { useCopyToClipboard } from 'lib/hooks'
import { sleep } from 'lib/utils'
import Link from 'next/link'
import { useRef, useState } from 'react'

export default function CoverLetter() {
	const fileInputRef = useRef()
	const [text, setText] = useState('')
	const [showModal, setShowModal] = useState(false)
	const [copied, setCopied] = useState(false)
	const copy = useCopyToClipboard()

	const {
		values,
		handleChange,
		handleBlur,
		handleSubmit,
		setValues,
		isSubmitting,
	} = useFormik({
		initialValues: {
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
			language: '',
			creativity: '0.75',
		},
		// validationSchema: {},
		onSubmit: async (values) => {
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
		},
	})

	function handleRestore(event) {
		const files = event.target.files
		if (files.length === 0) return
		let reader = new FileReader()
		reader.onload = (event) => setValues(JSON.parse(event.target.result))
		reader.readAsText(files[0])
	}

	function handleClose() {
		const answer = confirm('Are you sure you want to close this window ?')
		if (answer === true) {
			setShowModal(false)
			setCopied(false)
		}
	}

	function handleCopy() {
		const success = copy(text)
		setCopied(success)
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
			<section
				style={{
					maxWidth: '720px',
				}}
			>
				<form
					onSubmit={handleSubmit}
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
					}}
				>
					<div
						style={{
							display: 'flex',
							alignItems: 'baseline',
							justifyContent: 'space-between',
							gap: '0.5rem 2rem',
							flexWrap: 'wrap',
						}}
					>
						<h2>Personal</h2>
						<div style={{ display: 'flex', gap: '0.5rem' }}>
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
							<span style={{ fontSize: '1.125rem' }}>or</span>
							<Button
								type="button"
								variant="naked"
								onClick={() => fileInputRef.current.click()}
							>
								Restore
							</Button>
							<input
								ref={fileInputRef}
								type="file"
								accept=".json"
								style={{ display: 'none' }}
								onChange={handleRestore}
							/>
						</div>
					</div>
					<Input
						name="name"
						label="Name"
						placeholder="John Doe"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.name}
					/>
					<Textarea
						name="summary"
						label="Summary"
						placeholder="Energetic and passionate student with skills in leadership..."
						rows={3}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.summary}
					/>
					<div
						style={{
							width: '100%',
							display: 'flex',
							gap: '1rem',
							flexWrap: 'wrap',
						}}
					>
						<Input
							name="hard_skills"
							label="Hard skills"
							placeholder="Microsoft Office, JIRA, Google Analytics, Photoshop"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.hard_skills}
						/>
						<Input
							name="soft_skills"
							label="Soft skills"
							placeholder="Empathy, communication, time management"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.soft_skills}
						/>
					</div>
					<Textarea
						name="experience"
						label="Experience"
						placeholder="ETH Zürich, Teaching assistant for the Physics class, 2022-2023"
						rows={5}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.experience}
					/>
					<Textarea
						name="education"
						label="Education"
						placeholder="ETH Zürich, MSc in Management, Technology and Economics, 2020-2023"
						rows={5}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.education}
					/>
					<Textarea
						name="projects"
						label="Projects"
						placeholder="MTEC.plus: the official website for MTEC students, 2023-Present"
						rows={5}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.projects}
					/>
					<h2 style={{ marginTop: '1rem' }}>Job</h2>
					<div
						style={{
							width: '100%',
							display: 'flex',
							gap: '1rem',
							flexWrap: 'wrap',
						}}
					>
						<Input
							name="title"
							label="Title"
							placeholder="Digital Strategy Consultant"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.title}
						/>
						<Input
							name="company"
							label="Company"
							placeholder="Big4"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.company}
						/>
					</div>
					<Textarea
						name="description"
						label="Description"
						rows={10}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.description}
					/>
					<h2 style={{ marginTop: '1rem' }}>Generation</h2>
					<Textarea
						name="motivation"
						label="Motivation"
						placeholder="What interests me in this role is ..."
						rows={5}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.motivation}
					/>
					<div
						style={{
							width: '100%',
							display: 'flex',
							gap: '1rem',
							flexWrap: 'wrap',
						}}
					>
						<Select
							name="language"
							label="Language"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.language}
						>
							<option value="ENGLISH">English</option>
							<option value="GERMAN">Deutsch</option>
							<option value="FRENCH">Français</option>
						</Select>
						<Select
							name="creativity"
							label="Creativity"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.creativity}
						>
							<option value="0.25">Low</option>
							<option value="0.5">Medium</option>
							<option value="0.75">High</option>
						</Select>
					</div>
					<p>
						Generating this text takes time (around <i>20s</i>) and
						is <i>very expensive</i>. If you enjoy this service,
						please consider{' '}
						<Link
							href="https://buy.stripe.com/14k5lX0QW9nl38Q288"
							target="_blank"
							rel="noreferrer noopener"
						>
							supporting this service
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
				</form>
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
									// background: 'red',
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
								<Button variant="naked" onClick={handleCopy}>
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
