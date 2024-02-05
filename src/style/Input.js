import { styled } from "styled-components";

const setType = (value) => {

    if (value === "text" || "password") {
        return`
            border: 1px solid lightgray;
        `

    }

    else if (value === "button") {
        return `
            borer: none;
            font-size: 20px;
            font-weight: bold;
        `
    }
}

export const Input = styled.input`
    ${ props => setType(props.type) };  
    width: ${ props => props.width  || "fit-content" };
    height: ${ props => props.height || "fit-content" };
    box-sizing: ${ props => props.boxSizing || "border-box" };
    background-color: ${ props => props.bgcolor || "transparent" };
    color: ${ props => props.color || "black" };
    font-size: ${ props => props.fontSize || "14px" };
    padding: ${ props => props.padding || "3px" };
    margin: ${ props => props.margin || "0" };
    cursor: pointer;
`