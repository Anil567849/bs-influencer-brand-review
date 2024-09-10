
import { Card } from "@/components/ui/card"
import { Image } from "@nextui-org/react"

export default function Component({review}: {review: any}) {

    const s = Math.round(parseFloat(review.star));

    let temp = [];
    for(let i = 0; i < 5; i++){
        if(i < s){
            temp.push(<StarIcon className="w-4 h-4 fill-primary" />);
        }else{
            temp.push(<StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />);
        }
    }

  return (
    <Card className="w-full max-w-sm p-6 grid gap-6 shadow-lg">
      <div className="flex items-center gap-4">
        <div className="bg-muted rounded-lg flex items-center justify-center aspect-square w-12">
          <Image src="https://images.unsplash.com/photo-1620632523414-054c7bea12ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZ298ZW58MHx8MHx8fDA%3D" alt="pic" height={40} width={40} className="opacity-100" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">{review.username}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
                {
                    temp.map((val, ind) => {
                        return <div key={ind}>{val}</div>
                    })
                }
            </div>
            <span>{review.star}</span>
          </div>
        </div>
      </div>
      <p className="text-muted-foreground">{review.review}</p>
    </Card>
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
      stroke="green"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}