import React from "react";
import useHover from "../Hooks/useHover";
import { styled } from "styled-components";

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
`
const NavBtnImg = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom: 6px;
`
const NavName = styled.div`
  max-width: 100%;
  height: 14px;
  font-size: 10px;
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
        <NavBtn className="imnav-btn" value={value} title={title} onMouseOver={imNavBtnHoverEvent} onMouseOut={imNavBtnHoverOutEvent} style={btnStyle}>
            <NavBtnImg className="imnav-btn-img" src={imgSrc} alt={alt} />
            <NavName className="imnav-name"> {label} </NavName>
        </NavBtn>
    )
}

export default NavBtnItem