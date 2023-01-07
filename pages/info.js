import { Hero } from 'components/elements'
import { Accordion } from 'components/ui/accordion'
import Head from 'next/head'

import s from 'styles/pages/info.module.css'

const faq = [
	{
		question: 'Where are you located ?',
		answer: 'Mauris consequat dui vitae augue pulvinar, at suscipit velit placerat. Proin sem nibh, porttitor nec varius nec, gravida nec odio. Nulla ut auctor est. Maecenas porttitor nisl quis odio molestie rutrum. Mauris pulvinar augue vel suscipit accumsan. Cras eget interdum justo. Phasellus eu lacus a nulla eleifend laoreet. Proin nec enim a orci interdum consectetur. Pellentesque eu dolor nec eros scelerisque pretium vitae a diam. Vestibulum sodales nibh nunc, eget vestibulum urna aliquet venenatis.',
	},
	{
		question: 'Do you have old exams and summaries ?',
		answer: 'Mauris consequat dui vitae augue pulvinar, at suscipit velit placerat. Proin sem nibh, porttitor nec varius nec, gravida nec odio. Nulla ut auctor est. Maecenas porttitor nisl quis odio molestie rutrum. Mauris pulvinar augue vel suscipit accumsan. Cras eget interdum justo. Phasellus eu lacus a nulla eleifend laoreet. Proin nec enim a orci interdum consectetur. Pellentesque eu dolor nec eros scelerisque pretium vitae a diam. Vestibulum sodales nibh nunc, eget vestibulum urna aliquet venenatis.',
	},
	{
		question: 'Can I send you money ?',
		answer: 'Yes',
	},
]
export default function Info() {
	return (
		<>
			<Head>
				<style>
					{':root { --background-color: #e8d9ca !important; }'}
				</style>
			</Head>
			<Hero title="Info" />
			<div className={s.faq}>
				{faq.map(({ question, answer }, idx) => (
					<Accordion header={question} content={answer} key={idx} />
				))}
			</div>
		</>
	)
}
