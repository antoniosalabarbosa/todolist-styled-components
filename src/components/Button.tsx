// import React from "react";
import { Button_SC } from "../styles/components/TaskStyles";
import { ButtonProps } from "../ts/interfaces";

const Button = ( { children, onClick }: ButtonProps )=>{
    return (
        <Button_SC onClick={onClick ? onClick : undefined}>
            { children }
        </Button_SC>
    );
};

export default Button;