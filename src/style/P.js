import { styled } from "styled-components";

const setFlex = (value) => {
    if (value === "h_row_between") {
        return `
            display: flex;
            flex-direction: row;
            justify-content: space-between;
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
    else if (value === "v_row_between") {
        return `
            display: flex;
            flex-direction: column;
            justify-content: space-between;
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
}

const setColor = (value) => {
    if (value === "major") {
        return "blue"
    }
    else if (value === "minor") {
        return "yellow"
    }
    else if (value === "main") {
        return "black"
    }
}

export const P = styled.p`
    width: ${ props => props.width || "fit-content" };
    height: ${ props => props.height || "fit-content" };
    font-size: ${ props => props.fontSize || "16px" };
    color: ${ props => setColor(props.color) || "black" };
    ${
        (props) => {
            return setFlex(props.flex)
        }
    }
`