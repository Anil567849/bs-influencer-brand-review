'use client'
import { useEffect, useState } from "react";
import Card from "./com/Profile";
import Review from "./com/Review";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"


declare global {
  interface Window {
    Razorpay: any;
  }
}

const sample = {
  "id": "61528354735",
  "fbid": "61528354735",
  "username": "spokupai",
  "full_name": "English Speaking",
  "bio": "💼 official ac @english_sikho_ak\n🔥 Spoken English Practice\n🌟 Complete English in 𝟔𝟎 𝐏𝐨𝐬𝐭𝐬\n📚 Daily use vocab & sentences\n•\n👇 Practice Free English👇",
  "followers": 251,
  "following": 964,
  "is_private": false,
  "is_verified": false,
  "profile_pic_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-19/396181866_2266505863547899_5327502686144421469_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=107&_nc_ohc=QQtvPwrCc5wQ7kNvgEKcwmg&_nc_gid=c738b61a11f84c05b225398213af0096&edm=AEF8tYYBAAAA&ccb=7-5&oh=00_AYDMNNVpq07ToLs5Xy0TXoS124Cmqk_48Hz4sBNBxs7DPw&oe=66E46A76&_nc_sid=1e20d2",
  "profile_pic_url_proxy": "https://prx.naratetama.com/v1/?t=MzQ1MTczNDk1ODYwMA==&q=https://scontent-lga3-2.cdninstagram.com/v/t51.2885-19/396181866_2266505863547899_5327502686144421469_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=107&_nc_ohc=QQtvPwrCc5wQ7kNvgEKcwmg&_nc_gid=c738b61a11f84c05b225398213af0096&edm=AEF8tYYBAAAA&ccb=7-5&oh=00_AYDMNNVpq07ToLs5Xy0TXoS124Cmqk_48Hz4sBNBxs7DPw&oe=66E46A76&_nc_sid=1e20d2",
  "profile_pic_url_hd": "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-19/396181866_2266505863547899_5327502686144421469_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=107&_nc_ohc=QQtvPwrCc5wQ7kNvgEKcwmg&_nc_gid=c738b61a11f84c05b225398213af0096&edm=AEF8tYYBAAAA&ccb=7-5&oh=00_AYDMNNVpq07ToLs5Xy0TXoS124Cmqk_48Hz4sBNBxs7DPw&oe=66E46A76&_nc_sid=1e20d2",
  "profile_pic_url_hd_proxy": "https://prx.naratetama.com/v1/?t=MzQ1MTczNDk1ODYwMA==&q=https://scontent-lga3-2.cdninstagram.com/v/t51.2885-19/396181866_2266505863547899_5327502686144421469_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=107&_nc_ohc=QQtvPwrCc5wQ7kNvgEKcwmg&_nc_gid=c738b61a11f84c05b225398213af0096&edm=AEF8tYYBAAAA&ccb=7-5&oh=00_AYDMNNVpq07ToLs5Xy0TXoS124Cmqk_48Hz4sBNBxs7DPw&oe=66E46A76&_nc_sid=1e20d2",
  "media_count": 276,
}

export default function Home({params}: {params: {username: string}}) {

  const [data, setData] = useState(sample);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchUser();
    fetchReviews();
  }, [])
  

  async function fetchUser(){
    setData(sample);
    return;
    const url = `http://localhost:3000/api/get-user`;

    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({username: params.username})
      });
      const result = await res.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.log(error);
    }

  }

  async function fetchReviews(){
    const url = `http://localhost:3000/api/get-reviews`;

    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({username: params.username})
      });
      const {data} = await res.json();
      setReviews(data);
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <main className="flex flex-col items-center justify-start">
      <Card data={data} modal={<Modal />}/>

      <div className="grid grid-cols-3 gap-4">
        {
          reviews.map((r, ind) => {
            return <Review key={ind} review={r} />
          })
        }
      </div>
      
    </main>
  )

}

export function Modal() {

  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [star, setStar] = useState(0);
  const [temp, setTemp] = useState<JSX.Element[]>([]);

  function handleStar(num: number){
    setStar(num);
  }

  useEffect(() => {
    setTemp([]);
    for(let i = 1; i <= 5; i++){
      if(i <= star){
        setTemp((prev) => {
          return [...prev, <StarIcon onClick={() => handleStar(i)} className="cursor-pointer w-5 h-5 fill-primary" />]
        })
      }else{  
        setTemp((prev) => {
          return [...prev, <StarIcon onClick={() => handleStar(i)} className="cursor-pointer w-5 h-5 fill-muted stroke-muted-foreground" />]
        })
      }
    }
    
  }, [star])
  
  async function handleSubmit() {
    const res = await fetch('http://localhost:3000/api/add-review', {
      method: "POST",
      body: JSON.stringify({name, review, star})
    })

    const {data} = await res.json();
    alert(data);
    setName("");
    setReview("");
    setStar(0);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Write a Review</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Write a Review</DialogTitle>
          <DialogDescription>Share your thoughts on the product.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" placeholder="Enter your name" className="col-span-3" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="review" className="text-right">
              Review
            </Label>
            <Textarea id="review" placeholder="Write your review" className="col-span-3" value={review} onChange={(e) => setReview(e.target.value)}/>
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="rating" className="text-right">
              Rating
            </Label>
            <div className="col-span-3 flex items-center gap-2">
              {
                temp.map((item: any, ind: number) => {
                  return <div key={ind}>{item}</div>
                })
              }
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit}>Submit Review</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )

}
  
function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}