import React from "react";
import { Context } from "../context/Context";
import * as SC from "../styles/components/TaskStyles";
import { ResponseTasks } from "../ts/interfaces";
import * as FormItems from "../components/FormItems";

const TaskList = ()=>{

    const context = React.useContext(Context);
    const [tasksReducer, setTasksReducer] = React.useReducer( context.callGetTasks,  context.callGetTasks());
    const [tasks, setTasks] = React.useState<ResponseTasks[] | null>(null);

    React.useEffect(()=>{
        Promise.all([tasksReducer])
        .then(json => setTasks(...json) );
    }, [tasksReducer])

    return (
        <SC.Container>
            {
                tasks
                ?
                tasks.map( ({_id, task}) => {
                    return (
                        <FormItems.ViewTask 
                            key={_id}
                            _id={_id} 
                            task={task} 
                        />
                    )
                })
                :
                false
            }
        </SC.Container>
    );
};

export default TaskList;