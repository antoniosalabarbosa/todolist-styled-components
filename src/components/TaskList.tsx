// import React from "react";
import Task from "./Task";
import { TaskContainer_SC } from "../styles/components/TaskStyles";

const TaskList = ()=>{

    return (
        <TaskContainer_SC>
            <Task id={`${Math.random()*100}_task`} value="First" />
            <Task id={`${Math.random()*100}_task`} value="Second" />
        </TaskContainer_SC>
    );
};

export default TaskList;