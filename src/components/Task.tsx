// import React from "react";
import Button from "./Button";
import { 
    LabelBox_SC,
    Span_SC
} from "../styles/components/TaskStyles";

interface Task_Props {
    id: string
    value: string,
}

const Task = ( { id, value } : Task_Props )=>{
    return(
        <LabelBox_SC htmlFor={id}>

            <input type="checkbox" name="" id={id} />

            <Span_SC id={id}>
                { value }
            </Span_SC>

            <Button value="Edit" />
            <Button value="Delete" />
            
        </LabelBox_SC>
    );
};

export default Task;