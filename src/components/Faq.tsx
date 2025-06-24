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
			<div className='gap-10 mx-auto sm:px-7 px-4 max-w-screen-xl pt-40'>
				<h2 className='text-center text-3xl md:text-5xl font-bold pb-10 text-slate-700'>
					FAQ
				</h2>
				<div className='bg-white rounded-xl shadow-md space-y-6 m-3'>
					<Accordion type='single' collapsible>
						<AccordionItem value='item-1'>
							<AccordionTrigger className='text-xl md:text-2xl p-8 md:p-12 lg:p-12 font-semibold text-slate-800 hover:underline'>
								Are you insured?
							</AccordionTrigger>
							<AccordionContent className='text-base md:text-lg px-8 pb-8 md:px-12 md:pb-12 lg:px-12 lg:pb-8 text-slate-600 mt-2'>
								<article>
									Yes, Repainting Solutions is fully covered with a Commercial
									General Liability policy from Spinnaker Insurance Company
									($1,000,000/$2,000,000 limit per occurrence/aggregate).
								</article>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>

				<div className='bg-white rounded-xl shadow-md space-y-6 m-3'>
					<Accordion type='single' collapsible>
						<AccordionItem value='item-1'>
							<AccordionTrigger className='text-xl md:text-2xl p-8 md:p-12 lg:p-12 font-semibold text-slate-800 hover:underline'>
								Why is insurance so important?
							</AccordionTrigger>
							<AccordionContent className='text-base md:text-lg px-8 pb-8 md:px-12 md:pb-12 lg:px-12 lg:pb-8 text-slate-600 mt-2'>
								<article>
									Hiring a handyman with commercial liability insurance is
									crucial for protecting homeowners from potential financial
									liabilities arising from accidents or property damage during a
									job. Without it, homeowners could be held responsible for
									medical bills, legal fees, or repair costs that could result
									from accidental damage to property or bodily injury.
								</article>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
				<div className='bg-white rounded-xl shadow-md space-y-6 m-3'>
					<Accordion type='single' collapsible>
						<AccordionItem value='item-1'>
							<AccordionTrigger className='text-xl md:text-2xl p-8 md:p-12 lg:p-12 font-semibold text-slate-800 hover:underline'>
								<p>Can I get a quote?</p>
							</AccordionTrigger>
							<AccordionContent className='text-base md:text-lg px-8 pb-8 md:px-12 md:pb-12 lg:px-12 lg:pb-8 text-slate-600 mt-2'>
								<article>
									Absolutely! We offer free estimates for all our services. Just
									reach out to us with the details of your project, and we will
									schedule a time to assess the work needed and provide you with
									a detailed quote.
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
									The duration of a project can vary based on its size and
									complexity. After assessing your project, we will provide you
									with an estimated timeline. We always strive to complete our
									work efficiently while maintaining high-quality standards.
								</article>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
				<div className='bg-white rounded-xl shadow-md space-y-6 m-3'>
					<Accordion type='single' collapsible>
						<AccordionItem value='item-1'>
							<AccordionTrigger className='text-xl md:text-2xl p-8 md:p-12 lg:p-12 font-semibold text-slate-800 hover:underline'>
								<p>Do you guarantee your work?</p>
							</AccordionTrigger>
							<AccordionContent className='text-base md:text-lg px-8 pb-8 md:px-12 md:pb-12 lg:px-12 lg:pb-8 text-slate-600 mt-2'>
								<article>
									Yes, your satisfaction is our top priority. We take pride in
									delivering quality results, and we&apos;re committed to making
									sure you&apos;re happy with the finished job.
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
									Yes, we believe in leaving your space as clean as we found it.
									Our team will clean up all debris and materials after
									completing the job, ensuring that you can enjoy your newly
									completed project without any hassle.
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
									Yes, we understand that many of our clients have busy
									schedules. We offer flexible scheduling options, including
									evenings and weekends, to accommodate your needs. Just let us
									know your availability, and we will do our best to work around
									it.
								</article>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</section>
	)
}
