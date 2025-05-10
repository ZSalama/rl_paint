import Image from 'next/image'
import Link from 'next/link'
// import CookieNotice from '@/components/CookieNotice' // if you need to use cookie notice
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
// import Compare from '@/components/Compare'
import Compare_2 from '@/components/Compare_2'
import Compare_3 from '@/components/Compare_3'

export default function Home() {
    return (
        <div className='bg-gray-50 antialiased px-0'>
            <Nav />
            <div className='px-0 md:px-0 mx-auto'>
                <Hero />

                <Services />

                {/* <Compare /> */}
                <Compare_2 />
                <Compare_3 />
                <section>
                    <div className='flex flex-col gap-10 mx-auto sm:px-7 px-4 max-w-screen-xl py-20'>
                        <h2 className='text-center text-gray-600 text-lg'>
                            Whats our customers thinks about us ?
                        </h2>
                        <div className='grid grid-cols-12 gap-4'>
                            <div className='col-span-12 lg:col-span-4'>
                                <div className='flex flex-col gap-4 p-4 border-4 bg-white'>
                                    <div className='flex gap-1'>
                                        <i className='bi bi-star-fill text-yellow-400'></i>
                                        <i className='bi bi-star-fill text-yellow-400'></i>
                                        <i className='bi bi-star-fill text-yellow-400'></i>
                                        <i className='bi bi-star-fill text-yellow-400'></i>
                                        <i className='bi bi-star-fill text-yellow-400'></i>
                                    </div>
                                    <p className='italic text-gray-600'>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Eveniet fugit
                                        reiciendis numquam repellat. Sint harum
                                        corporis quae suscipit expedita,
                                        consequuntur repellat saepe accusantium,
                                        dicta dolor voluptas sed modi, non
                                        officia?
                                    </p>
                                    <div className='flex flex-row justify-between items-center'>
                                        <span className='text-xs'>
                                            Laurent B.
                                        </span>
                                        <span className='partenaire'>
                                            <Image
                                                className='grayscale max-w-[80px]'
                                                src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png'
                                                alt=''
                                                width={50}
                                                height={50}
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-4'>
                                <div className='flex flex-col gap-4 p-4 border-4 bg-white'>
                                    <div className='flex gap-1'>
                                        <i className='bi bi-star-fill text-yellow-400'></i>
                                        <i className='bi bi-star-fill text-yellow-400'></i>
                                        <i className='bi bi-star-fill text-yellow-400'></i>
                                        <i className='bi bi-star-fill text-yellow-400'></i>
                                        <i className='bi bi-star-fill text-yellow-400'></i>
                                    </div>
                                    <p className='italic text-gray-600'>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Eveniet fugit
                                        reiciendis numquam repellat. Sint harum
                                        corporis quae suscipit expedita,
                                        consequuntur repellat saepe accusantium,
                                        dicta dolor voluptas sed modi, non
                                        officia?
                                    </p>
                                    <div className='flex flex-row justify-between items-center'>
                                        <span className='text-xs'>
                                            Laurent B.
                                        </span>
                                        <span className='partenaire'>
                                            <Image
                                                className='grayscale max-w-[80px]'
                                                src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png'
                                                alt=''
                                                width={50}
                                                height={50}
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-12 lg:col-span-4'>
                                <div className='flex flex-col gap-4 p-4 border-4 bg-white'>
                                    <div className='flex gap-1'>
                                        <i className='bi bi-star-fill text-yellow-400'></i>
                                        <i className='bi bi-star-fill text-yellow-400'></i>
                                        <i className='bi bi-star-fill text-yellow-400'></i>
                                        <i className='bi bi-star-fill text-yellow-400'></i>
                                        <i className='bi bi-star-fill text-yellow-400'></i>
                                    </div>
                                    <p className='italic text-gray-600'>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Eveniet fugit
                                        reiciendis numquam repellat. Sint harum
                                        corporis quae suscipit expedita,
                                        consequuntur repellat saepe accusantium,
                                        dicta dolor voluptas sed modi, non
                                        officia?
                                    </p>
                                    <div className='flex flex-row justify-between items-center'>
                                        <span className='text-xs'>
                                            Laurent B.
                                        </span>
                                        <span className='partenaire'>
                                            <Image
                                                className='grayscale max-w-[80px]'
                                                src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png'
                                                alt=''
                                                width={50}
                                                height={50}
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='FAQ'>
                    <div className='gap-10 mx-auto sm:px-7 px-4 max-w-screen-xl py-20'>
                        <h2 className='text-center text-3xl md:text-5xl font-bold pb-20 text-slate-700'>
                            Frequently Asked Questions
                        </h2>
                        <div className='flex items-start justify-start mb-12'>
                            <svg
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                className='flex-none w-6 h-6 mr-4 text-gray-700'
                                aria-hidden='true'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                                ></path>
                            </svg>
                            <div>
                                <p className='mt-0 mb-3 font-semibold text-gray-900'>
                                    Can i free testing you App ?
                                </p>
                                <p className='text-gray-600'>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Tenetur reprehenderit
                                    labore neque facilis doloribus placeat!
                                    Aliquam eos, aspernatur nulla perferendis
                                    error quidem doloremque porro, possimus
                                    delectus repellendus veritatis ex in?
                                </p>
                            </div>
                        </div>
                        <div className='flex items-start justify-start mb-12'>
                            <svg
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                className='flex-none w-6 h-6 mr-4 text-gray-700'
                                aria-hidden='true'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                                ></path>
                            </svg>
                            <div>
                                <p className='mt-0 mb-3 font-semibold text-gray-900'>
                                    Security issues ?
                                </p>
                                <p className='text-gray-600'>
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Cum minima repellat,
                                    facilis magnam doloremque velit officiis
                                    blanditiis corporis! Deserunt fuga quae
                                    harum commodi nemo! Similique impedit
                                    repellat incidunt tenetur odit.
                                </p>
                            </div>
                        </div>
                        <div className='flex items-start justify-start mb-12'>
                            <svg
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                className='flex-none w-6 h-6 mr-4 text-gray-700'
                                aria-hidden='true'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                                ></path>
                            </svg>
                            <div>
                                <p className='mt-0 mb-3 font-semibold text-gray-900'>
                                    Do you have ... ?
                                </p>
                                <p className='text-gray-600'>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Tempora, impedit
                                    accusantium! Expedita ea repellat atque
                                    molestias modi fugit accusamus ipsum tempora
                                    facilis. Fuga vel architecto modi, quae
                                    velit asperiores illum?
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='mx-auto max-w-7xl py-20 px-8'>
                        <div className='relative isolate overflow-hidden bg-blue-600 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0'>
                            <div className='mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left'>
                                <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                                    Enhance your efficiency.
                                    <br />
                                    Start using APP today.
                                </h2>
                                <p className='mt-6 text-lg leading-8 text-gray-300'>
                                    Ac euismod vel sit maecenas id pellentesque
                                    eu sed consectetur. Malesuada adipiscing
                                    sagittis vel nulla.
                                </p>
                                <div className='mt-10 flex items-center justify-center gap-x-6 lg:justify-start'>
                                    <Link
                                        href='#'
                                        className='rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white'
                                    >
                                        Get started
                                    </Link>
                                    <Link
                                        href='#'
                                        className='text-sm font-semibold leading-6 text-white'
                                    >
                                        Learn more{' '}
                                        <span aria-hidden='true'>→</span>
                                    </Link>
                                </div>
                            </div>
                            <div className='relative h-80 mt-24'>
                                <Image
                                    className='absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10'
                                    src='/hero.png'
                                    alt='App screenshot'
                                    width={1824}
                                    height={1080}
                                />
                            </div>
                        </div>
                    </div>
                </section>

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
