"use client"

import axios from "axios";
import { FolderDot, MoreVertical, Pencil, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
    DropdownMenuItem
  } from "@/components/ui/dropdown-menu"

  import { useForm, SubmitHandler } from "react-hook-form"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { shortenString } from "@/lib/shorten-string";
import useFolderStore from "@/store/folder-store";


type folderType = {
    id: string,
    folder_name: string,
    userId: string
}



const FolderList = () => {

    const router = useRouter()
    const {folders} = useFolderStore()



    return ( 
        <>
        <div className="flex justify-between items-center mt-5">
                <h1 className="text-3xl text-white font-bold">Folders</h1>
        </div>
        <div className="flex gap-3 mt-5">
           {folders.map((folder)=>(
                <div key={folder.id}>
                    <div 
                        className=" h-36 w-100 border cursor-pointer bg-slate-900 border-slate-400 hover:bg-slate-800 rounded-xl" 
                    >
                        <div 
                              onClick={()=>{
                                router.push(`/folders/${folder.id}`)
                            }}
                        >
                            <FolderDot className="mt-2 h-24 w-36 text-slate-50 "/>
                            <div className="flex justify-center">
                                <h3 className=" text-lg font-bold text-slate-100">
                                    {shortenString(folder.folder_name,10)}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            ))}    
        </div>
        </>
     );
}
 
export default FolderList;
