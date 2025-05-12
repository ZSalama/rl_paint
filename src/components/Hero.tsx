import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
    return (
        <div className='relative w-full h-screen [mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)]'>
            <section id='hero'>
                {/* Dark overlay */}
                <div className='absolute inset-0 bg-black bg-opacity-40' />

                {/* Content */}
                <div className='mx-auto sm:px-7 px-4 max-w-screen-xl py-20 text-center flex flex-col justify-center min-h-[calc(100vh)]  z-10 relative'>
                    <div className='flex flex-col justify-center bg-[var(--foreground)]/96 mx-auto rounded-lg p-10'>
                        <h1 className='text-white drop-shadow-lg text-3xl md:text-6xl font-bold max-w-[900px] mx-auto pb-4'>
                            RL Painting Solutions
                        </h1>
                        <p className='text-white drop-shadow-sm text-lg max-w-[600px] mx-auto pt-4 pb-10'>
                            Painting & Renovation Services <br />
                            Exclusive to Amelia Island and Fernandina Beach, FL
                        </p>
                        <div className='flex mx-auto gap-0 md:gap-10 items-center'>
                            <Link
                                href='#contact'
                                className='relative inline-block px-6 py-3 font-bold text-black transition-all bg-white active:bg-gray-300 duration-500 rounded-full shadow-lg hover:scale-110'
                            >
                                Request a Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <div className='absolute top-0 left-0 w-full h-full z-0'>
                <Image
                    src='/hero_2.jpg'
                    alt='hero background'
                    fill
                    className='object-cover opacity-85'
                    priority={true}
                />
            </div>
        </div>
    )
}
