"use client"

import { ArrowLeft, ArrowLeftSquare } from "lucide-react";
import FolderList from "./_components/folder-list";
import { useRouter } from "next/navigation";


const Folders = () => {

    const router = useRouter()

    return ( 
        <div className="mt-5">
            <div className="flex text-2xl font-extrabold text-slate-200 gap-3">
                <ArrowLeft 
                    className="h-8  font-bold cursor-pointer"
                    onClick={()=>{
                        router.push("/")
                    }}
                />
                <h1 className=" ">Folders</h1>
            </div>
            <div>
                <FolderList/>
            </div>
        </div>
     );
}
 
export default Folders;