'use client'
import { useState } from 'react'
import ReactCompareImage from 'react-compare-image'

const imagePairs = [
    {
        left: '/logo_outline.png',
        right: '/logoqme.png',
    },
    {
        left: '/logoqme.png',
        right: '/logo_outline.png',
    },
    {
        left: '/logo_outline.png',
        right: '/logoqme.png',
    },
]

export default function Compare_2() {
    const [index, setIndex] = useState(0)

    const prev = () =>
        setIndex((i) => (i - 1 + imagePairs.length) % imagePairs.length)
    const next = () => setIndex((i) => (i + 1) % imagePairs.length)

    const { left, right } = imagePairs[index]

    return (
        <>
            <span className='text-center text-4xl md:text-5xl font-bold text-slate-800 pb-2 flex justify-center'>
                Previous Work
            </span>
            <div className='w-full max-w-[900px] mx-auto p-4 md:p-6 lg:p-8 text-center'>
                <div className='relative w-full rounded overflow-hidden'>
                    <ReactCompareImage
                        leftImage={left}
                        rightImage={right}
                        sliderLineWidth={5}
                        handleSize={40}
                    />
                    {/* Navigation buttons */}
                    <div className='absolute inset-4 flex justify-between items-center px-4 z-10 pointer-events-none'>
                        <button
                            onClick={prev}
                            className='bg-white/80 hover:bg-white text-black px-3 py-2 rounded-full shadow-md transition pointer-events-auto'
                        >
                            ←
                        </button>
                        <button
                            onClick={next}
                            className='bg-white/80 hover:bg-white text-black px-3 py-2 rounded-full shadow-md transition pointer-events-auto'
                        >
                            →
                        </button>
                    </div>
                </div>

                <p className='mt-4 text-sm text-gray-500'>
                    {index + 1} / {imagePairs.length}
                </p>
            </div>
        </>
    )
}
