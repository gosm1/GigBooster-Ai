'use client'
import Sideee from '@/components/Sideee'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router = useRouter() // Move useRouter here

    const handlePayment = async () => {
        try{
            const response = await axios.post('/api/upgrade/checkout')

            if(response.data.url){
                router.push(response.data.url)
            }
        }
        catch(err){
            console.error(err)
        }
    }

    return (
        <main className="bg-bgdark h-screen">
            <Sideee />
            <div className='p-6 sm:ml-72'>
                <div className='flex items-center justify-center py-12'>
                    <div className="relative flex flex-col gap-4 p-4 w-96 bg-[hsl(240,15%,9%)] rounded-lg gradient-border">
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%+2px)] h-[calc(100%+2px)] bg-gradient-to-r from-[hsl(0,0%,100%)] to-[hsl(0,0%,40%)] rounded-lg"></div>
                        <div className="relative flex flex-col gap-2">
                            <div className='flex items-center justify-between'>
                                <h2 className="text-white text-lg font-semibold">Premium Package</h2>
                                <p className="text-white text-lg ">6.99/Lifetime</p> 
                            </div>
                            
                            <p className="text-[hsl(0,0%,83%)] text-sm w-3/4 pb-5 pt-2">Unlock the full potential with our premium features and advanced tools.</p>
                        </div>
                        <hr className="w-full h-0.5 mb-5 bg-[hsl(240,9%,17%)] border-none" />
                        <ul className="flex flex-col gap-2">
                            <li className="flex items-center gap-2">
                                <div className="flex justify-center items-center w-4 h-4 bg-[hsl(266,92%,58%)] rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="w-3 h-3 fill-[hsl(240,15%,9%)]"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <span className="text-white text-sm">Unlimited access to all tools</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="flex justify-center items-center w-4 h-4 bg-[hsl(266,92%,58%)] rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="w-3 h-3 fill-[hsl(240,15%,9%)]"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <span className="text-white text-sm">Access to all future updates</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="flex justify-center items-center w-4 h-4 bg-[hsl(266,92%,58%)] rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="w-3 h-3 fill-[hsl(240,15%,9%)]"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <span className="text-white text-sm">Early access to new features</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="flex justify-center items-center w-4 h-4 bg-[hsl(266,92%,58%)] rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="w-3 h-3 fill-[hsl(240,15%,9%)]"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.416  3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <span className="text-white text-sm">Personalized gig optimization</span>
                            </li>
                        </ul>

                        <button 
                            onClick={handlePayment} 
                            className="cursor-pointer py-2 w-full bg-gradient-to-r from-[rgba(94,58,238,1)] to-[rgba(197,107,240,1)] text-white text-sm rounded-full shadow-[inset_0_-2px_25px_-4px_#fff]">
                            Upgrade Plan
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page
