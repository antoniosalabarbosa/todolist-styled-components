import React from "react";
import Button from "./Button";
import Input from "./Input";
import { LabelBox_SC, Span_SC } from "../styles/components/TaskStyles";
import { ResponseTasks } from "../ts/interfaces";

const Task = ( { _id, task } : ResponseTasks )=>{

    const [spanView, setSpanView] = React.useState(true);
    // const [inputTaskValue, setInputTaskValue] = React.useState(task);

    const putTask = async ({ target }: { target: unknown })=> {
        if(
            (target) && (target instanceof HTMLButtonElement) &&
            (target.previousElementSibling) && 
            (target.previousElementSibling instanceof HTMLInputElement)
        ){
            const input = target.previousElementSibling;
            
            try{
                await fetch(`http://127.0.0.1:3001/tasks/:${input.id}`, {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        id: input.id,
                        task: input.value
                    })
                });
            }
            catch(error){
                console.log("Error: 'putTask' not working")
            }

            return true;
        }

        return false;
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
                            onClick={putTask}>
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