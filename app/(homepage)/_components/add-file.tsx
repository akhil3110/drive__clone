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
                        className="flex gap-x-1"
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