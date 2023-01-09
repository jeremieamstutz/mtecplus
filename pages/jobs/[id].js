import { Hero } from 'components/elements'
import { Meta } from 'components/layout'

import { jobs } from 'lib/constants/jobs'
import { useRouter } from 'next/router'

export default function Job() {
	const router = useRouter()
	const job = jobs.filter((job) => job.id === router.query.id)[0]

	if (!job) return

	const { title } = job

	return (
		<>
			<Meta title={title} />
			<Hero title={title} />
		</>
	)
}
