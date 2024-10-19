import { NextResponse } from "next/server";
import quotes from './quotes.json'

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuotes = quotes[randomIndex];

    console.log("Random Index:", randomIndex); // Log the random index
    console.log("Selected Quote:", randomQuotes); // Log the selected quote

    const response = NextResponse.json({ randomQuotes });
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    return response;
}
