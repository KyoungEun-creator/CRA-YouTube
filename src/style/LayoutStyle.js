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

const template = (props) => {
    return `
        box-sizing: border-box;
        width: ${ props.width || "fit-content" };
        height: ${ props.height || "fit-content" };
        border: ${ props.border || "none" };
        padding: ${ props.padding || "0" };
        margin: ${ props.margin || "0" };
        ${ setFlex(props.flex || "h_center") };
        background-color: ${ setColor(props.bgColor || "none") };
        color: ${ setColor(props.color || "black") };
    `
}

export const Div = styled.div`
    ${props => template(props)}
`
export const Article = styled.article`
    ${props => template(props)}
`
export const Section = styled.section`
    ${props => template(props)}
`
export const Main = styled.main`
    ${props => template(props)}
`
export const Header = styled.header`
    ${props => template(props)}
`
export const Nav = styled.nav`
    ${props => template(props)}
`
export const Footer = styled.footer`
    ${props => template(props)}
`
export const Aside = styled.aside`
    ${props => template(props)}
`