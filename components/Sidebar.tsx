"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
    
    IconWand ,
    IconHistory ,
    IconCreditCardPay ,
} from "@tabler/icons-react";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SidebarDemo() {
    const links = [
    {
        label: "Tools",
        href: "#",
        icon: (
            <IconWand  className="text-neutral-200 hover:text-purple h-6 w-6 flex-shrink-0" />
        ),
    },
    
    {
        label: "History",
        href: "#",
        icon: (
            <IconHistory  className="text-neutral-200 hover:text-purple h-6 w-6 flex-shrink-0" />
        ),
    },
    {
        label: "Billing",
        href: "#",
        icon: (
            <IconCreditCardPay  className="text-neutral-200 hover:text-purple h-6 w-6 flex-shrink-0" />
        ),
    },
    ];

    const [open, setOpen] = useState(false);
    return (
        <div
            className={cn(
            "rounded-md flex flex-col md:flex-row  dark:bg-neutral-800 w-full flex-1  border-neutral-200 dark:border-neutral-700 overflow-hidden",
            "h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
            )}
        >
        <Sidebar open={open} setOpen={setOpen}>
            <SidebarBody className="justify-between gap-10">
                <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    {open ? <Logo /> : <LogoIcon />}
                    <div className="mt-20 flex flex-col gap-5  ">
                        {links.map((link, idx) => (
                            <SidebarLink className="hover:bg-hovergrey rounded-lg px-2" key={idx} link={link} />
                        ))}
                    </div>
                </div>
            </SidebarBody>
        </Sidebar>
        <Dashboard/>
    </div>
  );
}
export const Logo = () => {
    return (
        <Link
            href="#"
            className="font-normal flex space-x-2 items-center text-sm text-black py-2 relative z-20"
        >
            <div className="h-6 w-7 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-medium text-purple text-2xl dark:text-white whitespace-pre"
            >
                GigBoost AI
        </motion.span>
        </Link>
    );
};
export const LogoIcon = () => {
    return (
        <Link
            href="#"
            className="font-normal flex space-x-2 items-center text-sm text-black py-2 relative z-20"
        >
            <div className="h-6 w-7 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
        </Link>
    );
};

import { gigboosterservices } from "@/data/data";
import { IconBrandFiverr } from '@tabler/icons-react';

const Dashboard = () => {
    return (
        <div className=" bg-bgdark my-10 flex-1 w-full">
            <div className="p-2 md:p-10 border-neutral-200 dark:border-neutral-700 bg-bgdark flex flex-col gap-2 h-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {gigboosterservices.map((service, index) => (
                        <div key={index} className="bg-slategrey border border-neutral-700 h-52 hover:bg-hovergrey flex flex-col justify-center items-center rounded-lg p-2">
                            <IconBrandFiverr className=" text-purple bg-bgdark2 rounded-full  w-12 h-12 p-1 my-3" stroke={1}/>
                            <h1 className="text-white text-center font-semibold md:text-2xl">{service.name}</h1>
                            <p className="text-neutral-400 text-center py-2 text-sm md:text-base">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
