// import Image from 'next/image'
// import Link from 'next/link'
// import CookieNotice from '@/components/CookieNotice' // if you need to use cookie notice
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
// import Compare from '@/components/Compare'
// import Compare_2 from '@/components/Compare_2'
import Compare from '@/components/Compare'
import Contact from '@/components/contact'
import Faq from '@/components/Faq'
import Testimonials from '@/components/Testimonials'
import Link from 'next/link'
import About from '@/components/About'

export default function Home() {
	return (
		<div className='bg-gray-50 px-0  '>
			<Nav />
			<div className='px-0 md:px-0'>
				<Hero />
				<Services />
				<Compare />
				<Faq />
				<Testimonials />
				<About />
				<Contact />

				{/* <CookieNotice /> */}

				<footer>
					<div className='flex flex-col items-center sm:px-7 px-4 max-w-screen-xl pt-20 gap-4 pb-16'>
						<p className='text-center text-gray-700 w-full'>
							RLPaintingSolutions LLC © 2025. All rights reserved.
						</p>
						<Link
							href='https://www.undermouse.com'
							target='_blank'
							className='text-gray-700'
						>
							Website by UnderMouse
						</Link>
					</div>
				</footer>
			</div>
		</div>
	)
}
