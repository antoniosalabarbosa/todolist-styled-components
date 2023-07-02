import React from "react";
import * as SC from "../styles/components/TaskStyles";
import { Context } from "../context/Context";
import { 
    ResponseTasks, 
    MutableRef,
    ModalTasks
} from "../ts/interfaces";

export const ViewTask = ({ _id, task, updateTasksReducer }: ResponseTasks) => {

    const { callPutOneTask, callDeleteOneTask } = React.useContext(Context);

    const [spanView, setSpanView] = React.useState(true);
    const input = React.useRef<HTMLInputElement>();
    const span = React.useRef<HTMLSpanElement>();
    const [inputValue, setInputValue] = React.useState(task);
    const [spanValue, setSpanValue] = React.useState(task);

    return (
        <SC.LabelBox htmlFor={_id}>
            <input type="checkbox" id={_id} />

            {
                spanView
                    ?
                    <SC.Span ref={span as MutableRef<HTMLSpanElement>}>
                        {spanValue}
                    </SC.Span>
                    :
                    <SC.Input
                        ref={input as MutableRef<HTMLInputElement>}
                        type="text"
                        value={inputValue}
                        onChange={() => {
                            if (input.current) {
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
                    <SC.Button onClick={() => {
                        if (input.current) {
                            callPutOneTask(_id, input.current.value);
                            setSpanView(!spanView);
                            setSpanValue(input.current.value);
                        }
                    }}>
                        Save
                    </SC.Button>
            }

            <SC.Button onClick={()=>{
                callDeleteOneTask(_id);
                if(updateTasksReducer) updateTasksReducer()
            }}>
                Delete
            </SC.Button>
        </SC.LabelBox>
    );
};

export const ModalTask = ({ setModalView, updateTasksReducer }: ModalTasks<boolean>) => {

    const { callPostOneTask } = React.useContext(Context);

    const [inputValue, setInputValue] = React.useState("");
    const input = React.useRef<HTMLInputElement | null>(null);

    return (
        <div>
            <SC.Input
                ref={input}
                value={inputValue}
                placeholder="Task"
                onChange={()=>{ if(input.current) setInputValue(input.current.value) }}
            />
            
            <SC.Button onClick={() => {
                callPostOneTask(inputValue);
                updateTasksReducer();
                setModalView(false);
            }}>
                Salvar
            </SC.Button>
        </div>
    );
};