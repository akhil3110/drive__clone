import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
    req: Request,
){

    try {
        const {userId} = auth();

        const {
            folder_name
        } = await req.json();
    
        if(!folder_name || !userId){
            return new NextResponse("Unauthorized", { status: 401 })
        }
    
        const data = await db.folder.create({
            data:{
                folder_name,
                userId
            }
        })
    
        return NextResponse.json(data)
    } catch (error) {
        console.log("FOLDER_CREATED_BACKEND",error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
   
}