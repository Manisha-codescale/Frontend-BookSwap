import axios from "axios";
import { BASEURL } from "@env";

const axiosChatInstance = axios.create({
    baseURL: `${BASEURL}/api/chat`,
    headers: {
        "Content-Type": "application/json",
    },
});

export const getChatThreads = async (userId) => {
    try {
        const threadResponse = await axiosChatInstance.get(`/threads/${userId}`);
        return threadResponse.data;
    }
    catch (error) {
        console.log('error :', error.threadResponse?.data?.error || error.message);
    }
};
