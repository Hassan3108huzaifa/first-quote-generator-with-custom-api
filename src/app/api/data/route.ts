import { NextResponse } from "next/server";
import quotes from './quotes.json';

export async function GET() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuotes = quotes[randomIndex];

    const response = NextResponse.json({ randomQuotes });
    response.headers.append('Cache-Control', 'no-store'); // Prevent caching
    return response;
}
