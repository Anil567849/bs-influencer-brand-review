import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"
import React from "react"

export default function Profile({data, modal}: {data: any, modal: React.ReactElement}) {
  return (
    <div className="w-[40vw] max-w-3xl py-8 px-4 md:px-6">
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-start gap-4">
          <Avatar className="w-20 h-20 border-4 mt-2 border-primary">
            <Image src={data.profile_pic_url} alt="img" className="opacity-100" width={100} height={100}/>
          </Avatar>
          <div className="grid gap-2">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold">{data.username}</h2>
              {modal}
            </div>
            <div className="flex flex-col items-start gap-4">
              <p>{data.full_name}</p>
              <pre>{data.bio}</pre>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <span className="font-medium">{data.media_count}</span> posts
              </div>
              <div className="flex items-center gap-1">
                <span className="font-medium">{data.followers}</span> followers
              </div>
              <div className="flex items-center gap-1">
                <span className="font-medium">{data.following}</span> following
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}