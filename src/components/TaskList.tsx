import React from "react";
import * as FormItems from "../components/FormItems";
import { getAllTasks } from "./Axios";
import { ResponseTasks } from "../ts/interfaces";
import * as SC from "../styles/components/TaskStyles";

const TaskList = ()=>{

    const [tasks, setTasks] = React.useState<ResponseTasks[] | null>(null);

    React.useEffect(()=>{
        Promise.all([getAllTasks()])
        .then(r => setTasks(...r));
    }, []);

    return (
        <SC.Container>
            {
                tasks 
                ? 
                tasks.map(({ _id, task }) =>
                    <FormItems.ViewTask
                        key={_id}
                        _id={_id} 
                        task={task} 
                    />
                ) : <strong>There no more tasks</strong>
            }
        </SC.Container>
    );
};

export default TaskList;