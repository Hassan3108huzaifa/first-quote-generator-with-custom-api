import { NextResponse } from "next/server";
import quotes from './quotes.json'
 export async function GET() {
    const randomIndex: number = Math.floor(Math.random() * quotes.length);
    const randomQuotes = quotes[randomIndex];

    return NextResponse.json({ randomQuotes });
}

