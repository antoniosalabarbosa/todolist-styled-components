import axios from "axios";
import { ResponseTasks } from "../ts/interfaces";

const BASE_URL = "http://127.0.0.1:3001/tasks";

export const getAllTasks = async ()=>{
    const response: ResponseTasks[] = await (await axios.get(BASE_URL)).data;
    return response;
};

export const postOneTask = async (task: string, checked: boolean)=>{
    await axios.post(BASE_URL, { task: task, checked: checked });
};

export const putOneTask = async (id: string, task: string, checked: boolean)=>{
    await axios.put(BASE_URL, { id: id, task: task , checked: checked});
};

export const deleteOneTask = async (id: string)=>{
    await axios({
        method: "DELETE",
        url: BASE_URL,
        headers: { "Content-Type": "application/json" },
        data: { id: id }
    });
};