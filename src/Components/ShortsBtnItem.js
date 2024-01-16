import React from "react";
import useHover from "../Hooks/useHover";

const ShortsBtnItem = (props) => {
    const { imgClassName, imgSrc, alt, label, tagContent } = props.data;

    // ------------------- .hoverBtn 호버 이벤트 -------------------
    const [isHovered, hoverDetailsDisplayBlockEvent, hoverDetailsDisplayNoneEvent] = useHover(false);

    return (
        <div className="shortsBtn" onMouseOver={hoverDetailsDisplayBlockEvent} onMouseOut={hoverDetailsDisplayNoneEvent} >
            {imgClassName 
                ? (<button className={imgClassName} type="button">
                    <img src={imgSrc} className="shortsProfileBtnImg" alt={alt} />
                </button>)
                : (<button className="shortsBtnItem" type="button">
                    <img src={imgSrc} className="shortsBtnImg" alt={alt} />
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