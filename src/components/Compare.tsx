'use client'
import ReactCompareImage from 'react-compare-image'

export default function Compare() {
    return (
        <div>
            <div className='w-full rounded overflow-hidded max-w-[900px] items-center mx-auto p-8 md:p-4 lg:p-0'>
                <ReactCompareImage
                    leftImage='/logo_outline.png'
                    rightImage='/logoqme.png'
                    sliderLineWidth={5}
                    handleSize={40}
                />
            </div>
        </div>
    )
}
