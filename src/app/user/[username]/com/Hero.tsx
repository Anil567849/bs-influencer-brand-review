'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { useRouter } from 'next/navigation'
export default function Component() {

    const [text, setText] = useState("")
    const router = useRouter()
    
    function handleSubmit(e: any) {
        e.preventDefault();
        router.push(`/user/${text}`);
    }

  return (
    <section className="w-full h-[80vh] relative">

      <div className="absolute top-0 inset-0 bg-[url('https://img.freepik.com/free-vector/gradient-instagram-social-media-background_23-2150983087.jpg?t=st=1725877124~exp=1725880724~hmac=90d1cc413bf442ce4e7b02e280980cc5896139b233035c74e1b1ed5949171c26&w=740')] bg-cover bg-center h-[80vh] -z-20"></div>

      <div className="container mx-auto px-4 md:px-6 mt-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Read Verified Reviews from Satisfied Customers
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 sm:text-xl md:text-2xl">
            Discover all information about your influencer or brand.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 flex w-full items-center rounded-lg bg-white shadow-lg pe-2">
            <Input
              type="text"
              placeholder="Search destinations, hotels, and more..."
              className="flex-1 rounded-l-md border-none px-6 py-4 text-lg focus:ring-0"
              onChange={(e: any) => setText(e.target.value)}
              value={text}
            />
            <Button
              type="submit"
              className="rounded-r-md bg-primary px-6 py-4 text-lg font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Search
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}