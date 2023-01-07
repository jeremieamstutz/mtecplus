import Link from 'next/link'
import s from './footer.module.css'

export function Footer() {
	return (
		<footer className={s.footer}>
			<div className={s.logo}>MTEC+</div>
			<Link
				className={s.location}
				href="https://www.google.ch/maps/place/ETH+CAB/@47.3783525,8.5466101,17z/data=!3m1!4b1!4m5!3m4!1s0x479aa1c6a08ae0a7:0xcdc0a44516154f70!8m2!3d47.3783489!4d8.5487988"
			>
				CAB E12.2, ETHZ, Zürich, Switzerland
			</Link>
			<div className={s.socials}>
				<Link href="https://www.instagram.com/obis_eth/">
					<svg
						width="24"
						height="25"
						viewBox="0 0 24 25"
						color="#fff"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M16.7451 2.28498C18.0171 2.28893 19.2359 2.81703 20.1353 3.75392C21.0347 4.69081 21.5417 5.96037 21.5455 7.28533V17.285C21.5417 18.6099 21.0347 19.8795 20.1353 20.8164C19.2359 21.7533 18.0171 22.2814 16.7451 22.2853H7.14546C5.8735 22.2814 4.65472 21.7533 3.75531 20.8164C2.85589 19.8795 2.34892 18.6099 2.34512 17.285V7.28533C2.34892 5.96037 2.85589 4.69081 3.75531 3.75392C4.65472 2.81703 5.8735 2.28893 7.14546 2.28498H16.7451ZM16.7451 0.285156H7.14546C3.44929 0.285156 0.425293 3.43516 0.425293 7.28533V17.285C0.425293 21.1352 3.44929 24.2852 7.14546 24.2852H16.7451C20.4413 24.2852 23.4653 21.1352 23.4653 17.285V7.28533C23.4653 3.43516 20.4413 0.285156 16.7451 0.285156Z"
							fill="currentColor"
						/>
						<path
							d="M18.1855 7.21075C17.9007 7.21075 17.6223 7.12027 17.3855 6.95073C17.1487 6.7812 16.9641 6.54023 16.8551 6.25831C16.7461 5.97639 16.7176 5.66617 16.7732 5.36688C16.8287 5.06759 16.9659 4.79267 17.1673 4.5769C17.3687 4.36112 17.6253 4.21418 17.9046 4.15465C18.1839 4.09511 18.4735 4.12567 18.7366 4.24245C18.9997 4.35922 19.2246 4.55698 19.3829 4.8107C19.5411 5.06443 19.6255 5.36272 19.6255 5.66788C19.6259 5.87061 19.589 6.07144 19.5168 6.25883C19.4445 6.44621 19.3385 6.61647 19.2047 6.75983C19.0709 6.90318 18.912 7.01681 18.7371 7.0942C18.5622 7.17158 18.3747 7.21119 18.1855 7.21075ZM11.9456 8.23897C12.7051 8.23897 13.4476 8.48028 14.0791 8.93239C14.7107 9.3845 15.2029 10.0271 15.4935 10.7789C15.7842 11.5308 15.8602 12.3581 15.7121 13.1562C15.5639 13.9543 15.1981 14.6875 14.6611 15.2629C14.124 15.8383 13.4397 16.2302 12.6948 16.389C11.9499 16.5477 11.1777 16.4662 10.476 16.1548C9.77432 15.8434 9.17456 15.316 8.7526 14.6394C8.33063 13.9628 8.1054 13.1673 8.1054 12.3535C8.10649 11.2626 8.51143 10.2167 9.23138 9.44537C9.95132 8.674 10.9275 8.24014 11.9456 8.23897ZM11.9456 6.18199C10.8064 6.18199 9.69274 6.54394 8.7455 7.22207C7.79826 7.9002 7.05997 8.86406 6.62401 9.99176C6.18804 11.1195 6.07397 12.3603 6.29623 13.5575C6.51848 14.7546 7.06707 15.8543 7.87264 16.7174C8.6782 17.5805 9.70454 18.1683 10.8219 18.4064C11.9392 18.6445 13.0974 18.5223 14.1499 18.0552C15.2024 17.5881 16.102 16.7971 16.7349 15.7822C17.3679 14.7673 17.7057 13.5741 17.7057 12.3535C17.7057 10.7167 17.0988 9.14696 16.0186 7.98958C14.9384 6.8322 13.4733 6.18199 11.9456 6.18199Z"
							fill="currentColor"
						/>
					</svg>
				</Link>
				<Link href="https://ch.linkedin.com/company/obiseth">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="#fff"
						viewBox="0 0 24 24"
					>
						<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
					</svg>
				</Link>
			</div>
		</footer>
	)
}
