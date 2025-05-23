import React from 'react'
import { PaintbrushVertical, Wrench, Hammer, House } from 'lucide-react'
// import Image from 'next/image'

export default function Services() {
    return (
        <section className='features pt-40 flex items-center' id='services'>
            <div className='mx-auto px-4 sm:px-7 max-w-screen-xl py-20  flex flex-col'>
                <h2 className='text-center text-4xl md:text-5xl font-bold text-slate-800 mb-4'>
                    Services
                </h2>
                <p className='text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12 text-balance'>
                    We offer a range of handyman and painting services tailored
                    to homes and businesses in Fernandina Beach.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 text-2xl'>
                    <div className='flex flex-col items-center text-center'>
                        <h3 className='flex items-center justify-center gap-2  font-semibold text-gray-800 mb-2'>
                            <PaintbrushVertical className='w-6 h-6  text-blue-600' />
                            <span className='text-2xl'>Painting</span>
                        </h3>
                        <p className='text-lg text-gray-500 max-w-md'>
                            Interior and exterior painting with attention to
                            detail and quality.
                        </p>
                    </div>
                    <div className='flex flex-col items-center text-center'>
                        <h3 className='flex items-center justify-center gap-2  font-semibold text-gray-800 mb-2'>
                            <Hammer className='w-6 h-6 text-orange-600' />
                            <span>Handyman</span>
                        </h3>
                        <p className='text-lg text-gray-500 max-w-md'>
                            Small repairs, installations, and general
                            maintenance services.
                        </p>
                    </div>
                    <div className='flex flex-col items-center text-center'>
                        <h3 className='flex items-center justify-center gap-2  font-semibold text-gray-800 mb-2'>
                            <Wrench className='w-6 h-6 text-purple-600' />
                            <span>Renovations</span>
                        </h3>
                        <p className='text-lg text-gray-500 max-w-md'>
                            Tackling larger renovation or fix-it projects around
                            your home.
                        </p>
                    </div>
                    <div className='flex flex-col items-center text-center'>
                        <h3 className='flex items-center justify-center gap-2 font-semibold text-gray-800 mb-2'>
                            <House className='w-6 h-6 text-green-600' />
                            <span>Maintenance</span>
                        </h3>
                        <p className='text-lg text-gray-500 max-w-md'>
                            Seasonal upkeep like gutter cleaning, filter
                            changes, and more!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
