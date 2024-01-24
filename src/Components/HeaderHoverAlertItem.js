import React from "react";
import useHover from "../Hooks/useHover";
import { styled } from "styled-components";
<<<<<<< HEAD
import { Span } from "../style/Span";
import { Button } from "../style/Button";

const HoverBtn = styled(Button)`
`
const AlarmBadge = styled(Span)`
  position: absolute;
=======

const AlarmBadge = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
  background-color: #c00;
  color: white;
  width: 13.547px;
  height: 16px;
  top: 2px;
  left: 21px;
  border: 2px solid #fff;
  border-radius: 22px;
  font-size: 12px;
  padding: 0 4px;
`
<<<<<<< HEAD
const HoverDetails = styled(Span)`
=======
const HoverDetails = styled.div`
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
  position: absolute;
  top: 55px;
  padding: 10px;
  height: 15px;
  background: rgb(44, 44, 44);
  opacity: 0.8;
  color: white;
  font-size: 12px;
  font-weight: 200;
  border-radius: 5px;
  z-index: 100;
<<<<<<< HEAD
=======
  align-items: center;
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
`

const HeaderHoverAlertItem = (props) => {
    
    const { idName, imgId, imgClassName, imgSrc, alt, tagContent, alarmNum } = props.data;
    const { isHover } = props;

    // ------------------- .hoverBtn 호버 이벤트 -------------------
    const [isHovered, hoverDetailsDisplayBlockEvent, hoverDetailsDisplayNoneEvent] = useHover(false);

    return (
        <HoverBtn id={idName} className={isHover && "headerRightBtns"} onMouseOver={hoverDetailsDisplayBlockEvent} onMouseOut={hoverDetailsDisplayNoneEvent} deco="none">
            { imgId
                ? <img id={imgId} className={imgClassName} src={imgSrc} alt={alt} />
                : <img className={imgClassName} src={imgSrc} alt={alt} />
            }
            {
<<<<<<< HEAD
                alarmNum && <AlarmBadge flex="h_row_center"> {alarmNum} </AlarmBadge> 
            }
            {
                tagContent && <HoverDetails style={{display: isHovered ? "block" : "none"}} flex="h_row_center"> {tagContent} </HoverDetails>
=======
                alarmNum && <AlarmBadge> {alarmNum} </AlarmBadge> 
            }
            {
                tagContent && <HoverDetails style={{display: isHovered ? "block" : "none"}}> {tagContent} </HoverDetails>
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
            }
        </HoverBtn>
    )
}

export default HeaderHoverAlertItem