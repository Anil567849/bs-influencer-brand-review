'use client'
import { useState } from "react";
import Card from "../user/[username]/com/Profile";
import Review from "../user/[username]/com/Review";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Hero from "../user/[username]/com/Hero";


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

const reviews = [
  {
    username: "Anil",
    review: "He is a very good influencer. Working with him is a great opportunity for us. We also worked with many influencers but he is amazing and amazing. Highly recommended.",
    star: "4.9"
  },
  {
    username: "Priya",
    review: "Fantastic experience! Very professional and delivered exactly what was promised. Definitely worth the investment.",
    star: "5.0"
  },
  {
    username: "Ravi",
    review: "An exceptional influencer with a keen understanding of the market. His insights and strategies have helped us reach new audiences.",
    star: "4.8"
  },
  {
    username: "Sanya",
    review: "Very pleased with the results. The collaboration was smooth, and the campaign exceeded our expectations. Will work together again!",
    star: "2.7"
  },
  {
    username: "Arjun",
    review: "A true professional who brings creativity and dedication to the table. Highly effective and great to work with.",
    star: "4.9"
  },
  {
    username: "Meera",
    review: "Absolutely fantastic work! The engagement and reach were beyond what we anticipated. Highly recommended for impactful collaborations.",
    star: "5.0"
  },
  {
    username: "Karan",
    review: "Great results and very professional. The campaign was well-executed, and the communication was excellent throughout.",
    star: "4.8"
  },
  {
    username: "Nisha",
    review: "Exceptional quality and creativity. He managed to captivate our target audience and deliver outstanding results.",
    star: "4.9"
  },
  {
    username: "Vikram",
    review: "Highly impressed with the work. The influencer demonstrated a deep understanding of our brand and delivered an impactful campaign.",
    star: "4.7"
  }
];


export default function Home() {
  const [data, setData] = useState(sample);

  async function testFetch(){
    const url = `http://localhost:3000/api/get-user`;

    try {
      const res = await fetch(url);
      const result = await res.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <main className="flex flex-col items-center justify-start">
      <Hero />    
    </main>
  )


}
