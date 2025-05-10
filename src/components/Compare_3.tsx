// components/Compare_3.tsx
'use client'

import dynamic from 'next/dynamic'
import 'react-multi-carousel/lib/styles.css'

const Carousel = dynamic(() => import('react-multi-carousel'), {
    ssr: false,
})

import ReactCompareImage from 'react-compare-image'

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
    return (
        <div className='pt-5 md:pt-10 lg:pt-20 w-full max-w-[900px] mx-auto p-4 md:p-6 lg:p-8 text-center'>
            <span className='text-center text-4xl md:text-5xl font-bold text-slate-800 p-6 md:p-8 lg:p-12 flex justify-center'>
                Previous Work
            </span>
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
                // removeArrowOnDeviceType={['tablet', 'mobile']}
                dotListClass='custom-dot-list-style'
                itemClass='carousel-item-padding-40-px'
            >
                <div className='px-5'>
                    <ReactCompareImage
                        leftImage='/logo_outline.png'
                        rightImage='/logoqme.png'
                        sliderLineWidth={5}
                        handleSize={40}
                    />
                </div>
                <div className='px-5'>
                    <ReactCompareImage
                        leftImage='/logo_outline.png'
                        rightImage='/logoqme.png'
                        sliderLineWidth={5}
                        handleSize={40}
                    />
                </div>
                <div className='px-5'>
                    <ReactCompareImage
                        leftImage='/logo_outline.png'
                        rightImage='/logoqme.png'
                        sliderLineWidth={5}
                        handleSize={40}
                    />
                </div>
                <div className='px-5'>
                    <ReactCompareImage
                        leftImage='/logo_outline.png'
                        rightImage='/logoqme.png'
                        sliderLineWidth={5}
                        handleSize={40}
                    />
                </div>
                <div className='px-5'>
                    <ReactCompareImage
                        leftImage='/logo_outline.png'
                        rightImage='/logoqme.png'
                        sliderLineWidth={5}
                        handleSize={40}
                    />
                </div>
                <div className='px-5'>
                    <ReactCompareImage
                        leftImage='/logo_outline.png'
                        rightImage='/logoqme.png'
                        sliderLineWidth={5}
                        handleSize={40}
                    />
                </div>
                <div className='px-5'>
                    <ReactCompareImage
                        leftImage='/logo_outline.png'
                        rightImage='/logoqme.png'
                        sliderLineWidth={5}
                        handleSize={40}
                    />
                </div>
            </Carousel>
        </div>
    )
}
