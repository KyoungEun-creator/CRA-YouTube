import { styled } from "styled-components";

const setFlex = (value) => {
    if (value === "h_center") {
        return `
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        `
    }
    else if (value === "h_start") {
        return `
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
        `
    }
    else if (value === "h_end") {
        return `
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
        `
    }
    else if (value === "h_between") {
        return `
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        `
    }
    else if (value === "v_center") {
        return `
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `
    }
    else if (value === "v_start") {
        return `
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
        `
    }
    else if (value === "v_end") {
        return `
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
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
}

// const setDeco = (value) => {
//     if (value === "none") {
//         return `
//             background-color: transparent;
//             color: black;
//         `
//     }
//     else if (value === "black") {
//         return `
//             background-color: black;
//             color: white;
//         `
//     }
//     else if (value === "caution") {
//         return `
//             background-color: red;
//             color: white;
//         `
//     }
// }

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

    const template= {
        "small": "12px",
        "medium": "16px",
        "large": "30px"
    }

    return template[value]
}

export const Button = styled.button`

    /* 이 태그의 기본 설정 내용 */

    cursor: pointer;
    box-sizing: "border-box";

    /* 이 태그의 props별 설정 내용 */

    width: ${ props => props.width || "fit-content" };
    height: ${ props => props.height || "fit-content" };
    /* box-sizing: ${ props => props.boxSizing || "border-box" }; */

    padding: ${ props => props.padding || "3px" };
    margin: ${ props => props.margin || "0" };

    background-color: ${ props => setColor(props.bgColor || "none")};  /* 배경색 */
    color: ${ props => setColor(props.color || "none")};   /* 글자색 */
    font-size: ${ props => setSize(props.size || "medium")};
    border: 1px solid ${ props => setColor(props.border || "none") };
    ${ props => setFlex(props.flex || "h_center") };

    /* ${ props => setDeco(props.deco || "none") }; */
`