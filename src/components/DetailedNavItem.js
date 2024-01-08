import React from "react"

const DetailedNavItem = (props) => {
    const { value, title, className, imgSrc, label } = props.data
    const { setPage } = props

    // ------------------- .exnav-btn 호버 이벤트 -------------------
    const [isHovered, setIsHovered] = React.useState(false)

    const exNavBtnHoverEvent = () => {
        setIsHovered(true)
    }
    const exNavBtnHoverOutEvent = () => {
        setIsHovered(false)
    }
    const btnStyle = {
        backgroundColor: isHovered ? "lightgray" : "transparent"
    }

    const changePageEvent = (pageName) => {
        setPage(pageName)
    }

    return (
        <button className="exnav-btn" value={value} title={title} type="button" onMouseOver={exNavBtnHoverEvent} onMouseOut={exNavBtnHoverOutEvent} style={btnStyle} onClick={() => changePageEvent(value)}>
            <img className={className} src={imgSrc} />
            <div className="exnav-name"> {label} </div>
        </button>
    )
}

export default DetailedNavItem