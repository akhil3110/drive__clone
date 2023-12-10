"use client"

import { ArrowLeft, ArrowLeftSquare, MoveLeft } from "lucide-react";
import FolderList from "../../../components/folder-list";
import { useRouter } from "next/navigation";


const Folders = () => {

    const router = useRouter()

    return ( 
        <div className="mt-5">
            <div 
                className="flex text-2xl font-semibold text-slate-200 gap-3 cursor-pointer"
                onClick={()=>{
                    router.push("/")
                }}
            >
                <MoveLeft 
                    className="h-8  font-bold"
                />
                <h1 className=" ">Go Back</h1>
            </div>
            <div className=" mx-5">
                <FolderList/>
            </div>
        </div>
     );
}
 
export default Folders;