"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

interface Data {
  author: string
  quote: string
}

export default function Home() {
  const [data, setData] = useState<Data | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleQuote = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/data')
      const result = await response.json()
      if (result && result.randomQuotes && result.randomQuotes.quote && result.randomQuotes.author) {
        setData(result.randomQuotes)
      } else {
        console.error("Invalid data structure:", result)
        setData(null)
      }
    } catch (error) {
      console.error("Error fetching data:", error)
      setData(null)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-700 via-pink-500 to-red-500">
      <Card className="w-full max-w-2xl mx-4 shadow-2xl bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-gray-800">
            Random Quote Generator
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center min-h-[200px] p-6">
          <AnimatePresence mode="wait">
            {data ? (
              <motion.div
                key={data.quote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-xl font-semibold text-gray-700 mb-4">&quot;{data.quote}&quot;</p>

                <p className="text-lg text-gray-600">- {data.author}</p>
              </motion.div>
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-lg text-gray-600 text-center"
              >
                Click the button below to generate a random quote
              </motion.p>
            )}
          </AnimatePresence>
        </CardContent>
        <CardFooter className="flex justify-center pb-6">
          <Button
            variant="default"
            size="lg"
            onClick={handleQuote}
            disabled={isLoading}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
            Generate Random Quote
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}