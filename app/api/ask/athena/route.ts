import { NextResponse } from "next/server";
import axios from 'axios';

const backendUrl = 'https://api.motionukict.com';

export async function POST(request : Request){

    try {
        const body = await request.json();
        const { question, history, top_k } = body;

        const payload = {
            question: question, 
            history : history || "",
            top_k: top_k || 5
        };

        const res = await axios.post(
            `${backendUrl}/api/v1/rag/questions/athena`, 
            payload, 
            {
                headers : {
                    'x-motionu-key' : process.env.MOTIONU_API_KEY,
                    'Content-Type': 'application/json'
                }
            }
        );

        return NextResponse.json({ answer: res.data.answer }, { status: 201 });

    } catch(err : any) {
        console.error("API Error:", err.response?.data || err.message);

        return NextResponse.json(
            { error: "Failed to fetch response from Athena" }, 
            { status: err.response?.status || 500 }
        );
    }
}