import React from "react";
import useHover from "../Hooks/useHover";
import { styled } from "styled-components";

const AlarmBadge = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
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
const HoverDetails = styled.div`
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
  align-items: center;
`

const HeaderHoverAlertItem = (props) => {
    
    const { idName, imgId, imgClassName, imgSrc, alt, tagContent, alarmNum } = props.data;
    const { isHover } = props;

    // ------------------- .hoverBtn 호버 이벤트 -------------------
    const [isHovered, hoverDetailsDisplayBlockEvent, hoverDetailsDisplayNoneEvent] = useHover(false);

    return (
        <button id={idName} className={isHover && "headerRightBtns"} onMouseOver={hoverDetailsDisplayBlockEvent} onMouseOut={hoverDetailsDisplayNoneEvent} type="button">
            { imgId
                ? <img id={imgId} className={imgClassName} src={imgSrc} alt={alt} />
                : <img className={imgClassName} src={imgSrc} alt={alt} />
            }
            {
                alarmNum && <AlarmBadge> {alarmNum} </AlarmBadge> 
            }
            {
                tagContent && <HoverDetails style={{display: isHovered ? "block" : "none"}}> {tagContent} </HoverDetails>
            }
        </button>
    )
}

export default HeaderHoverAlertItem