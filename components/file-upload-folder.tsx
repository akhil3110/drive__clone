"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import toast from "react-hot-toast";    
import axios from "axios";

interface FileUploadFolderProps {
    endPoint: keyof OurFileRouter;
    folderId: string;
}

const FileUploadFolder = ({
    endPoint,
    folderId,
}: FileUploadFolderProps) => {

    const submit = async (data : {
        name: string;
        url: string;
        folderId: string;
    }) => {
        const response = await axios.post("/api/upload_file_folder", data);
        toast.success("File Uploaded");
    };

    return ( 
        <UploadDropzone 
            endpoint="fileUpload"
            onClientUploadComplete={(res)=>{
                console.log(res);
                submit({
                    name: res[0].name,
                    url: res[0].url,
                    folderId: folderId,
                });
            }} 
            onUploadError={(err: Error)=>{
                console.log(err);
                toast.error("File Upload Failed");
            }}

        />
     );
}
 
export default FileUploadFolder;