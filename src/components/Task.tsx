import React from "react";
import Button from "./Button";
import Input from "./Input";
import { LabelBox_SC, Span_SC } from "../styles/components/TaskStyles";
import { ResponseTasks } from "../ts/interfaces";

const Task = ( { id, task } : ResponseTasks )=>{

    const [spanView, setSpanView] = React.useState(true);



    return(
        <LabelBox_SC htmlFor={id}>

            <input type="checkbox" name="" id={id} />

            {
                (spanView) ? 
                (
                    <React.Fragment>
                        <Span_SC id={id}>
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
                            id={id}
                            task={task}
                        />

                        <Button onClick={()=>{  }}>
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