import React from "react";
import { styled } from "styled-components";
import { Div } from "../style/LayoutStyle";
import { Img } from "../style/Img";
import { Button } from "../style/Button";
import HoverAlertBtnItem from "../Components/HoverAlertBtnItem";

const ScreenContainer = styled(Div)`
  position: relative;
`
const ScreenImg = styled(Img)`
`
const VideoControlContainer = styled(Div)`
  position: absolute;
  bottom: 0;
`
const VideoControlPart = styled(Div)`
`
const HoverAlertBtn = styled(Button)`
    width: 40px;
    height: 40px;
    margin: 7px;
`

const WatchScreenContainer = (props) => {

    const { thumbnailImgSrc, runningTime } = props.data;

    const IP = process.env.REACT_APP_IP_URL;

    return (
        <ScreenContainer 
            width="930px" flex="v_end">
            <ScreenImg src={thumbnailImgSrc} alt="영상" />
            <VideoControlContainer width="930px" height="48px" padding="5px 0 5px 0" flex="h_between">
                <VideoControlPart flex="h_center">
                    <HoverAlertBtn>
                        <HoverAlertBtnItem imgSrc={`${IP}/imgs/play.png`} alt="재생" tagContent="재생" />
                    </HoverAlertBtn>
                    <HoverAlertBtn>
                        <HoverAlertBtnItem imgSrc={`${IP}/imgs/next.png`} alt="다음" tagContent="다음" />
                    </HoverAlertBtn>
                    <HoverAlertBtn>
                        <HoverAlertBtnItem imgSrc={`${IP}/imgs/volume.png`} alt="볼륨" tagContent="볼륨" />
                    </HoverAlertBtn>
                    <span> 0:00/{runningTime} </span>
                </VideoControlPart>

                <VideoControlPart flex="h_center">
                    <HoverAlertBtn>
                        <HoverAlertBtnItem imgSrc={`${IP}/imgs/switch.png`} alt="스위치" tagContent="스위치" />
                    </HoverAlertBtn>
                    <HoverAlertBtn>
                        <HoverAlertBtnItem imgSrc={`${IP}/imgs/subtitle.png`} alt="자막" tagContent="자막" />
                    </HoverAlertBtn>
                    <HoverAlertBtn>
                        <HoverAlertBtnItem imgSrc={`${IP}/imgs/settings.png`} alt="설정" tagContent="설정" />
                    </HoverAlertBtn>
                    <HoverAlertBtn>
                        <HoverAlertBtnItem imgSrc={`${IP}/imgs/rectangle.png`} alt="영화관모드" tagContent="영화관모드" />
                    </HoverAlertBtn>
                    <HoverAlertBtn>
                        <HoverAlertBtnItem imgSrc={`${IP}/imgs/expand.png`} alt="전체보기" tagContent="전체" />
                    </HoverAlertBtn>
                </VideoControlPart>
            </VideoControlContainer>
        </ScreenContainer>
    )
}

export default WatchScreenContainer