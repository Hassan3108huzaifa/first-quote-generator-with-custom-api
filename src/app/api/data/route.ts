import { NextResponse } from "next/server";
import quotes from './quotes.json';

export async function GET() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuotes = quotes[randomIndex];

    console.log("Random Index:", randomIndex); // Log the random index
    console.log("Selected Quote:", randomQuotes); // Log the selected quote

    const response = NextResponse.json({ randomQuotes });
    response.headers.append('Cache-Control', 'no-store'); // Prevent caching
    return response;
}
