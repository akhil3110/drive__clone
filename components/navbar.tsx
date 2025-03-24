import { UserButton } from "@clerk/nextjs";
import { PackageOpen } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
    return ( 
        <>
            <div className="w-full bg-[#0f172a] rounded-b-md">
                <div className="flex justify-between p-3">
                    <Link href="/">
                        <div className="flex text-white text-3xl font-extrabold gap-x-1">
                            <PackageOpen 
                                className=" h-9 w-10"
                            />
                            <h2 className="">
                                Drive
                            </h2>
                        </div>
                    </Link>
                    <div className="flex mr-5">
                        <Link 
                            className=" mr-5 text-white text-xl font-extrabol"
                            href="/folders"
                        >
                                <Button className="bg-slate-700 hover:bg-indigo-600">
                                    Folders
                                </Button>
                        </Link>
                        <div>
                            <UserButton />
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Navbar;