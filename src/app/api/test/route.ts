// app/api/test/route.ts
import {NextResponse} from 'next/server'

export async function GET() {
    return NextResponse.json({
        status: 200,
        message: 'Hello World!',
        timeStamp: Date.now()
        }
    )
}
export async function POST(req : Request) {
    const body = await req.json()
    return NextResponse.json({
        receivedData : body,
        processedAt : Date.now()
    })
}