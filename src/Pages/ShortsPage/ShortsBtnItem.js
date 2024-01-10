import React from "react"

const ShortsBtnItem = (props) => {
    const { imgClassName, imgSrc, label, tagContent } = props.data

    // ------------------- .hoverBtn 호버 이벤트 -------------------
    const [isHovered, setIsHovered] = React.useState(false)

    const hoverDetailsDisplayBlockEvent = () => {
        setIsHovered(true)
    }
    const hoverDetailsDisplayNoneEvent = () => {
        setIsHovered(false)
    }

    return (
        <div className="shortsBtn" onMouseOver={hoverDetailsDisplayBlockEvent} onMouseOut={hoverDetailsDisplayNoneEvent} >
            {imgClassName 
                ? (<button className={imgClassName} type="button">
                    <img src={imgSrc} className="shortsProfileBtnImg" />
                </button>)
                : (<button className="shortsBtnItem" type="button">
                    <img src={imgSrc} className="shortsBtnImg" />
                </button>)
            }

            {
                tagContent && <div className="shortsBtnhoverDetails" style={{display: isHovered ? "block" : "none"}}> {tagContent} </div>
            }
            {
                label && <div className="shortsBtnLabel"> {label} </div>
            }
        </div>
    )
}

export default ShortsBtnItem