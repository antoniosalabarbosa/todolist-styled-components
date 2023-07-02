import React from "react";
import { 
    getAllTasks, 
    postOneTask,
    putOneTask,
    deleteOneTask
} from "../components/Axios";

const value = {
    async callGetTasks(){
        return await getAllTasks();
    },

    async callPostOneTask(task: string){
        return await postOneTask(task);
    },

    async callPutOneTask(id: string, task: string){
        return await putOneTask(id, task);
    },

    async callDeleteOneTask(id: string){
        return await deleteOneTask(id);
    }
};

export const Context = React.createContext(value);

export const ContextStorage = ({children}: React.PropsWithChildren)=>{
    
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};