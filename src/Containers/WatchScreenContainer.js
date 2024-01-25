import React from "react";
import { styled } from "styled-components";
import { Div } from "../style/Div";
import { Img } from "../style/Img";
import HoverAlertBtnItem from "../Components/HoverAlertBtnItem";

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

const WatchScreenContainer = (props) => {

    const { thumbnailImgSrc, runningTime } = props.data;

    const IP = process.env.REACT_APP_IP_URL;

    const WatchScreenLeftBtnsData = [
        {
            id: "WatchScreenBtnItem_1",
            idName: "microphoneBtn",
            imgClassName: "microphone",
            imgSrc: `${IP}/imgs/play.png`,
            alt: "재생(k)",
            tagContent: "음성으로 검색"
        },
        {
            id: "WatchScreenBtnItem_2",
            idName: "microphoneBtn",
            imgClassName: "microphone",
            imgSrc: `${IP}/imgs/next.png`,
            alt: "다음",
            tagContent: "다음"
        },
        {
            id: "WatchScreenBtnItem_3",
            idName: "microphoneBtn",
            imgClassName: "microphone",
            imgSrc: `${IP}/imgs/volume.png`,
            alt: "볼륨",
            tagContent: "볼륨"
        }
    ]
    const WatchScreenRightBtnsData = [
        {
            id: "WatchScreenBtnItem_4",
            idName: "microphoneBtn",
            imgClassName: "microphone",
            imgSrc: `${IP}/imgs/switch.png`,
            alt: "스위치",
            tagContent: "스위치"
        },
        {
            id: "WatchScreenBtnItem_5",
            idName: "microphoneBtn",
            imgClassName: "microphone",
            imgSrc: `${IP}/imgs/subtitle.png`,
            alt: "자막",
            tagContent: "자막"
        },
        {
            id: "WatchScreenBtnItem_6",
            idName: "microphoneBtn",
            imgClassName: "microphone",
            imgSrc: `${IP}/imgs/settings.png`,
            alt: "설정",
            tagContent: "설정"
        },
        {
            id: "WatchScreenBtnItem_7",
            idName: "microphoneBtn",
            imgClassName: "microphone",
            imgSrc: `${IP}/imgs/rectangle.png`,
            alt: "영화관 모드",
            tagContent: "영화관 모드"
        },
        {
            id: "WatchScreenBtnItem_8",
            idName: "microphoneBtn",
            imgClassName: "microphone",
            imgSrc: `${IP}/imgs/expand.png`,
            alt: "전체보기",
            tagContent: "전체보기"
        },
    ]

    return (
        <ScreenContainer flex="v_end">
            <ScreenImg src={thumbnailImgSrc} alt="영상" />
            <VideoControlContainer flex="h_between">
                <VideoControlPart flex="h_center">
                    {
                        WatchScreenLeftBtnsData.map((elem) => {
                            return <HoverAlertBtnItem key={elem.id} data={elem} isHover />
                        })
                    }
                    <span>0:00/{runningTime}</span>
                </VideoControlPart>

                <VideoControlPart flex="h_center">

                    {
                        WatchScreenRightBtnsData.map((elem) => {
                            return <HoverAlertBtnItem key={elem.id} data={elem} isHover />
                        })
                    }
                </VideoControlPart>
            </VideoControlContainer>
        </ScreenContainer>
    )
}

export default WatchScreenContainer