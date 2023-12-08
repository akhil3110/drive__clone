import { auth } from "@clerk/nextjs";
import { createUploadthing, type FileRouter } from "uploadthing/next";
 
const f = createUploadthing();

const handleAuth = () =>{
    // handle auth
    const {userId} = auth();
    if(!userId){
        throw new Error("Not authenticated");
    }
    return {userId};
}

export const ourFileRouter = {

    fileUpload: f(["text", "image", "video", "audio", "pdf"])
        .middleware(() => handleAuth())
        .onUploadComplete(() => {}),

} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;