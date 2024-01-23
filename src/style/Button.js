import { styled } from "styled-components";

const setFlex = (value) => {
    if (value === "h_row_center") {
        return `
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        `
    }
    else if (value === "h_row_start") {
        return `
            display: flex;
            flex-direction: row;
            justify-content: start;
            align-items: center;
        `
    }
    else if (value === "h_row_between") {
        return `
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        `
    }
    else if (value === "v_row_center") {
        return `
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `
    }
    else if (value === "v_row_start") {
        return `
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;
        `
    }
    else if (value === "v_row_between") {
        return `
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        `
    }
}

const setBorder = (value) => {
    if (value === "none") {
        return `
            border: none;
            background-color: transparent;
        `
    }
    else if (value === "basic") {
        return `
            border: 1px solid black;
            background-color: transparent;
        `
    }
}

export const Button = styled.button`
    width: ${ props => props.width || "fit-content" };
    height: ${ props => props.height || "fit-content" };
    padding: ${ props => props.padding || "3px 3px 3px 3px" };
    border: ${ props => props.border || "none" };
    ${ props => setBorder(props.border) };
    ${ props => setFlex(props.flex) };
    cursor: pointer;
`