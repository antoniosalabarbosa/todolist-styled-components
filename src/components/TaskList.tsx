import React from "react";
// import Task from "./Task";
import { TaskContainer_SC } from "../styles/components/TaskStyles";
import { ResponseJSON } from "../ts/interfaces";

const TaskList = ()=>{

    const [tasks, setTasks] = React.useState<ResponseJSON[] | null>(null);

    const getTasks = async ()=>{
        const response: ResponseJSON[] = await fetch("../json/tasks.json")
        .then(r => r.json());

        console.log(response);
        setTasks(response);

        return response;
    };

    React.useEffect(()=>{
        getTasks();
    }, [])

    React.useEffect(()=>{
        if(tasks) console.log(tasks);
    }, [tasks])

    return (
        <TaskContainer_SC>
            
        </TaskContainer_SC>
    );
};

export default TaskList;