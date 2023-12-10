import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { File, MoreVertical } from "lucide-react";
import Link from "next/link";

interface FileListProps {
    name: string;
    url: string;
}

const FileList = ({
    name,
    url
}: FileListProps) => {
    return ( 
        <>
           <Link href={url} target="_blank">
                <Card>
                    <CardHeader
                        className="flex items-center justify-center bg-gray-300 rounded-md"
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
                </Card>
           </Link>
        </>
     );
}
 
export default FileList
