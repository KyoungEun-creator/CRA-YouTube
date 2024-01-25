import React from "react";
import useHover from "../Hooks/useHover";
import { styled } from "styled-components";
import { Button } from "../style/Button";
import { Div } from "../style/Div";
import { Img } from "../style/Img";

const NavBtn = styled(Button)`
    border-radius: 10px;
    margin: 10px 0 7px;
    padding: 0;
    width: 64px;
    height: 74px;
`
const NavBtnImg = styled(Img)`
  width: 24px;
  height: 24px;
  margin-bottom: 6px;
`
const NavName = styled(Div)`
  overflow: hidden;
  text-overflow: ellipsis; /* 넘치는 건 말줄임표로 */
  white-space: nowrap;
  width: 100%;
  height: 14px;
`

const NavBtnItem = (props) => {
    
    const { value, title, imgSrc, alt, label } = props.data;

    // ------------------- .imnav-btn 호버 이벤트 -------------------
    const [isHovered, imNavBtnHoverEvent, imNavBtnHoverOutEvent] = useHover(false);

    const btnStyle = {
        backgroundColor: isHovered ? "lightgray" : "transparent"
    };

    return (
        <NavBtn className="imnav-btn" value={value} title={title} onMouseOver={imNavBtnHoverEvent} onMouseOut={imNavBtnHoverOutEvent} style={btnStyle} flex="v_center">
            <NavBtnImg src={imgSrc} alt={alt} />
            <NavName> {label} </NavName>
        </NavBtn>
    )
}

export default NavBtnItem