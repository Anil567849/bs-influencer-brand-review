import { NextRequest } from "next/server";

export async function POST(request: NextRequest){
    const {name, review, star} = await request.json();
    try {
        // Todo: Save in Database 


        return Response.json({"data" : "added"}, {status: 200});
    } catch (error) {
        return Response.json({"data" : "error"}, {status: 401});
    }
}