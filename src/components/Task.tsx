import React from "react";
import Button from "./Button";
import Input from "./Input";
import { LabelBox_SC, Span_SC } from "../styles/components/TaskStyles";
import { ResponseTasks } from "../ts/interfaces";

const Task = ( { _id, task } : ResponseTasks )=>{

    const [spanView, setSpanView] = React.useState(true);

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
                            onClick={async ()=>{

                            }}>
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