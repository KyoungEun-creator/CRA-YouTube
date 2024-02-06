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
    // template.black
}

const setSize = (value) => {
    const template = {
        "small": "12px",
        "medium": "16px",
        "large": "30px"
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

export const Button = styled.button`

    /* Button의 기본 설정 내용 */
    cursor: pointer;
    box-sizing: "border-box";

    /* Button의 props별 설정 내용 */
    width: ${ props => props.width || "fit-content" };
    height: ${ props => props.height || "fit-content" };
    padding: ${ props => props.padding || "3px" };
    margin: ${ props => props.margin || "0" };
    background-color: ${ props => setColor(props.bgColor || "none")};
    color: ${ props => setColor(props.color || "black")};
    font-size: ${ props => setSize(props.fontSize || "medium")};
    font-weight: ${ props => setWeight(props.fontWeight || "bold")};
    border: 1px solid ${ props => setColor(props.border || "none") };
    ${ props => setFlex(props.flex || "h_center") };

`