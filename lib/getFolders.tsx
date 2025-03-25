import axios from "axios"

export const getFolders = async () => {
    const res = await axios.get("/api/folder")
    return res.data
}