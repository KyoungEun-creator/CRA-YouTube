// import { styled } from "styled-components";

// const setFlex = (value) => {
//     if (value === "h_between") {
//         return `
//             display: flex;
//             flex-direction: row;
//             justify-content: space-between;
//             align-items: center;
//         `
//     }
//     else if (value === "h_start") {
//         return `
//             display: flex;
//             flex-direction: row;
//             justify-content: start;
//             align-items: center;
//         `
//     }
//     else if (value === "v_between") {
//         return `
//             display: flex;
//             flex-direction: column;
//             justify-content: space-between;
//             align-items: center;
//         `
//     }
//     else if (value === "v_start") {
//         return `
//             display: flex;
//             flex-direction: column;
//             justify-content: start;
//             align-items: center;
//         `
//     }
// }

// const setColor = (value) => {
//     if (value === "red") {
//         return "red"
//     }
//     else if (value === "blue") {
//         return "blue"
//     }
// }

// const PStyle = (props) => `
//     width: ${ props => props.width || "fit-content" };
//     height: ${ props => props.height || "fit-content" };
//     font-size: ${ props => props.fontSize || "16px" };
//     color: ${ props => setColor(props.color) || "black" };
//     ${ props => setFlex(props.flex) };
// `
// const H1Style = (props) => `
//     width: ${ props => props.width || "fit-content" };
//     height: ${ props => props.height || "fit-content" };
//     font-size: ${ props => props.fontSize || "30px" };
//     font-weight: ${ props => props.fontSize || "800" };
//     color: ${ props => setColor(props.color) || "black" };
//     ${ props => setFlex(props.flex) };
// `
// const H2Style = (props) => `
//     width: ${ props => props.width || "fit-content" };
//     height: ${ props => props.height || "fit-content" };
//     font-size: ${ props => props.fontSize || "30px" };
//     font-weight: ${ props => props.fontSize || "800" };
//     color: ${ props => setColor(props.color) || "black" };
//     ${ props => setFlex(props.flex) };
// `
// const H3Style = (props) => `
//     width: ${ props => props.width || "fit-content" };
//     height: ${ props => props.height || "fit-content" };
//     font-size: ${ props => props.fontSize || "30px" };
//     font-weight: ${ props => props.fontSize || "800" };
//     color: ${ props => setColor(props.color) || "black" };
//     ${ props => setFlex(props.flex) };
// `

// export const P = styled.p`
//     ${props => PStyle(props)}
// `
// export const H1 = styled.h1`
//     ${props => H1Style(props)}
// `
// export const H2 = styled.h2`
//     ${props => H2Style(props)}
// `
// export const H3 = styled.h3`
//     ${props => H3Style(props)}
// `