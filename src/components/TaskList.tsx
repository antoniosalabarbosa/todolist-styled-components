import React from "react";
import { Context } from "../context/Context";
import * as SC from "../styles/components/TaskStyles";
import { ResponseTasks } from "../ts/interfaces";
import * as FormItems from "../components/FormItems";

const TaskList = ()=>{

    const { callGetTasks } = React.useContext(Context);
    const [tasksReducer, updateTasksReducer] = React.useReducer( callGetTasks,  callGetTasks());
    const [tasks, setTasks] = React.useState<ResponseTasks[] | null>(null);

    const [search, setSearch] = React.useState("");
    const [modalView, setModalView] = React.useState(false);
    
    const filteredTasks = (search.length > 0 && tasks) ?
    tasks.filter(item => item.task.includes(search))
    : tasks;

    React.useEffect(()=>{
        Promise.all([tasksReducer])
        .then(json => setTasks(...json) );
    }, [tasksReducer])

    return (
        <SC.Container>

            <SC.Input 
                type="text"
                onChange={e => setSearch(e.target.value)}
                value={search}
            />

            {
                (filteredTasks) ? 
                filteredTasks.map(({_id, task})=>{
                    return (
                        <FormItems.ViewTask 
                            key={_id}
                            _id={_id} 
                            task={task} 
                        />
                    );
                })
                :
                <p>Tasks not found</p>
            }

            <div>
                <SC.Button onClick={()=> setModalView(!modalView)}>
                        +
                </SC.Button>
            </div>

            {
                modalView ?
                <FormItems.ModalTask 
                    setModalView={setModalView}
                    updateTasksReducer={updateTasksReducer}
                />
                :
                null
            }
        </SC.Container>
    );
};

export default TaskList;