import { db } from "@/lib/db";
import { MoveLeft, Pen, PlusCircle, Trash } from "lucide-react";
import { redirect } from "next/navigation";
import DeleteFolder from "./_components/delete-folder";
import EditFolder from "./_components/edit-folder";
import AddFileInFolder from "./_components/add-file-in-folder";
import Link from "next/link";
import FileListInFolder from "./_components/file-list-in-folder";
import { useInitializeFilesInFolder } from "@/store/file-in-folder-store";



const FolderId = async({
    params
}:{
    params: {folderId: string}
}) => {
    const folderExist = await db.folder.findUnique({
        where: {
            id: params.folderId
        }
    })

    if(!folderExist){
        return redirect("/");
    }

    return (

        <div className="mt-5 mx-8">
            <div className="flex text-white text-2xl font-extrabold gap-x-4 ">
                <Link href="/">
                    <MoveLeft 
                        className=" h-8"
                    />
                </Link>
                <h2>
                    {folderExist.folder_name}
                </h2>
            </div>
            <div className="flex flex-col md:flex-row justify-between mt-4">
                <div className="mb-2">
                    <AddFileInFolder 
                        folderId={params.folderId}
                    />
                </div>
                <div className="flex gap-x-3">
                    <EditFolder 
                        folderId={params.folderId}
                    />
                    <DeleteFolder 
                        folderId={params.folderId}
                    />
                </div>
            </div>
            <div>
                <FileListInFolder
                    folderId={params.folderId}
                />
            </div>
        </div>
     );
}
 
export default FolderId
