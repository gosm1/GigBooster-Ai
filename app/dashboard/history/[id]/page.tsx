import { prisma } from '@/app/lib/db'
import { Editor } from '@/components/Editor'
import Sideee from '@/components/Sideee'
import { auth } from '@/app/lib/auth'
import { redirect } from 'next/navigation'

import React from 'react'


const HistoryPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params

  const session = await auth()
    const userId = session?.user?.id

    if (!userId) {
        redirect('/')
    }


  const historyItem = await prisma.aiOutputHistory.findUnique({
    where: {
      id: id,
    },
  })

  // If no history item is found, display a fallback message
  if (!historyItem) {
    return <div className="p-6 text-white">No history found with</div>
  }

  // If the history item is found, render the content
  return (
    <main className="bg-bgdark h-screen">
      <Sideee />
        <div className='p-6 bg-bgdark  sm:ml-72 text-white'>
          <h1></h1>
          <div className='col-span-2 bg-slategrey px-4 rounded-lg h-[calc(100vh-490px)] md:h-[calc(100vh-270px)] m-2'>
            <Editor value={historyItem.outputcontent} /> 
          </div>
        </div>
    </main>
  )
}

export default HistoryPage
