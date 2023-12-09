"use client";

import { Button } from "@/components/ui/button";
import { Pen } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { redirect, useRouter } from "next/navigation";
import { DialogClose } from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { PrismaClient } from "@prisma/client";
import { db } from "@/lib/db";

type Inputs = {
    folder_name: string,
}

interface EditFolderProps {
    folderId: string;
}


const EditFolder = ({
    folderId
}: EditFolderProps) => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>()

      const router = useRouter();
  

      const onSubmit: SubmitHandler<Inputs> = async(data) =>{
        try {
            const details = {
                folder_name: data.folder_name,
                id: folderId
            }
            const res = await axios.put("/api/folder", details)
            toast.success("Folder Name Updated")
            router.refresh();   
        } catch (error) {
            toast.error("Something went wrong")
        }
      }

    return ( 
        <>
            <Dialog>
                <DialogTrigger>
                    <Button
                        className="flex gap-x-2"
                    >   
                    Edit Folder Name
                </Button>
                </DialogTrigger>
                <DialogContent>
                <DialogHeader
                    className="font-bold"
                >
                    Enter New Folder Name
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex items-center space-x-2">
                            <div className="grid flex-1 gap-2">
                                <Label htmlFor="link" className="sr-only">
                                    Folder Name
                                </Label>
                                <Input
                                    required
                                    {...register("folder_name")}
                                />
                            </div>
                            <DialogClose>
                                <Button type="submit" size="sm" className="px-3">
                                    Submit
                                </Button>
                            </DialogClose>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </>
     );
}
 
export default EditFolder;