import React from "react";
import { Input_SC } from "../styles/components/TaskStyles";

const Input = (
    { id, task }:
    { id: string, task: string }
) => {

    const inputText = React.useRef<HTMLInputElement>();
    const [valueInputText, setValueInputText] = React.useState(task);

    const handleChangeTextTask = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setValueInputText(event.target.value);
    };

    return (
        <Input_SC 
            type="text"
            id={id} 
            value={valueInputText}
            ref={inputText as React.RefObject<HTMLInputElement>}
            onChange={handleChangeTextTask}
        />
    );
};

export default Input;