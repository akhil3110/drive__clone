import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"

export async function POST(
    req: Request,
){
    try {

        const {userId} = auth()

        const {
            name,
            url,
            folderId
        } = await req.json()
    
        if(!name || !url || !userId || !folderId){
           return new NextResponse("Unauthorized", { status: 401 })
        }
    
        const file_details = await db.file.create({
            data:{
                name,
                url,
                userId,
                folderId
            }
        })
    
        return NextResponse.json(file_details)
        
    } catch (error) {
        console.log("UPLOAD_FILE_BACKEND",error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}