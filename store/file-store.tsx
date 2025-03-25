import { getFiles } from "@/lib/getInitialFiles";
import { create } from "zustand";
import { useEffect } from "react";

interface FileType {
    id: string;
    folderId: string | null;
    name: string;
    userId: string;
    url: string;
    updatedAt: string;
    createdAt: string;
}

interface FileStore {
    files: FileType[];
    setFiles: (newFiles: FileType[]) => void;
}

const useFileStore = create<FileStore>((set) => ({
    files: [], // Initialize with an empty array
    setFiles: (newFiles) => set({ files: newFiles }),
}));

export const useInitializeFiles = () => {
    const setFiles = useFileStore((state) => state.setFiles);

    useEffect(() => {
        const fetchFiles = async () => {
            const data = await getFiles();
            setFiles(data);
        };

        fetchFiles();
    }, [setFiles]);
};

export default useFileStore;
