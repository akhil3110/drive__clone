import axios from "axios";

export const getFiles = async () => {
    const response = await axios.get("/api/files/homepage");
    return response.data        
}