import React from 'react'
import Sideee from '@/components/Sideee'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import Link from 'next/link'
import { prisma } from '@/app/lib/db'
import { auth } from '@/app/lib/auth'
import { redirect } from 'next/navigation'

const Page = async () => {
    const session = await auth()
    const userId = session?.user?.id

    if (!userId) {
        redirect('/')
    }


    const userHistory = await prisma.aiOutputHistory.findMany({
        where: {
            userId: userId, 
        },
    })

    return (
        <main className="bg-bgdark h-screen">
            <Sideee />
            <div className="p-6 bg-bgdark sm:ml-72 text-white">
                <h1 className="font-medium text-3xl text-center py-4 pb-12">Your Output History</h1>
                <Table className="bg-slategrey rounded-lg">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Template</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Data</TableHead>
                            <TableHead>Created At</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {userHistory && userHistory.length > 0 ? (
                            userHistory.map((history) => (
                                <TableRow key={history.id}>
                                    <TableCell>{history.templateUsed}</TableCell>
                                    <TableCell>{history.title || 'Untitled'}</TableCell>
                                    <TableCell>
                                        {history.outputcontent.length > 30
                                            ? history.outputcontent.substring(0, 30) + '...'
                                            : history.outputcontent}
                                    </TableCell>
                                    <TableCell>{new Date(history.createdAt).toLocaleDateString()}</TableCell>
                                    <TableCell>
                                        <Link href={`/dashboard/history/${history.id}`}>
                                            <button className="flex items-center justify-end w-30 h-10 bg-transparent text-white border-2 border-purple rounded-lg px-3 py-2 transition-all duration-600 ease-in-out hover:bg-purple cursor-pointer group">
                                                <span className="text-sm font-medium">View All</span>
                                            </button>
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4} className='text-center py-4'>No output history found.</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </main>
    )
}

export default Page
