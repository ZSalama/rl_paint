import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
    return (
        <div
            className='relative w-full h-screen [mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)]'
            // style={{
            //     WebkitMaskImage:
            //         'linear-gradient(to bottom, black 90%, transparent 100%)',
            //     maskImage:
            //         'linear-gradient(to bottom, black 90%, transparent 100%)',
            // }}
        >
            <section id='hero'>
                <div className='mx-auto sm:px-7 px-4 max-w-screen-xl py-20 text-center flex flex-col min-h-[calc(100vh)] justify-center z-10 relative'>
                    <h1 className='pb-2 pt-4 text-3xl md:text-6xl font-bold max-w-[900px] mx-auto text-slate-800'>
                        Rob Lastname Painting Solutions
                    </h1>
                    <p className='pb-10 text-lg text-gray-600 max-w-[600px] mx-auto pt-20'>
                        Local painting company for Fernandina Beach, FL
                    </p>
                    <div className='flex mx-auto gap-0 md:gap-10 items-center'>
                        <div className='hidden md:block ml-[-96px]'>
                            <Image
                                src='/home-arrow.svg'
                                alt=''
                                width={50}
                                height={50}
                            />
                        </div>
                        <Link
                            href='#contact'
                            className='transition ease-in-out delay-150 border-2 border-blue-600 py-2 px-10 rounded-full font-bold bg-blue-600 text-white hover:bg-white hover:text-blue-600 text-xl'
                        >
                            Lets start
                        </Link>
                    </div>
                </div>
            </section>
            <div className='absolute top-0 left-0 w-full h-full z-0'>
                <Image
                    src='/hero_background.png'
                    alt='hero background'
                    fill
                    className='object-cover opacity-40 '
                />
            </div>
        </div>
    )
}
