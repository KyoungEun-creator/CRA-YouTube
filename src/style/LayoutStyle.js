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

const template = () => {
    return `
        box-sizing: border-box;
        width: ${ props => props.width || "fit-content" };
        height: ${ props => props.height || "fit-content" };
        border: ${ props => props.border || "none" };
        padding: ${ props => props.padding || "0" };
        margin: ${ props => props.margin || "0" };
        ${ props => setFlex(props.flex || "h_center") };
        background-color: ${ props => setColor(props.bgColor || "none") };
        color: ${ props => setColor(props.color || "black") };
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