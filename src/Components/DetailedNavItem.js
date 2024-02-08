import React from "react";
import { styled } from "styled-components";
import useHover from "../Hooks/useHover";
import { Button } from "../style/Button";
import { Img } from "../style/Img";
import { Span } from "../style/TextStyle";

const FooterGuide = styled(Span)`
`
const DetailedNavBtn = styled(Button)`
    border-radius: 4px;
`
const DetailedHomeImg = styled(Img)`
`
const DetailedSubscribingImg = styled(Img)`
    border-radius: 50%;
`
const DetailedNavName = styled(Span)`
    overflow: hidden;
    white-space: nowrap;
`

const DetailedNavItem = (props) => {
    
    const { value, title, imgName, imgSrc, alt, label, footerContent } = props.data;

    // ------------------- .exnav-btn 호버 이벤트 -------------------
    const [isHovered, exNavBtnHoverEvent, exNavBtnHoverOutEvent] = useHover(false);
    
    const btnStyle = {
        backgroundColor: isHovered ? "lightgray" : "transparent"
    };

    return (
        <>
            {
                footerContent ?
                (
                    <FooterGuide    
                        padding="10px 24px 0 24px" margin="0 0 10px 0" flex="h_start"> 
                        {footerContent} 
                    </FooterGuide>
                )
                :
                ( imgName === "detailedBtnImg" ) ?
                (
                    <DetailedNavBtn value={value} title={title} onMouseOver={exNavBtnHoverEvent} onMouseOut={exNavBtnHoverOutEvent} style={btnStyle}
                        width="190px" height="40px" padding="0 12px" flex="h_center">
                        <DetailedHomeImg src={imgSrc} alt={alt} 
                            width="18px" height="18px" margin="0 24px 0 0" />
                        <DetailedNavName width="100%" height="20px" flex="h_start"> {label} </DetailedNavName>
                    </DetailedNavBtn>
                )
                :
                (
                    <DetailedNavBtn value={value} title={title} onMouseOver={exNavBtnHoverEvent} onMouseOut={exNavBtnHoverOutEvent} style={btnStyle}
                        width="190px" height="40px" padding="0 12px" flex="h_center">
                        <DetailedSubscribingImg src={imgSrc} alt={alt} 
                            width="24px" height="24px" margin="0 24px 0 0" />
                        <DetailedNavName width="100%" height="20px" flex="h_start"> {label} </DetailedNavName>
                    </DetailedNavBtn>
                )
            }
        </>
    )
}

export default DetailedNavItem