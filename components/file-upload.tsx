"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import toast from "react-hot-toast";    
import axios from "axios";
import useFileStore from "@/store/file-store";
import { getFiles } from "@/lib/getInitialFiles";


interface FileUploadProps {
    endPoint: keyof OurFileRouter;
}

const FileUpload = ({
}: FileUploadProps) => {

    const {  setFiles } = useFileStore()

    const submit = async (data : {
        name: string;
        url: string;
    }) => {
        const response = await axios.post("/api/upload_file", data);
        toast.success("File Uploaded");
        setFiles(await getFiles())
    };

    return ( 
        <UploadDropzone 
            endpoint="fileUpload"
            onClientUploadComplete={(res)=>{
                console.log(res);
                submit({
                    name: res[0].name,
                    url: res[0].url,
                });
            }} 
            onUploadError={(err: Error)=>{
                console.log(err);
                toast.error("File Upload Failed");
            }}

        />
     );
}
 
export default FileUpload;