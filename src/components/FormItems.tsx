// import React from "react";
import { ResponseTasks } from "../ts/interfaces";

export const ViewTask = ({ _id, task }: ResponseTasks)=>{
    return (
        <label htmlFor={_id}>
            <input type="checkbox" id={_id} />
            <span>{task}</span>

            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </label>
    );
}

export const Span = ()=>{
    return (
        <span></span>
    );
};

export const Button = ()=>{
    return (
        <button></button>
    );
};

export const Input = ()=>{
    return (
        <input type="text" name="" id="" />
    );
};