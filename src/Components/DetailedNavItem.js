import React from "react";
import { styled } from "styled-components";
import useHover from "../Hooks/useHover";
import { Button } from "../style/Button";
<<<<<<< HEAD
import { Div } from "../style/Div";
=======
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249

const FooterGuide = styled.div`
    padding: 10px 24px 0 24px;
    margin-bottom: 10px;
    font-size: 14px;
<<<<<<< HEAD
=======
    height: fit-content;
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
`
const DetailedNavBtn = styled(Button)`
    border-radius: 4px;
    padding: 0 12px;
`
<<<<<<< HEAD
const DetailedNavName = styled(Div)`
=======
const DetailedNavName = styled.div`
    width: 100%;
    height: 20px;
    font-size: 14px;
    display: flex;
    justify-content: left;
    align-items: center;
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
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
<<<<<<< HEAD
                    <DetailedNavBtn value={value} title={title} width="190px" height="40px" flex="h_row_center" onMouseOver={exNavBtnHoverEvent} onMouseOut={exNavBtnHoverOutEvent} style={btnStyle}>
                        <img className={className} src={imgSrc} alt={alt}/>
                        <DetailedNavName flex="h_row_start" width="100%" height="20px" fontSize="14px"> {label} </DetailedNavName>
=======
                    <DetailedNavBtn value={value} title={title} width="190px" height="40px" flex="h_row_center" type="button" onMouseOver={exNavBtnHoverEvent} onMouseOut={exNavBtnHoverOutEvent} style={btnStyle}>
                        <img className={className} src={imgSrc} alt={alt}/>
                        <DetailedNavName className="exnav-name"> {label} </DetailedNavName>
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
                    </DetailedNavBtn>
                )
            }
        </>
    )
}

export default DetailedNavItem