import React from "react";
import useHover from "../Hooks/useHover";
import { styled } from "styled-components";
import { Span } from "../style/TextStyle";
import { Button } from "../style/Button";

const HoverBtn = styled(Button)`
    padding: 6px;
`
const AlarmBadge = styled(Span)`
    position: absolute;
    background-color: #c00;
    color: white;
    top: 5px;
    right: 65px;
    border: 2px solid #fff;
    border-radius: 22px;
`
const HoverDetails = styled(Span)`
    position: absolute;
    top: 55px;
    background: rgb(44, 44, 44);
    opacity: 0.8;
    color: white;
    font-weight: 200;
    border-radius: 5px;
    z-index: 100;
`

const HoverAlertBtnItem = (props) => {
    
    const { idName, imgId, imgClassName, imgSrc, alt, tagContent, alarmNum, clickEvent } = props.data;
    const { isRight } = props;

    // ------------------- .hoverBtn 호버 이벤트 -------------------
    const [isHovered, hoverDetailsDisplayBlockEvent, hoverDetailsDisplayNoneEvent] = useHover(false);

    return (
        <>
            <HoverBtn id={idName} className={isRight && "headerRightBtns"} onMouseOver={hoverDetailsDisplayBlockEvent} onMouseOut={hoverDetailsDisplayNoneEvent} onClick={clickEvent}
                deco="none">
                {/* { imgId 
                    ? <img id={imgId} className={imgClassName} src={imgSrc} alt={alt} />
                    : <img className={imgClassName} src={imgSrc} alt={alt} />
                } */}
                <img id={imgId ? imgId : null} className={imgClassName} src={imgSrc} alt={alt} />
                {
                    alarmNum && 
                    <AlarmBadge width="13px" height="16px" fontSize="12px" padding="0 4px" flex="h_center"> {alarmNum} </AlarmBadge> 
                }
                {
                    tagContent && 
                    isHovered &&
                    // <HoverDetails style={{ display: isHovered ? "block" : "none" }} height="15px" fontSize="12px" padding="10px" flex="h_center"> {tagContent} </HoverDetails>
                    <HoverDetails height="15px" fontSize="12px" padding="10px" flex="h_center"> {tagContent} </HoverDetails>
                }
            </HoverBtn>
        </>
    )
}

// flex={isRight ? row_h_end : row_h_center}  
// css in js 스타일로 하는 방법

// 우리는 기본 태그들에 대해서, props를 전달하여 스타일링 하고 있기 때문에, 절대로 className등을 사용해서 덩어리 style을 주는 것은 있을 수 없음
// 왜? 우리한테 props 한 개가 바로 한 개의 스타일이기 때문에

export default HoverAlertBtnItem;



// 1. react에서는 더이상 className을 가지고 style을 분기하지 않음 ( 삼항연상자 혹은 && 를 이용할 것 !!!!!!!! )

// 1-1. props는 최대한 적게 선언할 수록 좋음
// 1-2. 어차피 data라는 이름으로 props 전체를 주고 있는데, 왜 또 분기해서 주고 있는가?

// 2. 컴포넌트에선 이벤트를 정의하지 않음 -> 부모에서 정의를 하고 이를 props로 받아와야 함
// 2-1. 이벤트가 없으면 어차피 null이 들어가니깐, 이벤트 등록이 안됨 ( 이벤트 props가 왔을 때만 이벤트가 등록될 것임 )