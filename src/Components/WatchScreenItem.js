import React from "react";
import { styled } from "styled-components";
import { Div } from "../style/Div";
import { Img } from "../style/Img";
import { Button } from "../style/Button";

const ScreenContainer = styled(Div)`
  position: relative;
  width: 930px;
`
const ScreenImg = styled(Img)`
`
const VideoControlContainer = styled(Div)`
  position: absolute;
  bottom: 0;
  width: 930px;
  height: 48px;
  padding: 5px 0 5px 0;
  box-sizing: border-box;
`
const VideoControlPart = styled(Div)`
`
const VideoControlBtns = styled(Button)`
  width: 20px;
  height: 20px;
  margin: 0 10px 0 10px;
`
const VideoControlBtnImgs = styled(Img)`
  width: 20px;
  height: 20px;
`

const WatchScreenItem = (props) => {

    const { thumbnailImgSrc, runningTime } = props.data;

    const IP = process.env.REACT_APP_IP_URL;

    return (
        <ScreenContainer flex="v_end">
            <ScreenImg src={thumbnailImgSrc} alt="영상" />
            <VideoControlContainer flex="h_between">
                <VideoControlPart flex="h_center">
                    <VideoControlBtns deco="none">
                        <VideoControlBtnImgs src={`${IP}/imgs/play-solid.svg`} alt="재생" />
                    </VideoControlBtns>
                    <VideoControlBtns deco="none">
                        <VideoControlBtnImgs src={`${IP}/imgs/next.png`} alt="다음" />
                    </VideoControlBtns>
                    <VideoControlBtns deco="none">
                        <VideoControlBtnImgs src={`${IP}/imgs/volume.png`} alt="볼륨" />
                    </VideoControlBtns>
                    <span>0:00/{runningTime}</span>
                </VideoControlPart>
                <VideoControlPart flex="h_center">
                    <VideoControlBtns deco="none">
                        <VideoControlBtnImgs src={`${IP}/imgs/switch.png`} alt="스위치" />
                    </VideoControlBtns>
                    <VideoControlBtns deco="none">
                        <VideoControlBtnImgs src={`${IP}/imgs/subtitle.png`} alt="자막" />
                    </VideoControlBtns>
                    <VideoControlBtns deco="none">
                        <VideoControlBtnImgs src={`${IP}/imgs/settings.png`} alt="설정" />
                    </VideoControlBtns>
                    <VideoControlBtns deco="none">
                        <VideoControlBtnImgs src={`${IP}/imgs/rectangle.png`} alt="영화관모드" />
                    </VideoControlBtns>
                    <VideoControlBtns deco="none">
                        <VideoControlBtnImgs src={`${IP}/imgs/expand.png`} alt="전체보기" />
                    </VideoControlBtns>
                </VideoControlPart>
            </VideoControlContainer>
        </ScreenContainer>
    )
}

export default WatchScreenItem