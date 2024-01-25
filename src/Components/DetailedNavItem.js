import React from "react";
import { styled } from "styled-components";
import useHover from "../Hooks/useHover";
import { Button } from "../style/Button";
import { Div } from "../style/Div";

const FooterGuide = styled(Div)`
    padding: 10px 24px 0 24px;
    margin-bottom: 10px;
    font-size: 14px;
`
const DetailedNavBtn = styled(Button)`
    border-radius: 4px;
    padding: 0 12px;
    width: 190px;
    height: 40px;
`
const DetailedNavName = styled(Div)`
    width: 100%;
    height: 20px;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
`

const DetailedNavItem = (props) => {
    
    const { value, title, className, imgSrc, alt, label, content } = props.data;

    // ------------------- .exnav-btn 호버 이벤트 -------------------
    const [isHovered, exNavBtnHoverEvent, exNavBtnHoverOutEvent] = useHover(false);
    
    const btnStyle = {
        backgroundColor: isHovered ? "lightgray" : "transparent"
    };

    return (
        <>
            {
                content ?
                (
                    <FooterGuide> {content} </FooterGuide>
                )
                :
                (
                    <DetailedNavBtn value={value} title={title} flex="h_center" onMouseOver={exNavBtnHoverEvent} onMouseOut={exNavBtnHoverOutEvent} style={btnStyle}>
                        <img className={className} src={imgSrc} alt={alt} />
                        <DetailedNavName flex="h_start"> {label} </DetailedNavName>
                    </DetailedNavBtn>
                )
            }
        </>
    )
}

export default DetailedNavItem