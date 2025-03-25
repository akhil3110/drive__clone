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
    const [shortenLength, setShortenLength] = useState(20);
    useEffect(() =>{
        const getFiles = async () =>{
            const res = await axios.post("/api/files/folderpage", {folderId})
            console.log("res",res)
            setFiles(res.data)
        }

        getFiles()
    },[])

    useEffect(() => {
            const handleResize = () => {
                if (window.innerWidth < 1024) { // md breakpoint ~768px, lg ~1024px
                    setShortenLength(10);
                } else {
                    setShortenLength(20);
                }
            };
        
            // Call on mount
            handleResize();
        
            // Listen for resize
            window.addEventListener("resize", handleResize);
        
            return () => window.removeEventListener("resize", handleResize);
        }, []);

    return ( 
        <>
            <div className="mt-5 mb-10">
                <div className="grid grid-cols-4 gap-4 ">
                    {files.map((file: File) => (
                        <div key={file.id} className="col-span-4 sm:col-span-2 md:col-span-1">
                            <div>
                                <FileList
                                    id = {file.id} 
                                    name={shortenString(file.name, shortenLength)}
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