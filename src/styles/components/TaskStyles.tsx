import { styled } from "styled-components";
import { $blue0, $white, $gray } from "../variables";

export const Container = styled.div`
    width: 100vw;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LabelBox = styled.label`
    width: 100%;
    margin: 0 0 10px 0;
    display: grid;
    grid-template-columns: 30px clamp(100px, 100vw, 400px) 100px 100px;
    column-gap: 10px;
`;

export const Span = styled.span`
    width: 100vw;
    max-width: 400px;
    font-size: 1.5rem;
`;

export const Input = styled.input`
    border: 2px solid ${$gray};
    padding: 5px 10px;
    font-size: 1.5rem;
`;

export const Button = styled.button`
    padding: 3px 10px;
    color: ${$white};
    font-size: 1rem;
    background-color: ${$blue0};
`;