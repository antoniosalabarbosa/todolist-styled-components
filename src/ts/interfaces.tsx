import { 
    ReactNode, 
    MouseEventHandler
} from "react";

export interface ResponseTasks {
    _id: string,
    task: string,
}

export interface ButtonProps {
    children: ReactNode
    onClick?: MouseEventHandler<HTMLButtonElement>,
}