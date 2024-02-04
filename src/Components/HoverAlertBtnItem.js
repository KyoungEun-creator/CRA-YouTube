import React from "react";
import useHover from "../Hooks/useHover";
import { styled } from "styled-components";
import { Span } from "../style/TextStyle";
import { Button } from "../style/Button";

const HoverBtn = styled(Button)`
    padding: 6px;
`
const AlarmBadge = styled(Span)`
    position: absolute;
    background-color: #c00;
    color: white;
    top: 2px;
    left: 21px;
    border: 2px solid #fff;
    border-radius: 22px;
`
const HoverDetails = styled(Span)`
    position: absolute;
    top: 55px;
    background: rgb(44, 44, 44);
    opacity: 0.8;
    color: white;
    font-weight: 200;
    border-radius: 5px;
    z-index: 100;
`

const HoverAlertBtnItem = (props) => {
    
    const { idName, imgId, imgClassName, imgSrc, alt, tagContent, alarmNum } = props.data;
    const { isHover } = props;

    // ------------------- .hoverBtn 호버 이벤트 -------------------
    const [isHovered, hoverDetailsDisplayBlockEvent, hoverDetailsDisplayNoneEvent] = useHover(false);

    return (
        <HoverBtn id={idName} className={isHover && "headerRightBtns"} onMouseOver={hoverDetailsDisplayBlockEvent} onMouseOut={hoverDetailsDisplayNoneEvent} 
            deco="none">
            { imgId
                ? <img id={imgId} className={imgClassName} src={imgSrc} alt={alt} />
                : <img className={imgClassName} src={imgSrc} alt={alt} />
            }
            {
                alarmNum && <AlarmBadge   
                    width="13px" height="16px" fontSize="12px" padding="0 4px" flex="h_center"> {alarmNum} </AlarmBadge> 
            }
            {
                tagContent && <HoverDetails style={{display: isHovered ? "block" : "none"}} 
                    height="15px" fontSize="12px" padding="10px" flex="h_center"> {tagContent} </HoverDetails>
            }
        </HoverBtn>
    )
}

export default HoverAlertBtnItem