import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"

export async function GET(
    req: Request
){
    try {
        
        const {userId} = auth();

        if(!userId){
            return new NextResponse("Unauthorized", { status: 401 })
        }

        

        const files = await db.file.findMany({
            where:{
                userId,
                folderId:null
            },
            orderBy:{
                createdAt:"desc"
            }
            
        })

        return NextResponse.json(files)

    } catch (error) {
        console.log("FILE_GET_BACKEND",error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}