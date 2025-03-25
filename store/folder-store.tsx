import { create } from "zustand";
import { useEffect } from "react";
import { getFolders } from "@/lib/getFolders";

interface FolderType {
    id: string;
    folder_name: string;
    userId: string;
    updatedAt: string;
    createdAt: string;
}

interface FileStore {
    folders: FolderType[];
    setFolders: (newFolders: FolderType[]) => void;
}

const useFolderStore = create<FileStore>((set) => ({
    folders: [], // Initialize with an empty array
    setFolders: (newFolders) => set({ folders: newFolders }),
}));

export const useInitializeFolders = () => {
    const setFolders = useFolderStore((state) => state.setFolders);

    useEffect(() => {
        const fetchFiles = async () => {
            const data = await getFolders();
            setFolders(data);
        };

        fetchFiles();
    }, [setFolders]);
};

export default useFolderStore;
