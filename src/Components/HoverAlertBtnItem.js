import React from "react";
import useHover from "../Hooks/useHover";
import { styled } from "styled-components";
import { Span } from "../style/TextStyle";
import { Img } from "../style/Img";

const HoverBtnImg = styled(Img)`
    position: relative;
`
const AlarmBadge = styled(Span)`
    position: absolute;
    top: 5px;
    right: 65px;
    border: 2px solid #fff;
    border-radius: 22px;
`
const HoverDetails = styled(Span)`
    position: absolute;
    top: 55px;
    background-color: #2C2C2C;
    opacity: 0.8;
    border-radius: 5px;
    z-index: 100;
`

const HoverAlertBtnItem = (props) => {
    
    const { imgSrc, alt, tagContent, alarm } = props;

    // ------------------- .hoverBtn 호버 이벤트 -------------------
    const [isHovered, hoverDetailsDisplayBlockEvent, hoverDetailsDisplayNoneEvent] = useHover(false);

    return (
        <>
            <HoverBtnImg src={imgSrc} alt={alt} onMouseOver={hoverDetailsDisplayBlockEvent} onMouseOut={hoverDetailsDisplayNoneEvent} 
                width="80%" height="80%" />
            {   
                isHovered &&
                <HoverDetails height="15px" fontSize="small" color="white" fontWeight="thin" padding="10px" flex="h_center"> {tagContent} </HoverDetails>
            }
            {
                alarm && 
                <AlarmBadge 
                    width="13px" height="16px" color="white" bgColor="red" fontSize="small" padding="0 4px" flex="h_center"> 
                    {alarm} 
                </AlarmBadge> 
            }         
        </>
    )
}

export default HoverAlertBtnItem;

