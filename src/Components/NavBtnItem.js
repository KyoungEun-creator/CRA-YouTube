import React from "react";
import useHover from "../Hooks/useHover";

const NavBtnItem = (props) => {
    
    const { value, title, imgSrc, alt, label } = props.data;

    // ------------------- .imnav-btn 호버 이벤트 -------------------
    const [isHovered, imNavBtnHoverEvent, imNavBtnHoverOutEvent] = useHover(false);

    const btnStyle = {
        backgroundColor: isHovered ? "lightgray" : "transparent"
    };

    return (
        <button className="imnav-btn" value={value} title={title} onMouseOver={imNavBtnHoverEvent} onMouseOut={imNavBtnHoverOutEvent} style={btnStyle}>
            <img className="imnav-btn-img" src={imgSrc} alt={alt}/>
            <div className="imnav-name"> {label} </div>
        </button>
    )
}

export default NavBtnItem