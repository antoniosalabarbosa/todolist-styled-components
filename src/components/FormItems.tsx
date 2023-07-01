import React from "react";
import { ResponseTasks } from "../ts/interfaces";
import * as SC from "../styles/components/TaskStyles";

export const ViewTask = ({ _id, task }: ResponseTasks)=>{

    const [spanView, setSpanView] = React.useState(true);
    const input = React.useRef<HTMLInputElement>();
    const [inputValue, setInputValue] = React.useState(task);

    return (
        <SC.LabelBox htmlFor={_id}>
            <input type="checkbox" id={_id} />
            
            {
                spanView 
                ?
                <SC.Span>{task}</SC.Span>
                :
                <SC.Input
                    ref={input as React.MutableRefObject<HTMLInputElement>}
                    type="text" 
                    value={inputValue} 
                    onChange={()=> {
                        if(input.current){
                            setInputValue(input.current.value)
                        }
                    }}
                />
            }

            {
                spanView
                ?
                <SC.Button onClick={() => setSpanView(!spanView)}>Edit</SC.Button>
                :
                <SC.Button onClick={() => setSpanView(!spanView)}>Save</SC.Button>
            }

            <SC.Button>Delete</SC.Button>
        </SC.LabelBox>
    );
};