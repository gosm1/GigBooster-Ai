"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import template from '@/assets/template.png'
import giginfo from '@/assets/giginfo.png'
import generate from '@/assets/generate.png'
import results from '@/assets/results.png'

const content = [
    {
        title: "Collaborative Editing",
        description:"Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
        content: (
          <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src='/'
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
        ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];
const HowItsWorks = () => {
    return (
      <section id="how-it-works" className="py-16 bg-black ">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <h2 className="text-2xl md:text-4xl  text-center font-semibold  lg:mb-4 mx-auto  lg:mx-0 mb-2">Get Started with GigBooster AI in <span className="bg-gradient-to-r from-[#F1EFFE] via-[#B3A7FE] via-[#804eec] to-[#4325FF] bg-clip-text text-transparent">4 Easy Steps</span></h2>
        <p className="text-lg font-normal  text-center text-white/60">
          Boost your Fiverr gig's visibility and performance with just a few clicks. Here's how:
        </p>

        <div className="space-y-12 py-12">
          {/* Step 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-10">
            <div className="sm:order-1">
              <p className="font-normal text-lg bg-gradient-to-r from-[#F1EFFE] via-[#B3A7FE] via-[#804eec] to-[#4325FF] bg-clip-text	 text-transparent inline-block">Step 1 :</p>
              <h1 className="text-2xl font-semibold mb-2">Select Your Template</h1>
              <p className="text-gray-600">
                Choose what you want to optimize: Title, Description, Tags, or all three for a comprehensive boost.
              </p>
            </div>
            <div className="sm:order-2">
              <Image src={template} alt="Template selection" className="rounded-lg object-cover h-[300px]" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-10">
            <div className="sm:order-2">
            <p className="font-normal text-lg bg-gradient-to-r from-[#F1EFFE] via-[#B3A7FE] via-[#804eec] to-[#4325FF] bg-clip-text	 text-transparent inline-block">Step 2 :</p>
            <h3 className="text-2xl font-semibold mb-4">Provide Gig Information</h3>
              <p className="text-gray-600">
                Input your gig details—describe your service, target audience, and key features.
              </p>
            </div>
            <div className="sm:order-1">
              <Image src={giginfo} alt="Template selection" className="rounded-lg object-cover h-[300px]" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-10">
            <div className="sm:order-1">
            <p className="font-normal text-lg bg-gradient-to-r from-[#F1EFFE] via-[#B3A7FE] via-[#804eec] to-[#4325FF] bg-clip-text	 text-transparent inline-block">Step 3 :</p>
            <h3 className="text-2xl font-semibold mb-4">Generate and Receive Results</h3>
              <p className="text-gray-600">
                Let our AI do the heavy lifting. Get optimized suggestions for titles, descriptions, and tags in seconds.
              </p>
            </div>
            <div className="sm:order-2">
              <Image src={generate} alt="Template selection" className="rounded-lg object-cover h-[300px]" />
            </div>
          </div>

          {/* Step 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-10">
            <div className="sm:order-2">
            <p className="font-normal text-lg bg-gradient-to-r from-[#F1EFFE] via-[#B3A7FE] via-[#804eec] to-[#4325FF] bg-clip-text	 text-transparent inline-block">Step 4 :</p>
              <h3 className="text-2xl font-semibold mb-4">Implement the Results</h3>
              <p className="text-gray-600">
                Copy and paste the AI-powered recommendations into your gig to start seeing improved performance right away.
              </p>
            </div>
            <div className="sm:order-1">
              <Image src={results} alt="Template selection" className="rounded-lg object-cover h-[300px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default HowItsWorks
