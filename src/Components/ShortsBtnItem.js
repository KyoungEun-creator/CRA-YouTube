import React from "react";
import { styled } from "styled-components";
import { Div } from "../style/Div";
import { Span } from "../style/Span";
import { Button } from "../style/Button";
import { Img } from "../style/Img";
import useHover from "../Hooks/useHover";

const ShortsBtn = styled(Div)`
    position: relative;
`
const ShortsProfileBtn = styled(Button)`
    border-radius: 5px;
`
const ShortsProfileBtnImg = styled(Img)`
    border-radius: 5px;
`
const ShortsEtcBtn = styled(Button)`
    border-radius: 50%;
    background-color: #efefef;
    &:hover {
        background-color: lightgray;
    }
`
const ShortsBtnImg = styled(Img)`
`
const ShortsBtnhoverDetails = styled(Span)`
    position: absolute;
    background: rgb(44, 44, 44);
    color: white;
    left: -20px;
    transform: translateX(-100%);
    opacity: 0.8;
    font-weight: 200;
    border-radius: 5px;
    z-index: 100;
`
const ShortsBtnLabel = styled(Span)`
`

const ShortsBtnItem = (props) => {
    
    const { imgClassName, imgSrc, alt, label, tagContent } = props.data;

    // ------------------- .hoverBtn 호버 이벤트 -------------------
    const [isHovered, hoverDetailsDisplayBlockEvent, hoverDetailsDisplayNoneEvent] = useHover(false);

    return (
        <ShortsBtn onMouseOver={hoverDetailsDisplayBlockEvent} onMouseOut={hoverDetailsDisplayNoneEvent} 
            margin="15px 0 0 0" flex="v_center">
            {imgClassName 
                ? (<ShortsProfileBtn className={imgClassName}>
                    <ShortsProfileBtnImg src={imgSrc} alt={alt} 
                        width="48px" height="48px" />
                </ShortsProfileBtn>)
                : (<ShortsEtcBtn 
                    width="48px" height="48px" flex="h_center">
                    <ShortsBtnImg src={imgSrc} alt={alt} 
                        width="24px" height="24px" padding="9px" />
                </ShortsEtcBtn>)
            }
            {
                tagContent && <ShortsBtnhoverDetails style={{display: isHovered ? "block" : "none"}}
                    fontSize="12px" padding="10px"> {tagContent} </ShortsBtnhoverDetails>
            }
            {
                label && <ShortsBtnLabel     
                    font-size="15px"> {label} </ShortsBtnLabel>
            }
        </ShortsBtn>
    )
}

export default ShortsBtnItem