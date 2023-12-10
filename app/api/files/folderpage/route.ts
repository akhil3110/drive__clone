import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
    req: Request,
){

    try {
        const {userId} = auth();

        const {folderId} = await req.json();
        

        if(!userId){
            return new NextResponse("Unauthorized", {status: 401});
        }

        const data  =  await db.file.findMany({
            where:{
                folderId,
                userId,
            },
            orderBy:{
                createdAt: "desc",
            }
        })

        return NextResponse.json(data);
    } catch (error) {
        console.log("UPLOAD_FILE_BACKEND",error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}