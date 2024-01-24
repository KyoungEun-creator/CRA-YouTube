import React from "react";
import useHover from "../Hooks/useHover";
import { styled } from "styled-components";
<<<<<<< HEAD
import { Button } from "../style/Button";
import { Div } from "../style/Div";

const NavBtn = styled(Button)`
    border-radius: 10px;
    margin: 10px 0 7px;
    padding: 0;
=======

const NavBtn = styled.button`
  width: 64px;
  height: 74px;
  border-radius: 10px;
  margin: 10px 0 7px;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
`
const NavBtnImg = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom: 6px;
`
<<<<<<< HEAD
const NavName = styled(Div)`
=======
const NavName = styled.div`
  max-width: 100%;
  height: 14px;
  font-size: 10px;
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
  overflow: hidden;
  text-overflow: ellipsis; /* 넘치는 건 말줄임표로 */
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
<<<<<<< HEAD
        <NavBtn className="imnav-btn" value={value} title={title} onMouseOver={imNavBtnHoverEvent} onMouseOut={imNavBtnHoverOutEvent} style={btnStyle} width="64px" height="74px" flex="v_row_center">
            <NavBtnImg src={imgSrc} alt={alt} />
            <NavName width="100%" height="14px"> {label} </NavName>
=======
        <NavBtn className="imnav-btn" value={value} title={title} onMouseOver={imNavBtnHoverEvent} onMouseOut={imNavBtnHoverOutEvent} style={btnStyle}>
            <NavBtnImg className="imnav-btn-img" src={imgSrc} alt={alt} />
            <NavName className="imnav-name"> {label} </NavName>
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
        </NavBtn>
    )
}

export default NavBtnItem