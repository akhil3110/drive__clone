import AddFile from './_components/add-file';
import AddFolder from './_components/add-folder';
import FileListHomePage from './_components/file-list-homepage';
import { Separator } from '@/components/ui/separator';
import FolderList from '../../components/folder-list';

export default function Home() {
  return (
    <>
      <div className='mt-7'>
        <div className='flex gap-x-3'>
          <AddFile />
          <AddFolder />
        </div>
        <div className='mt-5'>
          <FileListHomePage/>
          <Separator  className=' mt-5' />
          <FolderList />
        </div>
      </div>
    </>
  )
}
