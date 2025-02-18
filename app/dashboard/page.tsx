import { SidebarDemo } from '@/components/Sidebar'
import Sideee from '@/components/Sideee'
import { gigboosterservices } from '@/data/data'
import { IconBrandFiverr } from '@tabler/icons-react'
import Link from 'next/link'
import { auth } from '@/app/lib/auth'
import { redirect } from 'next/navigation'
import React from 'react'

const Page = async () => {

    const session = await auth()
    const userId = session?.user?.id


    if (!userId) {
        redirect('/')
    }
    return (
        <main className="bg-bgdark">
            <Sideee />
            <div className='p-6 sm:ml-72'>
                
                <div className=" bg-bgdark h-screen flex-1 w-full">
                    <div className="  border-neutral-200 dark:border-neutral-700 bg-bgdark flex flex-col gap-2 ">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 ">
                            {gigboosterservices.map((service, index) => (
                                <Link key={index} href={`/dashboard/${service.slug}`} className="bg-slategrey border border-neutral-700 h-[230px] hover:bg-hovergrey flex flex-col justify-center items-center rounded-lg p-2">
                                    <IconBrandFiverr className=" text-purple bg-bgdark2 rounded-full mb-5 w-12 h-12 p-1 my-3" stroke={1}/>
                                    <h1 className="text-white text-center font-semibold md:text-xl">{service.name}</h1>
                                    <p className="text-neutral-400 text-center pt-2 text-sm md:text-base px-2">{service.description}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
        </main>
    )
}

export default Page
