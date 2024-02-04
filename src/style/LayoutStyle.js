import { styled } from "styled-components";
import setFlex from "./SetFlex";
import setDeco from "./SetDeco";

export const Div = styled.div`
    width: ${ props => props.width || "fit-content" };
    height: ${ props => props.height || "fit-content" };
    box-sizing: ${ props => props.boxSizing || "border-box" };
    ${ props => setFlex(props.flex || "h_center") };
    ${ props => setDeco(props.deco || "none") };
    border: ${ props => props.border || "none" };
    padding: ${ props => props.padding || "0" };
    margin: ${ props => props.margin || "0" };
`
export const Article = styled.article`
    width: ${ props => props.width || "fit-content" };
    height: ${ props => props.height || "fit-content" };
    box-sizing: ${ props => props.boxSizing || "border-box" };
    ${ props => setFlex(props.flex) };
    ${ props => setDeco(props.deco) };
    border: ${ props => props.border || "none" };
    padding: ${ props => props.padding || "0" };
    margin: ${ props => props.margin || "0" };
`
export const Section = styled.section`
    width: ${ props => props.width || "fit-content" };
    height: ${ props => props.height || "fit-content" };
    box-sizing: ${ props => props.boxSizing || "border-box" };
    ${ props => setFlex(props.flex) };
    ${ props => setDeco(props.deco || "none") };
    border: ${ props => props.border || "none" };
    padding: ${ props => props.padding || "0" };
    margin: ${ props => props.margin || "0" };
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
    width: ${ props => props.width || "100vw" };
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