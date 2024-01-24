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
<<<<<<< HEAD
            justify-content: flex-start;
            align-items: center;
        `
    }
    else if (value === "h_row_end") {
        return `
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
=======
            justify-content: start;
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
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
<<<<<<< HEAD
            justify-content: flex-start;
            align-items: center;
        `
    }
    else if (value === "v_row_end") {
        return `
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
=======
            justify-content: start;
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
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

<<<<<<< HEAD
const setDeco = (value) => {
    if (value === "none") {
        return `
            background-color: transparent;
            color: black;
        `
    }
    else if (value === "black") {
        return `
            border: 1px solid black;
            background-color: black;
            color: white;
=======
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
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
        `
    }
}

export const Button = styled.button`
<<<<<<< HEAD
    type: ${ props => props.type || "button" };
    width: ${ props => props.width || "fit-content" };
    height: ${ props => props.height || "fit-content" };
    box-sizing: ${ props => props.boxSizing || "border-box" };
    padding: ${ props => props.padding || "3px 3px 3px 3px" };
    border: ${ props => props.border || "none" };
    ${ props => setDeco(props.deco) };
=======
    width: ${ props => props.width || "fit-content" };
    height: ${ props => props.height || "fit-content" };
    padding: ${ props => props.padding || "3px 3px 3px 3px" };
    border: ${ props => props.border || "none" };
    ${ props => setBorder(props.border) };
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
    ${ props => setFlex(props.flex) };
    cursor: pointer;
`