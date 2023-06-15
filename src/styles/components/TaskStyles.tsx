import { styled } from "styled-components";
import { $blue0, $white } from "../variables";

export const TaskContainer_SC = styled.div`
    width: 100vw;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LabelBox_SC = styled.label`
    width: 100%;
    margin: 0 0 10px 0;
    display: grid;
    grid-template-columns: 30px clamp(100px, 100vw, 400px) 100px 100px;
    column-gap: 10px;
`;


export const Span_SC = styled.span`
    width: 100vw;
    max-width: 400px;
    font-size: 1.5rem;
`;

export const Button_SC = styled.button`
    padding: 3px 10px;
    color: ${$white};
    font-size: 1rem;
    background-color: ${$blue0};
`;