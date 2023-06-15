import React from "react";
import Task from "./Task";
import { TaskContainer_SC } from "../styles/components/TaskStyles";
import { ResponseTasks } from "../ts/interfaces";

const TaskList = ()=>{

    const [tasks, setTasks] = React.useState<ResponseTasks[] | null>(null);

    const getTasks = async ()=>{
        const response: ResponseTasks[] = await fetch("http://127.0.0.1:3001/tasks")
        .then(r => r.json());

        setTasks(response);

        return response;
    };

    React.useEffect(()=>{
        getTasks();
    }, []);

    return (
        <TaskContainer_SC>
            {
                (tasks) ?
                tasks.map( ({ _id, task }: ResponseTasks) => {
                    return (
                        <Task
                            key={_id}
                            _id={_id}
                            task={task}
                        />
                    );
                })
                : <strong>No have tasks</strong>
            }
        </TaskContainer_SC>
    );
};

export default TaskList;