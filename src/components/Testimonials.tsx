import React from 'react'
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card'

export default function Services() {
    return (
        <section className='features  flex items-center' id='services'>
            <div className='mx-auto px-4 sm:px-7 max-w-screen-xl pt-40 flex flex-col'>
                <h2 className='text-center text-4xl md:text-5xl font-bold text-slate-800 pb-20'>
                    Testimonials
                </h2>
                <div className='flex flex-col md:flex-col xl:flex-row gap-4 md:gap-8 lg:gap-8'>
                    <Card className='flex-1'>
                        <CardTitle
                            className='hidden'
                            aria-label='testimonial 1'
                        >
                            Testimonial 1
                        </CardTitle>
                        <CardContent>
                            Our 20 year old house looks brand new! From power
                            washing, clearing the roof and gutters, repairing
                            water damaged columns, sealing all 50 windows and
                            painting all the exterior trim, Rob has brightened
                            up the whole place. He even replaced the ceiling
                            fans for us - and all with a polite and enthusiastic
                            attitude. We know who to call the next time we need
                            some help around the house!
                        </CardContent>
                        <CardFooter className='italic'>
                            Linda, Amelia Park
                        </CardFooter>
                    </Card>
                    <Card className='flex-1'>
                        <CardTitle
                            className='hidden'
                            aria-label='testimonial 2'
                        >
                            Testimonial 2
                        </CardTitle>
                        <CardContent>
                            Rob took my small closet job on and paid so much
                            attention to detail, I hired him to paint the rest
                            of the interior! My home now looks so beautiful and
                            inviting. A++ on his work!
                        </CardContent>
                        <CardFooter className='italic'>
                            Dr. Saundra Jackson
                        </CardFooter>
                    </Card>{' '}
                    <Card className='flex-1'>
                        <CardTitle
                            className='hidden'
                            aria-label='testimonial 3'
                        >
                            Testimonial 3
                        </CardTitle>
                        <CardContent>
                            As an older widow I was weary about hiring a
                            Painter, however RL Painting Solutions quickly put
                            my mind at ease and not only did such an amazing job
                            on my porch, Rob also did a number of repairs on
                            this old house. I now call him for EVERYTHING!! He
                            has remodeled my cabinets and closets, pressure
                            washed my home and driveway, even hung some large
                            art pieces and mounted a tv.
                        </CardContent>
                        <CardFooter className='italic'>
                            Ms. Alice Sue Burnett
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    )
}
