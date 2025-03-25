import axios from "axios";

export const getFilesInFolder = async (folderId: string) => {
    try {
        const res = await axios.get(`/api/files?folderId=${folderId}`);
        return res.data || [];
    } catch (error) {
        console.error("Error fetching files in folder:", error);
        return [];
    }
};
