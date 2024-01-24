import { styled } from "styled-components";


export const Input = styled.input`
    type: ${ props => props.type || "text" };
    width: ${ props => props.width  || "fit-content" };
    height: ${ props => props.height || "fit-content" };
    box-sizing: ${ props => props.boxSizing || "border-box" };
    padding: ${ props => props.padding || "3px 3px 3px 3px" };
    border: ${ props => props.border || "1px solid lightgray" };
`