import React from 'react'

const Cta = () => {
    return (
        <section className="bg-black pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div
                    className="lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r  from-[#804eec] via-[#804eec] to-[#4325FF] flex items-center justify-between flex-col lg:flex-row"
                >
                    <div className="block text-center mb-5 lg:text-left lg:mb-0">
                <h2
                    className="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2"
                >
                Start Boosting Your Gigs Now! 
                </h2>
                <p className="text-lg text-gray-200">
                Don’t wait—unlock your Fiverr potential with AI-driven SEO today
                </p>
                    </div>
                    <a href="/login" className="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-indigo-600 font-semibold py-3 px-4 transition-all duration-500" >
                        Get Started for Free
                            <svg
                        width="19"
                        height="14"
                        viewBox="0 0 19 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                        stroke="#4F46E5"
                        stroke-width="2.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                            </svg>
                    </a>
                </div>
            </div>
        </section>
    
    )
}

export default Cta
