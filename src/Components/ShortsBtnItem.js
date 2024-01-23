import React from "react";
import { styled } from "styled-components";
import useHover from "../Hooks/useHover";

const ShortsBtn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`
const ShortsProfileBtnImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 5px;
`
const ShortsEtcBtn = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #efefef;
`
const ShortsBtnImg = styled.img`
  width: 24px;
  height: 24px;
  padding: 9px;
`
const ShortsBtnhoverDetails = styled.div`
  width: fit-content;
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
        <ShortsBtn className="shortsBtn" onMouseOver={hoverDetailsDisplayBlockEvent} onMouseOut={hoverDetailsDisplayNoneEvent}>
            {imgClassName 
                ? (<button className={imgClassName} type="button">
                    <ShortsProfileBtnImg src={imgSrc} className="shortsProfileBtnImg" alt={alt} />
                </button>)
                : (<ShortsEtcBtn className="shortsBtnItem" type="button">
                    <ShortsBtnImg src={imgSrc} className="shortsBtnImg" alt={alt} />
                </ShortsEtcBtn>)
            }

            {
                tagContent && <ShortsBtnhoverDetails className="shortsBtnhoverDetails" style={{display: isHovered ? "block" : "none"}}> {tagContent} </ShortsBtnhoverDetails>
            }
            {
                label && <ShortsBtnLabel className="shortsBtnLabel"> {label} </ShortsBtnLabel>
            }
        </ShortsBtn>
    )
}

export default ShortsBtnItem