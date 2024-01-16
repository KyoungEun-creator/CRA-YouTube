import React from "react";
import useHover from "../Hooks/useHover";

const HeaderHoverAlertItem = (props) => {
    
    const { idName, imgId, imgClassName, imgSrc, alt, tagContent, alarmNum } = props.data;
    const { isHover } = props;

    // ------------------- .hoverBtn 호버 이벤트 -------------------
    const [isHovered, handleHoverOnEvent, handleHoverOffEvent] = useHover(false);

    return (
        <button id={idName} className={isHover && "headerRightBtns"} onMouseOver={handleHoverOnEvent} onMouseOut={handleHoverOffEvent} type="button">
            { imgId
                ? <img id={imgId} className={imgClassName} src={imgSrc} alt={alt} />
                : <img className={imgClassName} src={imgSrc} alt={alt} />
            }
            {
                alarmNum && <div id="alarmBadge"> {alarmNum} </div> 
            }
            {
                tagContent && <div className="hoverDetails" style={{display: isHovered ? "block" : "none"}}> {tagContent} </div>
            }
        </button>
    )
}

export default HeaderHoverAlertItem