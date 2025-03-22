"use client";
import Marquee from '@/components/ui/marquee';
import { gigboosterservices } from '@/data/data';
import { IconBrandFiverr } from '@tabler/icons-react';
import { useSession, signIn } from 'next-auth/react'; 

import React, { useEffect } from 'react'; 
import Image from 'next/image'
import { redirect } from 'next/navigation'

import gigboosterICON from '@/assets/gigboosterICON.png'
const Page = () => {
    const { data: session } = useSession();


    useEffect(() => {
        if (session) {
            redirect('/dashboard')
        }
    }, [session]); 

    const handleSignIn = async (provider: string) => {
        await signIn(provider, 
                    { 
                    redirect: true, 
                    callbackUrl: '/dashboard' 
                });
    };



    return (
        <main className='flex flex-col lg:flex-row items-center justify-center bg-bgdark h-screen'>
            {/* form */}
            <div className='md:w-[70%] text-white'>
                <section className=" py-20 md:py-0">
                    <div className="flex flex-col items-center justify-center  py-8 md:h-screen lg:py-0">
                        <div className='flex items-center justify-center mb-8 gap-1'>
                            <Image src={gigboosterICON} width={60} alt='logo' />
                            <h1 className='text-white text-center text-2xl font-bold '>GigBooster Ai</h1>
                        </div>
                        <div className="w-full bg-slategrey rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                                    Sign in to your account
                                </h1>

                                <form className="space-y-4 " onSubmit={(e) => e.preventDefault()}>
                                    <div className="flex items-center justify-center bg-gray-700 space-x-4">
                                        <button 
                                            className="flex items-center w-full bg-white border border-gray-300 rounded-lg shadow-md px-6 py-3 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                            onClick={() => handleSignIn('google')} // Sign in with Google
                                        >
                                            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="80px" height="80px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title>  <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
                                            <span>Continue with Google</span>
                                        </button>
                                    </div>  
                                    <div className="flex items-center justify-center">
                                        <hr className="flex-grow border-t border-gray-300" />
                                        <span className="mx-2">or</span>
                                        <hr className="flex-grow border-t border-gray-300" />
                                    </div>
                                    <div className="flex items-center justify-center bg-gray-700 space-x-4">
                                        <button 
                                            className="flex items-center w-full bg-white border border-gray-300 rounded-lg shadow-md px-6 py-3 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                            onClick={() => signIn("github").catch(console.error)} type='submit' // Sign in with GitHub
                                        >
                                            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.304 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.287-.011-1.243-.017-2.25-3.338.724-4.043-1.607-4.043-1.607-.546-1.384-1.333-1.754-1.333-1.754-1.089-.743.083-.728.083-.728 1.205.085 1.838 1.237 1.838 1.237 1.069 1.832 2.805 1.303 3.49.996.108-.774.419-1.303.762-1.603-2.665-.303-5.466-1.333-5.466-5.933 0-1.313.469-2.386 1.236-3.227-.124-.303-.536-1.53.117-3.185 0 0 1.008-.322 3.303 1.227.958-.266 1.988-.398 3.006-.403 1.018.005 2.048.137 3.006.403 2.295-1.549 3.303-1.227 3.303-1.227.653 1.655.241 2.882.118 3.185.77.841 1.236 1.914 1.236 3.227 0 4.61-2.805 5.63-5.475 5.93.43.37.815 1.099.815 2.22 0 1.604-.014 2.898-.014 3.287 0 .319.218.693.825.577C20.563 21.8 24 17.304 24 12c0-6.627-5.373-12-12-12z"/></svg>
                                            <span>Continue with GitHub</span>
                                        </button> 
                                    </div>                                 
                                </form>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* scrolling cards */}
            <div className="relative flex h-[50vh] md:h-full md:w-[430px] flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-background px-4 md:px-16 md:shadow-xl">
                <div className="flex flex-row gap-2 md:gap-4 [perspective:210px]">
                    <Marquee
                        className="h-screen justify-center overflow-hidden [--duration:60s] [--gap:0.8rem] translate-x-0 translate-y-0 -translate-z-70 rotate-x-0 rotate-y-[-14deg] rotate-z-[10deg] scale-[1.4]"
                        vertical
                    >
                        {gigboosterservices.map((service, index) => (
                            <div key={index} className="bg-slategrey border border-neutral-700 h-[200px] md:h-[230px] hover:bg-hovergrey flex flex-col justify-center items-center rounded-lg p-2">
                                <IconBrandFiverr className=" text-purple bg-bgdark2 rounded-full mb-5 w-10 h-10 md:w-12 md:h-12 p-1 my-3" stroke={1}/>
                                <h1 className="text-white text-center font-semibold md:text-xl">{service.name}</h1>
                                <p className="text-neutral-400 text-center pt-2 text-sm md:text-base px-2">{service.description}</p>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>

        </main>
    )
}

export default Page
