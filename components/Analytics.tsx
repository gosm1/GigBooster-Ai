import React from 'react'
import { Compare } from './ui/compare'
import analytic1 from '@/assets/analytics1.png'
import analytic2 from '@/assets/analytics2.png'

const Analytics = () => {
    return (
        <div id='benefits' className="bg-black flex flex-col sm:flex-row gap-10 items-center justify-evenly pt-16">
            <div className="order-2 sm:order-1 p-1 border rounded-2xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 px-1">
                <Compare
                    firstImage={analytic1.src}
                    secondImage={analytic2.src}
                    firstImageClassName="object-cover object-left-top"
                    secondImageClassname="object-cover object-left-top"
                    className="h-[200px] w-[250px] sm:h-[400px] sm:w-[530px]"
                    slideMode="hover"
                />
            </div>
            <h1 className="order-1 sm:order-2 text-2xl text-center px-4  md:px-0 md:text-start pb-10 md:pb-0 md:text-4xl max-w-lg  ">See the Difference <span className="font-semibold bg-gradient-to-r from-[#F1EFFE] via-[#B3A7FE] via-[#804eec] to-[#4325FF] bg-clip-text text-transparent">Before and After</span> using GigBooster AI</h1>
        </div>
    )
}

export default Analytics
