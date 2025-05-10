import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Nav() {
    return (
        <header className='sticky top-0 z-50 bg-white shadow-md'>
            <div className='mx-auto sm:px-4 px-4 max-w-screen-xl py-4'>
                <div className='flex flex-row items-center'>
                    <Link
                        data-aos='fade-right'
                        href='#hero'
                        className='flex items-center gap-2 justify-center'
                    >
                        <Image
                            src='/logoqme_transparent.png'
                            className='max-w-[50px] w-full hover:shadow-xl transition duration-300 rounded-b-md'
                            alt='logo'
                            width={50}
                            height={50}
                        />
                    </Link>
                    <nav
                        data-aos='fade-left'
                        className='mx-auto mr-0 ml-auto md:mr-0 md:ml-auto mt-0 md:mt-0 flex items-center'
                    >
                        <ul className='flex gap-5 text-gray-800'>
                            {/* <li className='flex-1'>
                                <Link
                                    href='#Prices'
                                    className='hover:underline bg-[var(--primary)] p-4 rounded block text-center w-24'
                                >
                                    Prices
                                </Link>
                            </li> */}
                            <li className='flex-1'>
                                <Link
                                    href='#services'
                                    className='bg-[var(--primary)] p-4 rounded block text-center w-24 lg:w-24 hover:bg-[var(--foreground)] hover:text-white hover:shadow-lg transition duration-300'
                                >
                                    Services
                                </Link>
                            </li>
                            <li className='flex-1'>
                                <Link
                                    href='#contact'
                                    className='bg-[var(--primary)] py-4 md:py-4 rounded block text-center w-24 lg:w-24 hover:bg-[var(--foreground)] hover:text-white hover:shadow-lg transition duration-300'
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
