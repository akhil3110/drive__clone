"use client";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface DeleteFolderProps {
    folderId: string
}

const DeleteFolder = ({
    folderId
}: DeleteFolderProps) => {

    const router = useRouter();

    const onDelete = async () => {
        try {
            const config = {
                data: {
                    id: folderId
                }
            }
            const res = await axios.delete("/api/folder", config)
            toast.success("Folder deleted successfully!");
            router.push("/");
        } catch (error) {
            console.log("Delete_FOlder_Button ",error);
            toast.error("Something went wrong!");
        }
    }
    return ( 
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button 
                        variant="destructive"
                        className="flex gap-x-2"
                    >   
                        Delete Folder
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Delete Folder</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                        Are you sure you want to delete this folder?
                    </DialogDescription>
                    <DialogFooter className="sm:justify-end">
                    <DialogClose asChild>
                        <Button type="button">
                            Close
                        </Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button
                            variant={"destructive"}
                            onClick={onDelete}
                        >   
                            Delete
                        </Button>
                    </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
     );
}
 
export default DeleteFolder;