import React from "react";
import { styled } from "styled-components";
import { Div } from "../style/Div";
import { Button } from "../style/Button";
import useHover from "../Hooks/useHover";

const ShortsBtn = styled(Div)`
  position: relative;
  margin-top: 15px;
`
const ShortsProfileBtn = styled(Button)`
    border-radius: 5px;
`
const ShortsProfileBtnImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 5px;
`
const ShortsEtcBtn = styled(Button)`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #efefef;
  &:hover {
    background-color: lightgray;
  }
`
const ShortsBtnImg = styled.img`
  width: 24px;
  height: 24px;
  padding: 9px;
`
const ShortsBtnhoverDetails = styled(Div)`
  position: absolute;
  padding: 10px;
  background: rgb(44, 44, 44);
  left: -20px;
  transform: translateX(-100%);
  opacity: 0.8;
  color: white;
  font-size: 12px;
  font-weight: 200;
  border-radius: 5px;
  z-index: 100;
  align-items: center;
`
const ShortsBtnLabel = styled.div`
  font-size: 15px;
`

const ShortsBtnItem = (props) => {
    
    const { imgClassName, imgSrc, alt, label, tagContent } = props.data;

    // ------------------- .hoverBtn 호버 이벤트 -------------------
    const [isHovered, hoverDetailsDisplayBlockEvent, hoverDetailsDisplayNoneEvent] = useHover(false);

    return (
        <ShortsBtn onMouseOver={hoverDetailsDisplayBlockEvent} onMouseOut={hoverDetailsDisplayNoneEvent} flex="v_row_center">
            {imgClassName 
                ? (<ShortsProfileBtn className={imgClassName}>
                    <ShortsProfileBtnImg src={imgSrc} alt={alt} />
                </ShortsProfileBtn>)
                : (<ShortsEtcBtn className="shortsBtnItem" flex="h_row_center">
                    <ShortsBtnImg src={imgSrc} alt={alt} />
                </ShortsEtcBtn>)
            }
            {
                tagContent && <ShortsBtnhoverDetails style={{display: isHovered ? "block" : "none"}}> {tagContent} </ShortsBtnhoverDetails>
            }
            {
                label && <ShortsBtnLabel> {label} </ShortsBtnLabel>
            }
        </ShortsBtn>
    )
}

export default ShortsBtnItem