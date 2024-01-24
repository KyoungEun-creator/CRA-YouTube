import React from "react";
import { styled } from "styled-components";
<<<<<<< HEAD
import { Div } from "../style/Div";
import { Button } from "../style/Button";

const ScreenContainer = styled(Div)`
  position: relative;
  width: 930px;
=======

const ScreenContainer = styled.div`
  position: relative;
  width: 930px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 20px 0 0px;
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
  margin-top: 70px;
`
const ScreenImg = styled.img`
  width: 100%;
  height: 100%;
`
<<<<<<< HEAD
const VideoControlContainer = styled(Div)`
=======
const VideoControlContainer = styled.div`
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
  position: absolute;
  bottom: 0;
  width: 930px;
  height: 48px;
<<<<<<< HEAD
  padding: 5px 0 5px 0;
  box-sizing: border-box;
`
const VideoControlPart = styled(Div)`
`
const VideoControlBtns = styled(Button)`
=======
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 0 5px 0;
  box-sizing: border-box;
`
const VideoControlPart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const VideoControlBtns = styled.button`
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
  width: 20px;
  height: 20px;
  margin: 0 10px 0 10px;
`
const VideoControlBtnImgs = styled.img`
  width: 20px;
  height: 20px;
`
<<<<<<< HEAD
=======

>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249

const WatchScreenItem = (props) => {

    const { thumbnailImgSrc, runningTime } = props.data;

    const IP = process.env.REACT_APP_IP_URL;

    return (
<<<<<<< HEAD
        <ScreenContainer flex="v_row_end">
            <ScreenImg src={thumbnailImgSrc} alt="영상" />
            <VideoControlContainer flex="h_row_between">
                <VideoControlPart flex="h_row_center">
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
                <VideoControlPart flex="h_row_center">
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
=======
        <ScreenContainer id="screenContainer">
            <ScreenImg id="screenImg" src={thumbnailImgSrc} alt="영상" />
            <VideoControlContainer id="videoControlContainer">
                <VideoControlPart id="videoControlLeft">
                    <VideoControlBtns className="videoControlBtns">
                        <VideoControlBtnImgs className="videoControlBtnImgs" src={`${IP}/imgs/play-solid.svg`} alt="재생" />
                    </VideoControlBtns>
                    <VideoControlBtns className="videoControlBtns">
                        <VideoControlBtnImgs className="videoControlBtnImgs" src={`${IP}/imgs/next.png`} alt="다음" />
                    </VideoControlBtns>
                    <VideoControlBtns className="videoControlBtns">
                        <VideoControlBtnImgs className="videoControlBtnImgs" src={`${IP}/imgs/volume.png`} alt="볼륨" />
                    </VideoControlBtns>
                    <span>0:00/{runningTime}</span>
                </VideoControlPart>
                <VideoControlPart id="videoControlRight">
                    <VideoControlBtns className="videoControlBtns">
                        <VideoControlBtnImgs className="videoControlBtnImgs" src={`${IP}/imgs/switch.png`} alt="스위치" />
                    </VideoControlBtns>
                    <VideoControlBtns className="videoControlBtns">
                        <VideoControlBtnImgs className="videoControlBtnImgs" src={`${IP}/imgs/subtitle.png`} alt="자막" />
                    </VideoControlBtns>
                    <VideoControlBtns className="videoControlBtns">
                        <VideoControlBtnImgs className="videoControlBtnImgs" src={`${IP}/imgs/settings.png`} alt="설정" />
                    </VideoControlBtns>
                    <VideoControlBtns className="videoControlBtns">
                        <VideoControlBtnImgs className="videoControlBtnImgs" src={`${IP}/imgs/rectangle.png`} alt="영화관모드" />
                    </VideoControlBtns>
                    <VideoControlBtns className="videoControlBtns">
                        <VideoControlBtnImgs className="videoControlBtnImgs" src={`${IP}/imgs/expand.png`} alt="전체보기" />
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
                    </VideoControlBtns>
                </VideoControlPart>
            </VideoControlContainer>
        </ScreenContainer>
    )
}

export default WatchScreenItem