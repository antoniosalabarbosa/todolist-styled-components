import axios from "axios";
import { ResponseTasks } from "../ts/interfaces";

const BASE_URL = "http://localhost:3001/tasks/";

export const getAllTasks = async ()=>{
    const response: ResponseTasks[] = await axios.get(BASE_URL)
    .then(r => r.data);

    return response;
};

export const putOneTask = async (id: string, task: string)=>{
    return await axios.put((BASE_URL), { 
        id,
        task 
    });
};