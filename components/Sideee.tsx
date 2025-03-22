'use client'

import React, { useState, useEffect, useRef } from 'react'
import {
    IconWand,
    IconHistory,
    IconCreditCardPay,
} from "@tabler/icons-react";
import Image from 'next/image'
import gigboosterICON from '@/assets/gigboosterICON.png'

const Sidebar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen]);

  const links = [
    {
        id: 1,
        label: "Tools",
        href: "/dashboard",
        icon: <IconWand className="text-neutral-200 hover:text-purple h-6 w-6 flex-shrink-0" />,
    },
    {
        id: 2,
        label: "History",
        href: "/dashboard/history",
        icon: <IconHistory className="text-neutral-200 hover:text-purple h-6 w-6 flex-shrink-0" />,
    },
    {
        id: 3,
        label: "Billing",
        href: "/dashboard/billing",
        icon: <IconCreditCardPay className="text-neutral-200 hover:text-purple h-6 w-6 flex-shrink-0" />,
    },
  ];

  return (
    <>
      <button
        onClick={toggleSidebar}
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-label="Toggle sidebar"
      >
        <span className="sr-only">Open sidebar</span>
        <svg 
          className="w-6 h-6 text-white"
          aria-hidden="true" 
          fill="currentColor" 
          viewBox="0 0 20 20" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            clipRule="evenodd" 
            fillRule="evenodd" 
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>

      <aside 
        ref={sidebarRef} 
        className={`fixed top-0 left-0 z-40 w-72 h-screen transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0 bg-slategrey`} 
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-12 overflow-y-auto">
          <div className='flex items-center justify-center mb-16 gap-2'>
            <Image 
              src={gigboosterICON} 
              width={60}
              height={60}
              alt='GigBooster AI Logo'
              priority
            />
            <h1 className='text-white text-2xl font-bold cursor-pointer'>
              GigBooster AI
            </h1>
          </div>
          <ul className="space-y-2 font-medium">
              {links.map((link) => (
                  <li key={link.id}>
                      <a 
                        href={link.href} 
                        className="flex items-center p-3 rounded-lg hover:bg-hovergrey transition-colors duration-200 group"
                      >
                          {link.icon}
                          <span className="flex-1 ms-3 text-white">
                            {link.label}
                          </span>
                      </a>
                  </li>
              ))}
          </ul>
        </div>
      </aside>
    </>
  )
}

export default Sidebar