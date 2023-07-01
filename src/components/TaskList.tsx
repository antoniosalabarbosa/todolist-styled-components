import React from "react";
import Task from "./Task";
import { TaskContainer_SC } from "../styles/components/TaskStyles";
import { ResponseTasks } from "../ts/interfaces";
import { getAllTasks } from "./Axios";

const TaskList = ()=>{

    const [tasks, setTasks] = React.useState<ResponseTasks[] | null>(null);

    const searchTasks = ()=>{
        getAllTasks().then((res)=>{
            setTasks(res);
            return res;
        });
    };

    React.useEffect(()=>{
        searchTasks();
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