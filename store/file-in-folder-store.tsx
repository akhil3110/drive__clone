"use client";
import { create } from "zustand";
import { useEffect, useCallback } from "react";
import { getFilesInFolder } from "@/lib/getFilesInFolder";

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
    filesInFolder: FileType[]; // Store files directly as an array
    setFilesInFolder: (newFiles: FileType[]) => void;
}

const useFileInFolderStore = create<FileStore>((set) => ({
    filesInFolder: [], // Initialize as an empty array
    setFilesInFolder: (newFiles) => set({ filesInFolder: newFiles }),
}));

// Hook to fetch and initialize files for a specific folder
export const useInitializeFilesInFolder = (folderId: string) => {
    const setFilesInFolder = useFileInFolderStore((state) => state.setFilesInFolder);

    const fetchFiles = useCallback(async () => {
        if (!folderId) return;
        const data = await getFilesInFolder(folderId);
        setFilesInFolder(data);
    }, [folderId, setFilesInFolder]);

    useEffect(() => {
        fetchFiles();
    }, [fetchFiles]);
};

export default useFileInFolderStore;
