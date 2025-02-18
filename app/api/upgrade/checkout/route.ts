import { auth } from '@/app/lib/auth'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-09-30.acacia',
})
export async function POST(req: Request){
    try{
        const session = await auth()
        const userId = session?.user?.id

        if(!userId){
            return new NextResponse('Unauthorized', { status: 401 })
        }

        const lineItem: Stripe.Checkout.SessionCreateParams.LineItem[] = [
            {
                quantity: 1,
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'GigBooster Lifetime Access',
                    },
                    unit_amount: 699,
                }
            }
        ]

        const checkoutSession = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItem,
            mode: 'payment',
            success_url: `https://gigboosterai.vercel.app/dashboard`,
            cancel_url: `https://gigboosterai.vercel.app/`,
        })

        return NextResponse.json({ url: checkoutSession.url }) 

    }
    catch(err){
        return new NextResponse('An error occurred' + err, { status: 500 })
    }
}
