import { styled } from "styled-components";
import setFlex from "./SetFlex";
import setDeco from "./SetDeco";

const template = (props) => {
    return `

        box-sizing: border-box;

        width: ${ props => props.width || "fit-content" };
        height: ${ props => props.height || "fit-content" };
        ${ props => setFlex(props.flex || "h_center") };
        ${ props => setDeco(props.deco || "none") };
        border: ${ props => props.border || "none" };
        padding: ${ props => props.padding || "0" };
        margin: ${ props => props.margin || "0" };
    `
}

export const Div = styled.div`
    ${props => {
        return template(props)
    }}
`
export const Article = styled.article`
    ${props => {
        return template(props)
    }}
`
export const Section = styled.section`
    ${props => {
        return template(props)
    }}
`
export const Main = styled.main`
    width: ${ props => props.width || "fit-content" };
    height: ${ props => props.height || "fit-content" };
    box-sizing: ${ props => props.boxSizing || "border-box" };
    ${ props => setFlex(props.flex || "h_center") };
    ${ props => setDeco(props.deco || "none") };
    border: ${ props => props.border || "none" }; 
    padding: ${ props => props.padding || "0" };
    margin: ${ props => props.margin || "0" };
   
`
export const Header = styled.header`
    width: ${ props => props.width || "fit-content" };
    height: ${ props => props.height || "fit-content" };
    box-sizing: ${ props => props.boxSizing || "border-box" };
    ${ props => setFlex(props.flex || "h_center") };
    ${ props => setDeco(props.deco || "none") };
    border: ${ props => props.border || "none" }; 
    padding: ${ props => props.padding || "0" };
    margin: ${ props => props.margin || "0" };
   
`
export const Nav = styled.nav`
    width: ${ props => props.width || "fit-content" };
    height: ${ props => props.height || "fit-content" };
    box-sizing: ${ props => props.boxSizing || "border-box" };
    border: ${ props => props.border || "none" };     
    padding: ${ props => props.padding || "0" };
    margin: ${ props => props.margin || "0" };
   
`
export const Footer = styled.footer`
    width: ${ props => props.width || "fit-content" };
    height: ${ props => props.height || "fit-content" };
    box-sizing: ${ props => props.boxSizing || "border-box" };
    ${ props => setFlex(props.flex || "h_center") };
    ${ props => setDeco(props.deco || "none") };
    border: ${ props => props.border || "none" };     
    padding: ${ props => props.padding || "0" };
    margin: ${ props => props.margin || "0" };
   
`
export const Aside = styled.aside`
    width: ${ props => props.width || "fit-content" };
    height: ${ props => props.height || "fit-content" };
    box-sizing: ${ props => props.boxSizing || "border-box" };
    ${ props => setFlex(props.flex || "h_center") };
    ${ props => setDeco(props.deco || "none") };
    border: ${ props => props.border || "none" };
`