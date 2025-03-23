"use client";

import FileList from "@/components/file-list";
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
    const [shortenLength, setShortenLength] = useState(20);

    const data = {
        folderId
    }

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

    useEffect(() => {
        const getFiles = async () => {
            const response = await axios.get("/api/files/homepage");
            setFiles(response.data);
        }

        getFiles();
    },[])

    return ( 
        <>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl text-white font-bold">Files</h1>
            </div>
            {files.length === 0 ? (
                <>
                    <div className="flex flex-col justify-center items-center h-40">
                        <h1 className="text-2xl text-slate-300 font-bold">No files found</h1>
                        <h2 className="text-slate-300">Please Add file</h2>
                    </div>
                </>
            ):(
                <div className="w-full">
                    <div className="mt-5 grid grid-cols-4 gap-10">
                        {files.map((file)=>(
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
            )}
        </>
     );
}
 
export default FileListHomePage;