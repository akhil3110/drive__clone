import { UserButton } from "@clerk/nextjs";
import { PackageOpen } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
    return ( 
        <>
            <div className="w-full bg-[#F86F03] rounded-md">
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
                            className=" mr-5 text-white text-xl font-extrabold hover:text-sky-500"
                            href="/folders"
                        >
                                <Button>
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