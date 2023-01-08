import { Hero } from 'components/elements'

import { jobs } from 'lib/constants/jobs'
import { useRouter } from 'next/router'

export default function Job() {
	const router = useRouter()
	const job = jobs.filter((job) => job.id === router.query.id)[0]

	if (!job) return

	const { title } = job

	return (
		<>
			<Hero title={title} />
		</>
	)
}
