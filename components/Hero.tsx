import { cn } from '@/lib/utils'
import React from 'react'
import DotPattern from './ui/dot-pattern'
import AnimatedGradientText from './ui/animated-gradient-text';

const Hero = () => {
    const gradientTextStyle = {
        color: "#fff",
        backgroundImage: "-webkit-linear-gradient(90deg, #636363 0%, #d6d6d6 50%)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        textFillColor: "transparent",
        WebkitTextFillColor: "transparent",
    };
    return (
        <main className='bg-black h-screen flex items-center justify-center'>
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background pt-24">
                <div className="z-10 whitespace-pre-wrap text-center text-5xl font-medium text-white">
                    <div className="z-10 flex mb-8 items-center justify-center">
                        <AnimatedGradientText>
                        ✨<hr className="mx-3 h-5 w-px shrink-0 bg-gray-300" />{" "}
                            <span
                                className={cn(
                                    `inline animate-gradient bg-gradient-to-r from-[#F1EFFE] via-[#9c40ff] to-[#F1EFFE] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                                )}
                            >
                            Discover Our AI Solution for Fiverr Sellers
                        </span>
                        </AnimatedGradientText>
                    </div>
                    <h1 className="lg:max-w-3xl text-3xl md:text-5xl md:max-w-4xl px-4 lg:px-0 lg:text-6xl text-center"><span style={gradientTextStyle}>Skyrocket Your </span><span className='bg-gradient-to-r from-[#F1EFFE] via-[#B3A7FE] via-[#804eec] to-[#4325FF] bg-clip-text text-transparent'>Fiverr Gigs</span> <span style={gradientTextStyle}>with AI-Powered SEO</span></h1>
                </div>
                    <p className='max-w-xl text-lg font-normal pt-5 px-4 md:px-0 text-center text-white/60'>Rank higher, attract more clients, and increase sales—powered by the cutting-edge AI of GigBooster</p>
                    
                    <div className='z-10 pt-8 flex items-center justify-center gap-8'>
                        <button className="px-12 py-3 font-medium rounded-xl bg-gradient-to-br from-[#B3A7FE] to-[#9c40ff] text-white focus:ring-2  hover:shadow-xl transition duration-200">
                            <a href='/login'>Login</a> 
                        </button>
                        <button className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F1EFFE_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-bgdark2 px-12 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                <a href='/login' className='bg-bgdark2 '>Get Started</a>
                            </span>
                        </button>
                    </div>

                    <div className="flex items-center justify-center mt-8 gap-4">
                        <div className="flex items-center gap-x-2">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2"  // Fixed
                                strokeLinecap="round"  // Fixed
                                strokeLinejoin="round"  // Fixed
                                className="lucide lucide-history w-4 h-4 text-muted-foreground"
                            >
                                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                                <path d="M3 3v5h5"></path>
                                <path d="M12 7v5l4 2"></path>
                            </svg>
                            <span className="text-sm text-muted-foreground">free trial available</span>
                            <span className="text-muted-foreground">•</span>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2"  // Fixed
                                strokeLinecap="round"  // Fixed
                                strokeLinejoin="round"  // Fixed
                                className="lucide lucide-credit-card w-4 h-4 text-muted-foreground"
                            >
                                <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                                <line x1="2" x2="22" y1="10" y2="10"></line>
                            </svg>
                            <span className="text-sm text-muted-foreground">No card required</span>
                        </div>
                    </div>
                <DotPattern
                    className={cn(
                        "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
                    )}
                />
            </div>
            <div className="absolute top-[-266px] left-[calc(48%-360px/2)] bg-purple/60 opacity-50 rounded-full blur-[10rem]  w-[379px] h-[620px] hidden md:block"></div>
            <div className="absolute flex sm:hidden w-72 h-72 rounded-full bg-purple blur-[10rem] -top-24 left-16 z-10"></div>
        </main>
    )
}

export default Hero