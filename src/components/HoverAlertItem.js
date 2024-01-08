import React from "react"

const HoverAlertItem = (props) => {
    const { idName, imgId, imgClassName, imgSrc, tagContent, alarmNum } = props.data
    const { isHover } = props

    // ------------------- .hoverBtn 호버 이벤트 -------------------
    const [isHovered, setIsHovered] = React.useState(false)

    const hoverDetailsDisplayBlockEvent = () => {
        setIsHovered(true)
    }
    const hoverDetailsDisplayNoneEvent = () => {
        setIsHovered(false)
    }

    return (
        <button id={idName} className={isHover && "headerRightBtns"} onMouseOver={hoverDetailsDisplayBlockEvent} onMouseOut={hoverDetailsDisplayNoneEvent} type="button">
            { imgId
                ? <img id={imgId} className={imgClassName} src={imgSrc} />
                : <img className={imgClassName} src={imgSrc} />
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

export default HoverAlertItem