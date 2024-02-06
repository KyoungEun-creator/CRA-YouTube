import { styled } from "styled-components";
import setFlex from "./SetFlex";

const setColor = (value) => {
    const template = {
        "black": "#000000",
        "white": "#ffffff",
        "major": "#",
        "none": "#00000000"
    }
    return template[value]
}

const setWeight = (value) => {
    const template = {
        "thin": "200",
        "normal": "400",
        "bold": "700"
    }
    return template[value]
}

const setSize = (value) => {
    const template = {
        "small": "12px",
        "medium": "16px",
        "large": "30px"
    }
    return template[value]
}

const template = (props) => {
    return `
        width: ${ props.width || "fit-content" };
        height: ${ props.height || "fit-content" };
        ${ setFlex(props.flex || "h_center") };
        padding: ${ props.padding || "0" };
        margin: ${ props.margin || "0" };
        color: ${ setColor(props.color || "black") };
        font-weight: ${ setWeight(props.fontWeight || "normal") };
    `
}

export const P = styled.p`
    ${props => template(props)}
    font-size: ${ props => setSize(props.fontSize || "small") };
`
export const A = styled.a`
    ${props => template(props)}
    font-size: ${ props => setSize(props.fontSize || "small") };
    cursor: pointer;
`
export const Span = styled.span`
    ${props => template(props)}
    font-size: ${ props => setSize(props.fontSize || "small") };
`
export const H1 = styled.h1`
    ${props => template(props)}
    font-size: 32px;
    font-weight: bold;
`
export const H2 = styled.h2`
    ${props => template(props)}
    font-size: "24px";
    font-weight: bold;
`
export const H3 = styled.h3`
    ${props => template(props)}
    font-size: "19px";
    font-weight: bold;
`     
export const H4 = styled.h4`
    ${props => template(props)}
    font-size: "16px";
    font-weight: bold;
`
export const H5 = styled.h5`
    ${props => template(props)}
    font-size: "12px";
    font-weight: bold;
`
export const H6 = styled.h6`
    ${props => template(props)}
    font-size: "10px";
    font-weight: bold;
`