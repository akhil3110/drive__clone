
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { 
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator
} from "./ui/dropdown-menu";

interface DeleteFileProps {
    id: string;
}

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import toast from "react-hot-toast";
import { redirect, useRouter } from "next/navigation";
import axios from "axios";


const DeleteFile = ({
    id
}: DeleteFileProps) => {

    const router = useRouter();

    const submit = async (id: string) => {
        try {
            const response = await axios.delete(`/api/files/${id}`);
            toast.success("File deleted successfully");
            window.location.reload();
        } catch (error) {
            toast.error("Something went wrong");
            console.log("DELETE_FILE",error);
        }
    }

    return (
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <DropdownMenuLabel
                            className="cursor-pointer"
                        > Delete </DropdownMenuLabel>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This will permanently delete the file. There is no undo.
                        </AlertDialogDescription>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                                className="bg-red-500 hover:bg-red-600"
                                onClick={() => {
                                    submit(id);
                                }}
                            >
                                Delete
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
    );
}
 
export default DeleteFile;