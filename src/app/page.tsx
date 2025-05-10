// import Image from 'next/image'
// import Link from 'next/link'
// import CookieNotice from '@/components/CookieNotice' // if you need to use cookie notice
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
// import Compare from '@/components/Compare'
// import Compare_2 from '@/components/Compare_2'
import Compare_3 from '@/components/Compare_3'
import Contact from '@/components/contact'
import Faq from '@/components/Faq'

export default function Home() {
    return (
        <div className='bg-gray-50 antialiased px-0'>
            <Nav />
            <div className='px-0 md:px-0 mx-auto'>
                <Hero />

                <Services />

                {/* <Compare /> */}
                {/* <Compare_2 /> */}
                <Compare_3 />
                <Faq />

                <Contact />
                {/* <CookieNotice /> */}

                <footer>
                    <div className='flex flex-col md:flex-row items-center justify-between mx-auto sm:px-7 px-4 max-w-screen-xl py-20'>
                        <p className='text-sm text-center text-gray-700 w-full'>
                            © Copyright 2024 App. All Rights Reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    )
}
