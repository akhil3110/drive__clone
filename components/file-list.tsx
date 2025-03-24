import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { File, MoreVertical } from "lucide-react";
import Link from "next/link";
import DeleteFile from "./delte-file";
import EditFile from "./edit-file";

interface FileListProps {
    id: string;
    name: string;
    url: string;
}

const FileList = ({
    id,
    name,
    url
}: FileListProps) => {
    return ( 
        <>
           
                    <Card className="bg-[#1f2937] border border-slate-700 text-slate-50 shadow-lg">
                    <div
                        className="flex absolute cursor-pointer h-8 w-8"
                    >
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                    <MoreVertical size={25} />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <EditFile
                                    id={id}
                                    name={name}
                                />
                                <DropdownMenuSeparator />
                                <DeleteFile 
                                    id={id}
                                />
                        </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <Link href={url} target="_blank">
                    <CardHeader
                        className="flex items-center justify-center bg-gray-600 rounded-md border border-slate-700"
                    >
                        <File size={45} />
                    </CardHeader>
                    <CardContent
                        className="mt-2"
                    >
                        <CardTitle>
                            <div className="flex">
                                <div>
                                    {name}
                                </div>
                            </div>
                        </CardTitle>
                        <CardDescription>Click to view</CardDescription>
                    </CardContent>
                    </Link>
                </Card>
        </>
     );
}
 
export default FileList
