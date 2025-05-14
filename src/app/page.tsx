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
                <Contact />

                {/* <CookieNotice /> */}

                <footer>
                    <div className='flex flex-col md:flex-row items-center justify-between mx-auto sm:px-7 px-4 max-w-screen-xl py-20'>
                        <p className='text-sm text-center text-gray-700 w-full'>
                            RLPaintingSolutions LLC © 2025. All rights reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    )
}
