import { styled } from "styled-components";
import setFlex from "./SetFlex";
import setDeco from "./SetDeco";

export const P = styled.p`
    width: ${ props => props.width || "fit-content" };
    height: ${ props => props.height || "fit-content" };
    font-size: ${ props => props.fontSize || "14px" };
    ${ props => setFlex(props.flex) };
`
export const A = styled.a`
    width: ${ props => props.width || "fit-content" };
    height: ${ props => props.height || "fit-content" };
    font-size: ${ props => props.fontSize || "14px" };
    ${ props => setFlex(props.flex) };
    cursor: pointer;
`
export const Span = styled.span`
    width: ${ props => props.width  || "fit-content" };
    height: ${ props => props.height || "fit-content" };
    ${ props => setFlex(props.flex) };
    ${ props => setDeco(props.deco || "none") };
    font-size: ${ props => props.fontSize || "14px" };
    padding: ${ props => props.padding || "0" };
    margin: ${ props => props.margin || "0" };
`
export const H1 = styled.h1`
    width: ${ props => props.width  || "fit-content" };
    height: ${ props => props.height || "fit-content" };
    font-size: ${ props => props.fontSize || "25px" };
    color: ${ props => props.color || "black" };
    padding: ${ props => props.padding || "0" };
    margin: ${ props => props.margin || "0" };
`
export const H2 = styled.h2`
    width: ${ props => props.width  || "fit-content" };
    height: ${ props => props.height || "fit-content" };
    font-size: ${ props => props.fontSize || "20px" };
    color: ${ props => props.color || "black" };
    padding: ${ props => props.padding || "0" };
    margin: ${ props => props.margin || "0" };
`
export const H3 = styled.h3`
    width: ${ props => props.width  || "fit-content" };
    height: ${ props => props.height || "fit-content" };
    font-size: ${ props => props.fontSize || "16px" };
    color: ${ props => props.color || "black" };
    padding: ${ props => props.padding || "0" };
    margin: ${ props => props.margin || "0" };
`     