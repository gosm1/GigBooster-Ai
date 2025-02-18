"use client";
 
import { cn } from "@/lib/utils";
import React from 'react'
import { AnimatedList } from "./ui/animated-list";


interface Item {
  name: string;
  description: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Order received",
    description: "Fiverr",
    time: "15m ago",
    color: "#1DBF73",
  },
  {
    name: "Order received",
    description: "Fiverr",
    time: "4h ago",
    color: "#1DBF73",
  },
  {
    name: "Order received",
    description: "Fiverr",
    time: "29m ago",
    color: "#1DBF73",
  },
  {
    name: "Order received",
    description: "Fiverr",
    time: "8h ago",
    color: "#1DBF73",
  },
  {
    name: "Order received",
    description: "Fiverr",
    time: "82h ago",
    icon: "💸",
    color: "#1DBF73",
  },

];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.01)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-fiverr">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 3h-2a6 6 0 0 0 -6 6h-3v4h3v8h4v-7h4v7h4v-11h-8v-1.033a1.967 1.967 0 0 1 2 -1.967h2v-4z" />
            </svg>
          </span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};
const Orders = ({ className }: { className?: string}) => {
  return (
    <section id="benefits">
      <div className="bg-black flex flex-col sm:flex-row  items-center justify-evenly md:pt-16">
        <h1 className=" text-2xl text-center px-4 md:px-0 md:text-start pb-10 md:pb-0 md:text-4xl max-w-lg font-normal ">This How's <span className="font-semibold bg-gradient-to-r from-[#F1EFFE] via-[#B3A7FE] via-[#804eec] to-[#4325FF] bg-clip-text text-transparent">you're orders</span> will be after using GigBooster AI</h1>
          <div
            className={cn(
              "relative flex h-[400px] md:w-[500px] flex-col p-6 overflow-hidden rounded-lg border border-cyan-50/30 md:shadow-xl",
              className,
            )}
            >
            <AnimatedList>
              {notifications.map((item, idx) => (
                <Notification {...item} key={idx} />
              ))}
            </AnimatedList>
          </div>
      </div>
    </section>
  )
}

export default Orders
