'use client'

import dynamic from 'next/dynamic'
import 'react-multi-carousel/lib/styles.css'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const Carousel = dynamic(() => import('react-multi-carousel'), {
    ssr: false,
})

import ReactCompareImage from 'react-compare-image'
import Image from 'next/image'
import { useRef } from 'react'

export default function Compare() {
    const carouselRef = useRef<typeof Carousel>(null)
    return (
        <div className='pt-40  md:pt-10 lg:pt-20 w-full p-4 md:p-6 lg:p-8 text-center  justify-center flex flex-col'>
            <span className='text-center text-4xl md:text-5xl font-bold text-slate-800 px-6 md:px-8 lg:px-12 flex justify-center '>
                Previous Work
            </span>
            <span className='text-center text-xl md:text-2xl text-slate-800 p-6 md:p-8 lg:p-12 flex justify-center'>
                Slide handle to see before and after
            </span>
            <div className={`border-box`}>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={{
                        // superLargeDesktop: {
                        //     // the naming can be any, depends on you.
                        //     breakpoint: { max: 1000, min: 1024 },
                        //     items: 3,
                        // },
                        desktop: {
                            breakpoint: { max: 1000, min: 1024 },
                            items: 3,
                        },
                        tablet: {
                            breakpoint: { max: 1024, min: 464 },
                            items: 2,
                        },
                        mobile: {
                            breakpoint: { max: 464, min: 0 },
                            items: 1,
                        },
                    }}
                    infinite={true}
                    autoPlay={false}
                    keyBoardControl={true}
                    transitionDuration={1000}
                    dotListClass='custom-dot-list-style'
                    itemClass='p-3 mb-5  shadow-lg rounded-xl'
                    // containerClass=''
                    // itemClass='mx-2'
                    arrows={false}
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={true}
                    customButtonGroup={
                        <ButtonGroup
                            next={() => carouselRef.current}
                            previous={() => carouselRef.current}
                        />
                    }
                    slidesToSlide={1}
                >
                    <ReactCompareImage
                        leftImage='/before_pillar_1.jpeg'
                        rightImage='/after_pillar_1.jpeg'
                        sliderLineWidth={5}
                        handleSize={40}
                        leftImageCss={{ borderRadius: '10px' }}
                        rightImageCss={{ borderRadius: '10px' }}
                    />

                    <ReactCompareImage
                        leftImage='/before_50.jpg'
                        rightImage='/after_12.jpg'
                        sliderLineWidth={5}
                        handleSize={40}
                        leftImageCss={{ borderRadius: '10px' }}
                        rightImageCss={{ borderRadius: '10px' }}
                    />

                    <ReactCompareImage
                        leftImage='/before_8.jpeg'
                        rightImage='/after_8.jpg'
                        sliderLineWidth={5}
                        handleSize={40}
                        leftImageCss={{ borderRadius: '10px' }}
                        rightImageCss={{ borderRadius: '10px' }}
                    />
                    <Image
                        className='rounded-lg'
                        src='/after_100.jpg'
                        alt='Example Work'
                        width={4000}
                        height={2000}
                    />
                    <Image
                        className='rounded-lg'
                        src='/after_3.jpg'
                        alt='Example Work'
                        width={1000}
                        height={1000}
                    />

                    <Image
                        className='rounded-lg'
                        src='/after_101.jpg'
                        alt='Example Work'
                        width={1000}
                        height={1000}
                    />

                    {/* <Image
                        className='rounded-lg'
                        src='/after_102.jpg'
                        alt='Example Work'
                        width={1000}
                        height={1000}
                    /> */}
                    <Image
                        className='rounded-lg'
                        src='/after_103.jpg'
                        alt='Example Work'
                        width={1000}
                        height={1000}
                    />
                </Carousel>
            </div>
        </div>
    )
}

const ButtonGroup = ({
    next,
    previous,
}: {
    next: () => void
    previous: () => void
}) => {
    return (
        <div className='flex flex-row items-center justify-center gap-4 py-4'>
            <button
                className='cursor-pointer bg-[var(--primary)] shadow px-6 py-3 rounded hover:bg-[var(--foreground)] active:bg-[var(--foreground)]) hover:text-[var(--primary)]'
                onClick={previous}
            >
                <ArrowLeft className='w-5 h-5' />
            </button>
            <button
                className='cursor-pointer bg-[var(--primary)] shadow px-6 py-3 rounded hover:bg-[var(--foreground)] active:bg-[var(--foreground)]) hover:text-[var(--primary)]'
                onClick={next}
            >
                <ArrowRight className='w-5 h-5' />
            </button>
        </div>
    )
}
