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

export async function GET(
    req: Request
){

    try {
        const {userId} = auth();

        if(!userId){
            return new NextResponse("Unauthorized", { status: 401 })
        }

        const  data =  await db.folder.findMany({
            where:{
                userId
            },
            orderBy:{
                createdAt:"desc"
            }
        })

        return NextResponse.json(data)    
    } catch (error) {
        console.log("FOLDER_GET_BACKEND",error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
    
}

export async function PUT(
    req: Request
){
    const {userId} = auth();

    if(!userId){
        return new NextResponse("Unauthorized", { status: 401 })
    }

    const {
        id,
        folder_name
    } = await req.json();

    const UpdatedData = await db.folder.update({
        where:{
            id:id
        },
        data:{
            folder_name
        }
    })

    return NextResponse.json(UpdatedData)
}

export async function DELETE(
    req: Request
){
    try {
        const {userId} = auth();

        if(!userId){
            return new NextResponse("Unauthorized", { status: 401 })
        }

        const {
            id
        } = await req.json();

        const DeletedData = await db.folder.delete({
            where:{
                id
            }
        })

        return NextResponse.json(DeletedData)
    } catch (error) {
        console.log("FOLDER_DELETE_BACKEND",error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}