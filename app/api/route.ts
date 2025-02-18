import { NextResponse } from "next/server";
import { prisma } from "../lib/db";
import { auth } from "../lib/auth";


export async function POST(req: Request) {
    try {
    // Get the current authenticated session

    const session = await auth()
    const userId = session?.user?.id
    
    const { title, outputcontent, templateUsed } = await req.json();


    const createOutputHistory = await prisma.aiOutputHistory.create({
        data: {
            title: title,
            outputcontent: outputcontent,
            templateUsed: templateUsed,
            userId: userId! , 
        },
    });

    return NextResponse.json(createOutputHistory, { status: 201 });
    } catch (err) {
        return new NextResponse("An error occurred", { status: 500 });
    }
}
