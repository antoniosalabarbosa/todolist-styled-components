import React from "react";
import { getAllTasks } from "../components/Axios";

const value = {
    async callGetTasks(){
        return await getAllTasks();
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