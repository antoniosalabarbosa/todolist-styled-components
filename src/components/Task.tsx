import React from "react";
import Button from "./Button";
import Input from "./Input";
import { LabelBox_SC, Span_SC } from "../styles/components/TaskStyles";
import { ResponseTasks } from "../ts/interfaces";
import { putOneTask } from "./Axios";

const Task = ( { _id, task } : ResponseTasks )=>{

    const [spanView, setSpanView] = React.useState(true);

    const putTask = async (id: string, value: string)=>{
        try{
            await putOneTask(id, value)
            .then(()=> console.log("ok"));
        }
        catch(error){
            console.log(error, "Error: put");
        }
    };

    const getIdValue = ({ target }: { target: unknown })=> {
        if(
            (target) && (target instanceof HTMLButtonElement) &&
            (target.previousElementSibling) && 
            (target.previousElementSibling instanceof HTMLInputElement)
        ){
            const { id, value }  = target.previousElementSibling;

            putTask(id, value);
        }
    };

    return(
        <LabelBox_SC htmlFor={_id}>

            <input type="checkbox" name="" id={_id} />

            {
                (spanView) ? 
                (
                    <React.Fragment>
                        <Span_SC id={_id}>
                            { task }
                        </Span_SC>

                        <Button onClick={()=> { setSpanView(!spanView) }}>
                            Edit
                        </Button>
                    </React.Fragment>
                )
                :
                (
                    <React.Fragment>
                        <Input
                            id={_id}
                            task={task}
                        />

                        <Button 
                            onClick={getIdValue}>
                            Save
                        </Button>
                    </React.Fragment>
                )
            }

            <Button>
                Delete
            </Button>
            
        </LabelBox_SC>
    );
};

export default Task;