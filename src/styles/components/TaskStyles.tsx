import { styled } from "styled-components";
import { $blue0, $white, $gray } from "../variables";

export const Container = styled.div`
    width: 90vw;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DivContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const LabelBox = styled.label`
    width: 100%;
    margin: 10px 0;
    display: grid;
    grid-template-columns: 30px clamp(50px, 50vw, 300px) 1fr 1fr;
    align-items: center;
    column-gap: 10px;
`;

export const Span = styled.span`
    max-width: 300px;
    margin: 0 10px 0 0;
    font-size: 1.5rem;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const Input = styled.input`
    border: 2px solid ${$gray};
    padding: 5px 10px;
    font-size: 1.5rem;
`;

export const Button = styled.button`
    padding: 10px 15px;
    color: ${$white};
    font-size: 1rem;
    background-color: ${$blue0};
    cursor: pointer;
`;