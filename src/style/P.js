import { styled } from "styled-components";

const setFlex = (value) => {
    if (value === "h_between") {
        return `
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        `
    }
    else if (value === "h_start") {
        return `
            display: flex;
            flex-direction: row;
            justify-content: start;
            align-items: center;
        `
    }
    else if (value === "v_between") {
        return `
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        `
    }
    else if (value === "v_start") {
        return `
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;
        `
    }
}

const setColor = (value) => {
    if (value === "red") {
        return "red"
    }
    else if (value === "blue") {
        return "blue"
    }
}

export const P = styled.p`
    width: ${ props => props.width || "fit-content" };
    height: ${ props => props.height || "fit-content" };
    font-size: ${ props => props.fontSize || "16px" };
    color: ${ props => setColor(props.color) || "black" };
    ${ props => setFlex(props.flex) };
`