import Image from 'next/image'
import { UserButton } from "@clerk/nextjs";
import AddFile from './_components/add-file';
import AddFolder from './_components/add-folder';

export default function Home() {
  return (
    <>
      <div className='mt-7'>
        <div className='flex gap-x-3'>
          <AddFile />
          <AddFolder />
        </div>
      </div>
    </>
  )
}
