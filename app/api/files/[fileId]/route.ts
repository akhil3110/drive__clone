import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";


export async function DELETE(
    req: Request,
    {params}: {params: {fileId: string}}
){
    try {
        const {userId} = auth();

        if(!userId){
            return new NextResponse("UnAuthorized User",{status: 401})
        }

        const DeletedFile = await db.file.delete({
            where:{
                id: params.fileId,
                userId
            }
        })

        if(!DeletedFile){
            return new NextResponse("File Not Found",{status: 404})
        }

        return NextResponse.json(DeletedFile,{status: 200})
    } catch (error) {
        return new NextResponse("Something Went Wrong",{status: 500})  
    }
}

export async function PUT(
    req: Request,
    {params}: {params: {fileId: string}}
){

    try {

        const {userId} = auth();

        if(!userId){
            return new NextResponse("UnAuthorized User",{status: 401})
        }

        const {name} =  await req.json()

        console.log("NAME: ",name)
        const UpdatedFile = await db.file.update({
            where:{
                id: params.fileId,
                userId
            },
            data:{
                name
            }
        })

        if(!UpdatedFile){
            return new NextResponse("File Not Found",{status: 404})
        }

        return NextResponse.json(UpdatedFile,{status: 200})
        
    } catch (error) {
        console.log("FILE UPDATE ERROR: ",error)
        return new NextResponse("Something Went Wrong",{status: 500})
    }

}