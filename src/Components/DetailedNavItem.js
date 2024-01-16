import React from "react";
import useHover from "../Hooks/useHover";

const DetailedNavItem = (props) => {
    const { value, title, className, imgSrc, alt, label, content } = props.data;
    const { setPage } = props;

    // ------------------- .exnav-btn 호버 이벤트 -------------------
    const [isHovered, exNavBtnHoverEvent, exNavBtnHoverOutEvent] = useHover(false);
    
    const btnStyle = {
        backgroundColor: isHovered ? "lightgray" : "transparent"
    };

    // ------------------- 페이지 선택 클릭 이벤트 -------------------
    const changePageEvent = (pageName) => {
        setPage(pageName)
    };

    return (
        <>
            {
                content ?
                (
                    <div className = "footer-guide">
                        {content}
                    </div>
                )
                :
                (
                    <button className="exnav-btn" value={value} title={title} type="button" onMouseOver={exNavBtnHoverEvent} onMouseOut={exNavBtnHoverOutEvent} style={btnStyle} onClick={() => changePageEvent(value)}>
                        <img className={className} src={imgSrc} alt={alt}/>
                        <div className="exnav-name"> {label} </div>
                    </button>
                )
            }
        </>
    )
}

export default DetailedNavItem