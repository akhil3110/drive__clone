import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

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
import FileUploadFolder from "@/components/file-upload-folder";

interface AddFileInFolderProps {
    folderId: string;
}

const AddFileInFolder = ({
    folderId
}: AddFileInFolderProps) => {
    return ( 
        <>
            <Dialog>
                <DialogTrigger>
                    <Button className="flex gap-x-1">
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
                           <FileUploadFolder 
                                endPoint="fileUpload"
                                folderId={folderId}
                            />
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="sm:justify-end">
                        <DialogClose>
                            <Button>
                                Close
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
     );
}
 
export default AddFileInFolder;