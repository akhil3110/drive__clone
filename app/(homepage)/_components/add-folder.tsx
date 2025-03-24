"use client";

import { Button } from "@/components/ui/button"
import { useForm, SubmitHandler } from "react-hook-form"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { PlusCircle } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input"
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Inputs = {
    folder_name: string,
}


const AddFolder = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>()

      const router = useRouter()

      const [isEditing, setIsEditing] = useState(false)
      
      const onSubmit: SubmitHandler<Inputs> = async(data) =>{
        try {
            setIsEditing(true)
            const res = await axios.post("/api/folder", data).then()
            toast.success("Folder Created")
            router.push("/folders/"+ res.data.id)
            setIsEditing(false)
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong")
        }
      }


    return ( 
        <>
            <Dialog>
                <DialogTrigger>
                    <Button className="flex gap-x-1 bg-[#3b82f6] text-[#f8fafc] hover:bg-[#2563eb] border-solid  hover:border-[#2563eb]">
                        <PlusCircle />
                        Add Folder
                    </Button>
                </DialogTrigger>
                <DialogContent
                    className=" bg-sky-400"
                >
                    <DialogHeader>
                        <DialogTitle
                            className="font-bold"
                        >
                            Add Folder
                        </DialogTitle>
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
                            <Button 
                                disabled={isEditing}
                                type="submit" 
                                size="sm" 
                                className="px-3"
                            >
                                Submit
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>  
        </>
     );
}
 
export default AddFolder;