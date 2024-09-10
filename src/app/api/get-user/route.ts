import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    
    const {username} = await request.json();

    const url = `https://instagram-profile1.p.rapidapi.com/getprofile/${username}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'your-api-key',
            'x-rapidapi-host': 'instagram-profile1.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return Response.json({"userData": result}, {status: 200});
    } catch (error) {
        console.error(error);
        return Response.json({"userData": "not found"}, {status: 404});
    }

}