import axios from "axios";
import { ResponseTasks } from "../ts/interfaces";

const BASE_URL = "http://127.0.0.1:3001/tasks";

export const getAllTasks = async ()=>{
    const response: ResponseTasks[] = await (
        await axios.get(BASE_URL)
    ).data;
    return response;
};

export const putOneTask = async (id: string, task: string)=>{
    await axios.put(`${BASE_URL}`, { _id: id, task: task });
};