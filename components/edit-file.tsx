"use client";

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Button } from "./ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { SubmitHandler, useForm} from "react-hook-form";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { DropdownMenuLabel } from "./ui/dropdown-menu";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useState } from "react";

interface EditFileProps {
    id: string;
    name: string;
}

type Inputs = {
    name: string,
}


const EditFile = ({
    id,
    name
}: EditFileProps) => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>()

      const [isEdditing, setIsEdditing] = useState(false);

    const router = useRouter();

    const onSubmit: SubmitHandler<Inputs> = async(data) =>{
        try {
            setIsEdditing(true);
            const res = await axios.put(`/api/files/${id}`, data);
            toast.success("File renamed successfully");
            setIsEdditing(false);
            window.location.reload();
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
      }

      
    return ( 
        <AlertDialog>
        <AlertDialogTrigger asChild>
            <DropdownMenuLabel
                className="cursor-pointer"
            > 
                Rename
            </DropdownMenuLabel>
        </AlertDialogTrigger>
                <AlertDialogContent>
                <AlertDialogHeader
                    className="font-bold"
                >
                    Enter New Folder Name
                </AlertDialogHeader>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex items-center space-x-2">
                            <div className="grid flex-1 gap-2">
                                <Label htmlFor="link" className="sr-only">
                                    Folder Name
                                </Label>
                                <Input
                                    required
                                    {...register("name")}
                                    className=" border-gray-600"
                                />
                                 <Button 
                                    disabled={isEdditing}
                                    type="submit" 
                                    className="px-3"
                                >
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </form>
                    <AlertDialogCancel className="border-gray-900">
                        Cancel
                    </AlertDialogCancel>
                </AlertDialogContent>
            </AlertDialog>
     );
}
 
export default EditFile;
