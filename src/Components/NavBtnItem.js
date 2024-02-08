import React from "react";
import useHover from "../Hooks/useHover";
import { styled } from "styled-components";
import { Button } from "../style/Button";
import { Span } from "../style/TextStyle";
import { Img } from "../style/Img";

const NavBtn = styled(Button)`
    border-radius: 10px;
`
const NavBtnImg = styled(Img)`
`
const NavName = styled(Span)`
  overflow: hidden;
  text-overflow: ellipsis; 
  white-space: nowrap;
`

const NavBtnItem = (props) => {
    
    const { value, title, imgSrc, alt, label } = props.data;

    // ------------------- .imnav-btn 호버 이벤트 -------------------
    const [isHovered, imNavBtnHoverEvent, imNavBtnHoverOutEvent] = useHover(false);

    const btnStyle = {
        backgroundColor: isHovered ? "lightgray" : "transparent"
    };

    return (
        <NavBtn className="imnav-btn" value={value} title={title} onMouseOver={imNavBtnHoverEvent} onMouseOut={imNavBtnHoverOutEvent} style={btnStyle} 
            margin="10px 0 7px 0" width="64px" height="74px" flex="v_center">
            <NavBtnImg src={imgSrc} alt={alt} width="24px" height="24px" margin="0 0 6px 0" />
            <NavName width="100%" height="14px" fontSize="small" fontWeight="thin"> {label} </NavName>
        </NavBtn>
    )
}

export default NavBtnItem