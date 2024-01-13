import React from "react";

const NavBtnItem = (props) => {
    const { value, title, imgSrc, label } = props.data
    const { setPage } = props

    // ------------------- .imnav-btn 호버 이벤트 -------------------
    const [isHovered, setIsHovered] = React.useState(false)

    const imNavBtnHoverEvent = () => {
        setIsHovered(true)
    }
    const imNavBtnHoverOutEvent = () => {
        setIsHovered(false)
    }
    const btnStyle = {
        backgroundColor: isHovered ? "lightgray" : "transparent"
    }

    const changePageEvent = (pageName) => {
        setPage(pageName)
    }

    return (
        <button className="imnav-btn" value={value} title={title} onMouseOver={imNavBtnHoverEvent} onMouseOut={imNavBtnHoverOutEvent} style={btnStyle} onClick={() => changePageEvent(value)}>
            <img className="imnav-btn-img" src={imgSrc} />
            <div className="imnav-name"> {label} </div>
        </button>
    )
}

export default NavBtnItem