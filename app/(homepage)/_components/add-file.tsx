import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
  } from "@/components/ui/dialog"
import FileUpload from "@/components/file-upload";
  

const AddFile = () => {


    return ( 
        <>
            <Dialog>
                <DialogTrigger>
                    <Button
                        className="flex gap-x-1 bg-[#3b82f6] text-[#f8fafc] hover:bg-[#2563eb] border-solid  hover:border-[#2563eb]"
                    >
                        <PlusCircle/>
                        Add File
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            Add File
                        </DialogTitle>
                        <DialogDescription>
                           <FileUpload 
                                endPoint="fileUpload"
                            />
                        </DialogDescription>
                    </DialogHeader>
                    <DialogClose>
                    <Button>
                        Close
                    </Button>
                </DialogClose>
                </DialogContent>
            </Dialog>
        </>
     );
}
 
export default AddFile;