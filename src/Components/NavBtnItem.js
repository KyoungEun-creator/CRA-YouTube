import React from "react";
import useHover from "../Hooks/useHover";

const NavBtnItem = (props) => {
    const { value, title, imgSrc, alt, label } = props.data;
    const { setPage } = props;

    // ------------------- .imnav-btn 호버 이벤트 -------------------
    const [isHovered, imNavBtnHoverEvent, imNavBtnHoverOutEvent] = useHover(false);

    const btnStyle = {
        backgroundColor: isHovered ? "lightgray" : "transparent"
    };

    // ------------------- 페이지 선택 클릭 이벤트 -------------------
    const changePageEvent = (pageName) => {
        setPage(pageName)
    };

    return (
        <button className="imnav-btn" value={value} title={title} onMouseOver={imNavBtnHoverEvent} onMouseOut={imNavBtnHoverOutEvent} style={btnStyle} onClick={() => changePageEvent(value)}>
            <img className="imnav-btn-img" src={imgSrc} alt={alt}/>
            <div className="imnav-name"> {label} </div>
        </button>
    )
}

export default NavBtnItem