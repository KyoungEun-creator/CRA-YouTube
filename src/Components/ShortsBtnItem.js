import React from "react";
import { styled } from "styled-components";
<<<<<<< HEAD
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
=======
import useHover from "../Hooks/useHover";

const ShortsBtn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
const ShortsProfileBtnImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 5px;
`
<<<<<<< HEAD
const ShortsEtcBtn = styled(Button)`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #efefef;
  &:hover {
    background-color: lightgray;
  }
=======
const ShortsEtcBtn = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #efefef;
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
`
const ShortsBtnImg = styled.img`
  width: 24px;
  height: 24px;
  padding: 9px;
`
<<<<<<< HEAD
const ShortsBtnhoverDetails = styled(Div)`
=======
const ShortsBtnhoverDetails = styled.div`
  width: fit-content;
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
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
<<<<<<< HEAD
        <ShortsBtn onMouseOver={hoverDetailsDisplayBlockEvent} onMouseOut={hoverDetailsDisplayNoneEvent} flex="v_row_center">
            {imgClassName 
                ? (<ShortsProfileBtn className={imgClassName}>
                    <ShortsProfileBtnImg src={imgSrc} alt={alt} />
                </ShortsProfileBtn>)
                : (<ShortsEtcBtn className="shortsBtnItem" flex="h_row_center">
                    <ShortsBtnImg src={imgSrc} alt={alt} />
=======
        <ShortsBtn className="shortsBtn" onMouseOver={hoverDetailsDisplayBlockEvent} onMouseOut={hoverDetailsDisplayNoneEvent}>
            {imgClassName 
                ? (<button className={imgClassName} type="button">
                    <ShortsProfileBtnImg src={imgSrc} className="shortsProfileBtnImg" alt={alt} />
                </button>)
                : (<ShortsEtcBtn className="shortsBtnItem" type="button">
                    <ShortsBtnImg src={imgSrc} className="shortsBtnImg" alt={alt} />
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
                </ShortsEtcBtn>)
            }
            {
<<<<<<< HEAD
                tagContent && <ShortsBtnhoverDetails style={{display: isHovered ? "block" : "none"}}> {tagContent} </ShortsBtnhoverDetails>
            }
            {
                label && <ShortsBtnLabel> {label} </ShortsBtnLabel>
=======
                tagContent && <ShortsBtnhoverDetails className="shortsBtnhoverDetails" style={{display: isHovered ? "block" : "none"}}> {tagContent} </ShortsBtnhoverDetails>
            }
            {
                label && <ShortsBtnLabel className="shortsBtnLabel"> {label} </ShortsBtnLabel>
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
            }
        </ShortsBtn>
    )
}

export default ShortsBtnItem