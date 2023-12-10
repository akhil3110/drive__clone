"use client";

import FileList from "@/components/file-list";
import { Separator } from "@/components/ui/separator";
import { shortenString } from "@/lib/shorten-string";
import axios from "axios";
import { useEffect, useState } from "react";



interface FileListProps {
    folderId?: string | null;
}


interface File {
    id: string;
    name: string;
    url: string;
    userId: string;
    folderId: string | null;  
    createdAt: string;
    updatedAt: string;
}

const FileListHomePage = ({
    folderId
}: FileListProps) => {

    const [files, setFiles] = useState<File[]>([]);

    const data = {
        folderId
    }

    useEffect(() => {
        const getFiles = async () => {
            console.log("folderId", folderId)
            console.log("data", data)
            const response = await axios.get("/api/files/homepage");
            setFiles(response.data);
        }

        getFiles();
    },[])

    return ( 
        <>
            <div className="flex justify-between items-center ">
                <h1 className="text-3xl text-white font-bold">Files</h1>
            </div>
            <div className="flex gap-2 mt-5">
            {files.map((file)=>(
                <div key={file.id}>
                    <div >
                        <FileList 
                            name={shortenString(file.name, 10)}
                            url={file.url}
                        />
                    </div>
                </div>
            ))}
            </div>   
        </>
     );
}
 
export default FileListHomePage;