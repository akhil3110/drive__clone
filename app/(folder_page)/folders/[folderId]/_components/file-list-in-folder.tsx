"use client";

import FileList from "@/components/file-list";
import { shortenString } from "@/lib/shorten-string";
import axios from "axios";
import { useEffect, useState } from "react";


interface FileListInFolderProps {
    folderId: string;
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

const FileListInFolder = ({
    folderId
}: FileListInFolderProps) => {

    const [files, setFiles] = useState<any[]>([]);
    useEffect(() =>{
        const getFiles = async () =>{
            const res = await axios.post("/api/files/folderpage", {folderId})
            console.log("res",res)
            setFiles(res.data)
        }

        getFiles()
    },[])

    return ( 
        <>
            <div className="mt-5">
                <div className="flex gap-4 ">
                    {files.map((file: File) => (
                        <div key={file.id}>
                            <div>
                                <FileList
                                    id = {file.id} 
                                    name={shortenString(file.name, 10)}
                                    url={file.url}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
     );
}
 
export default FileListInFolder;