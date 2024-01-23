import React from "react";
import { styled } from "styled-components";
import useHover from "../Hooks/useHover";
import { Button } from "../style/Button";

const FooterGuide = styled.div`
    padding: 10px 24px 0 24px;
    margin-bottom: 10px;
    font-size: 14px;
    height: fit-content;
`
const DetailedNavBtn = styled(Button)`
    border-radius: 4px;
    padding: 0 12px;
`
const DetailedNavName = styled.div`
    width: 100%;
    height: 20px;
    font-size: 14px;
    display: flex;
    justify-content: left;
    align-items: center;
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
                    <FooterGuide className = "footer-guide">
                        {content}
                    </FooterGuide>
                )
                :
                (
                    <DetailedNavBtn value={value} title={title} width="190px" height="40px" flex="h_row_center" type="button" onMouseOver={exNavBtnHoverEvent} onMouseOut={exNavBtnHoverOutEvent} style={btnStyle}>
                        <img className={className} src={imgSrc} alt={alt}/>
                        <DetailedNavName className="exnav-name"> {label} </DetailedNavName>
                    </DetailedNavBtn>
                )
            }
        </>
    )
}

export default DetailedNavItem