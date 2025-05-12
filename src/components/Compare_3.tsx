// components/Compare_3.tsx
'use client'

import dynamic from 'next/dynamic'
import 'react-multi-carousel/lib/styles.css'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const Carousel = dynamic(() => import('react-multi-carousel'), {
    ssr: false,
})

import ReactCompareImage from 'react-compare-image'
import Image from 'next/image'
import { useRef } from 'react'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
}

export default function Compare_3() {
    const carouselRef = useRef<typeof Carousel>(null)
    return (
        <div className='pt-40 md:pt-10 lg:pt-20 w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 text-center  justify-center flex flex-col'>
            <span className='text-center text-4xl md:text-5xl font-bold text-slate-800 px-6 md:px-8 lg:px-12 flex justify-center '>
                Previous Work
            </span>
            <span className='text-center text-xl md:text-2xl text-slate-800 p-6 md:p-8 lg:p-12 flex justify-center'>
                Slide handle to see before and after
            </span>
            <div className='relative'>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={false}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition='all .5'
                    transitionDuration={500}
                    containerClass='carousel-container'
                    dotListClass='custom-dot-list-style'
                    itemClass='carousel-item-padding-40-px'
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
                    <div className='px-5'>
                        <ReactCompareImage
                            leftImage='/before_pillar_1.jpeg'
                            rightImage='/after_pillar_1.jpeg'
                            sliderLineWidth={5}
                            handleSize={40}
                        />
                    </div>
                    <div className='px-5'>
                        <ReactCompareImage
                            leftImage='/before_50.jpg'
                            rightImage='/after_12.jpg'
                            sliderLineWidth={5}
                            handleSize={40}
                        />
                    </div>
                    <div className='px-5'>
                        <ReactCompareImage
                            leftImage='/before_8.jpeg'
                            rightImage='/after_8.jpg'
                            sliderLineWidth={5}
                            handleSize={40}
                        />
                    </div>
                    <Dialog>
                        <DialogTrigger>
                            {' '}
                            <Image
                                className='px-5'
                                src='/after_1.jpg'
                                alt='Example Work'
                                width={400}
                                height={400}
                            />
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle
                                    area-hidden='false'
                                    className='hidden'
                                >
                                    picture of previous work
                                </DialogTitle>
                                <Image
                                    src='/after_1.jpg'
                                    alt='Example Work'
                                    width={500}
                                    height={500}
                                />
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                    <Dialog>
                        <DialogTrigger>
                            {' '}
                            <Image
                                className='px-5'
                                src='/after_3.jpg'
                                alt='Example Work'
                                width={400}
                                height={400}
                            />
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle
                                    area-hidden='false'
                                    className='hidden'
                                >
                                    picture of previous work
                                </DialogTitle>
                                <Image
                                    src='/after_3.jpg'
                                    alt='Example Work'
                                    width={500}
                                    height={500}
                                />
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                    <Dialog>
                        <DialogTrigger>
                            {' '}
                            <Image
                                className='px-5'
                                src='/after_8.jpg'
                                alt='Example Work'
                                width={400}
                                height={400}
                            />
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle
                                    area-hidden='false'
                                    className='hidden'
                                >
                                    picture of previous work
                                </DialogTitle>
                                <Image
                                    src='/after_8.jpg'
                                    alt='Example Work'
                                    width={500}
                                    height={500}
                                />
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                    <Dialog>
                        <DialogTrigger>
                            {' '}
                            <Image
                                className='px-5'
                                src='/after_17.jpg'
                                alt='Example Work'
                                width={400}
                                height={400}
                            />
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle
                                    area-hidden='false'
                                    className='hidden'
                                >
                                    picture of previous work
                                </DialogTitle>
                                <Image
                                    src='/after_17.jpg'
                                    alt='Example Work'
                                    width={500}
                                    height={500}
                                />
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
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
