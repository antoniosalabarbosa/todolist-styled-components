import React from "react";
import { getAllTasks, putOneTask } from "../components/Axios";

const value = {
    async callGetTasks(){
        return await getAllTasks();
    },

    async callPutOneTask(id: string, task: string){
        return await putOneTask(id, task);
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