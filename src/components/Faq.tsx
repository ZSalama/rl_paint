import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

export default function Faq() {
    return (
        <section id='FAQ'>
            <div className='gap-10 mx-auto sm:px-7 px-4 max-w-screen-xl py-20'>
                <h2 className='text-center text-3xl md:text-5xl font-bold pb-20 text-slate-700'>
                    FAQ
                </h2>
                {/* <div className='bg-white rounded-xl shadow-md space-y-6 m-3'>
                    <Accordion type='single' collapsible>
                        <AccordionItem value='item-1'>
                            <AccordionTrigger className='text-xl md:text-2xl p-8 md:p-12 lg:p-12 font-semibold text-slate-800 hover:underline'>
                                Am you insured?
                            </AccordionTrigger>
                            <AccordionContent className='text-base md:text-lg px-8 pb-8 md:px-12 md:pb-12 lg:px-12 lg:pb-8 text-slate-600 mt-2'>
                                <article>
                                    Great question! Yes, we are fully insured
                                    and licensed to operate in the state of
                                    Florida. We take safety and compliance
                                    seriously, ensuring that all our work meets
                                    the highest standards. If you need proof of
                                    insurance, please let us know, and we can
                                    provide the necessary documentation.
                                </article>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div> */}
                <div className='bg-white rounded-xl shadow-md space-y-6 m-3'>
                    <Accordion type='single' collapsible>
                        <AccordionItem value='item-1'>
                            <AccordionTrigger className='text-xl md:text-2xl p-8 md:p-12 lg:p-12 font-semibold text-slate-800 hover:underline'>
                                <p>Can I get a quote?</p>
                            </AccordionTrigger>
                            <AccordionContent className='text-base md:text-lg px-8 pb-8 md:px-12 md:pb-12 lg:px-12 lg:pb-8 text-slate-600 mt-2'>
                                <article>
                                    Absolutely! We offer free estimates for all
                                    our services. Just reach out to us with the
                                    details of your project, and we will
                                    schedule a time to assess the work needed
                                    and provide you with a detailed quote.
                                </article>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className='bg-white rounded-xl shadow-md space-y-6 m-3'>
                    <Accordion type='single' collapsible>
                        <AccordionItem value='item-1'>
                            <AccordionTrigger className='text-xl md:text-2xl p-8 md:p-12 lg:p-12 font-semibold text-slate-800 hover:underline'>
                                <p>How long will my project take?</p>
                            </AccordionTrigger>
                            <AccordionContent className='text-base md:text-lg px-8 pb-8 md:px-12 md:pb-12 lg:px-12 lg:pb-8 text-slate-600 mt-2'>
                                <article>
                                    The duration of a project can vary based on
                                    its size and complexity. After assessing
                                    your project, we will provide you with an
                                    estimated timeline. We always strive to
                                    complete our work efficiently while
                                    maintaining high-quality standards.
                                </article>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className='bg-white rounded-xl shadow-md space-y-6 m-3'>
                    <Accordion type='single' collapsible>
                        <AccordionItem value='item-1'>
                            <AccordionTrigger className='text-xl md:text-2xl p-8 md:p-12 lg:p-12 font-semibold text-slate-800 hover:underline'>
                                <p>Do you offer warranties on your work?</p>
                            </AccordionTrigger>
                            <AccordionContent className='text-base md:text-lg px-8 pb-8 md:px-12 md:pb-12 lg:px-12 lg:pb-8 text-slate-600 mt-2'>
                                <article>
                                    Yes, we stand behind our work and offer
                                    warranties on our services. The specifics of
                                    the warranty will be discussed during the
                                    estimate process, but we want you to feel
                                    confident in the quality of our work.
                                </article>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className='bg-white rounded-xl shadow-md space-y-6 m-3'>
                    <Accordion type='single' collapsible>
                        <AccordionItem value='item-1'>
                            <AccordionTrigger className='text-xl md:text-2xl p-8 md:p-12 lg:p-12 font-semibold text-slate-800 hover:underline'>
                                <p>Will you clean up after the job?</p>
                            </AccordionTrigger>
                            <AccordionContent className='text-base md:text-lg px-8 pb-8 md:px-12 md:pb-12 lg:px-12 lg:pb-8 text-slate-600 mt-2'>
                                <article>
                                    Yes, we believe in leaving your space as
                                    clean as we found it. Our team will clean up
                                    all debris and materials after completing
                                    the job, ensuring that you can enjoy your
                                    newly completed project without any hassle.
                                </article>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className='bg-white rounded-xl shadow-md space-y-6 m-3'>
                    <Accordion type='single' collapsible>
                        <AccordionItem value='item-1'>
                            <AccordionTrigger className='text-xl md:text-2xl p-8 md:p-12 lg:p-12 font-semibold text-slate-800 hover:underline'>
                                <p>Can you work on weekends or evenings?</p>
                            </AccordionTrigger>
                            <AccordionContent className='text-base md:text-lg px-8 pb-8 md:px-12 md:pb-12 lg:px-12 lg:pb-8 text-slate-600 mt-2'>
                                <article>
                                    Yes, we understand that many of our clients
                                    have busy schedules. We offer flexible
                                    scheduling options, including evenings and
                                    weekends, to accommodate your needs. Just
                                    let us know your availability, and we will
                                    do our best to work around it.
                                </article>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
