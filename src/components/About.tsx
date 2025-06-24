import React from 'react'
import { PaintbrushVertical, Wrench, Hammer, House } from 'lucide-react'
// import Image from 'next/image'

export default function About() {
	return (
		<section className='features pt-40 flex items-center' id='services'>
			<div className='mx-auto px-4 sm:px-7 max-w-screen-lg py-20 flex flex-col'>
				<h2 className='text-center text-4xl md:text-5xl font-bold text-slate-800 mb-4'>
					About
				</h2>
				<div className='sm:px-7 px-4 py-10 mt-10 md:mt-20 border-b-6 border-r-6 bg-white/96 text-slate-800 rounded-lg shadow-lg text-lg'>
					<p>
						A Marine Corps Veteran, I settled in South Florida where I gained
						over 20 years experience in painting and home repairs. Moving to
						Amelia Island in 2023, I have worked for Nassau Movers along with
						local painting contractors. I am excited to launch my own business
						and fully believe I will be able to provide you with top quality
						work at the best price. Whether it&apos;s painting or general
						handyman services, I pride myself on doing things right.
					</p>
					<br />
					<p>
						Free estimates. No job too small (minimum charge 1 hour labor); no
						charge for travel to your home.
					</p>
				</div>
			</div>
		</section>
	)
}
