import React from "react";
import { styled } from "styled-components";

const ScreenContainer = styled.div`
  position: relative;
  width: 930px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 20px 0 0px;
  margin-top: 70px;
`
const ScreenImg = styled.img`
  width: 100%;
  height: 100%;
`
const VideoControlContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 930px;
  height: 48px;
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
  width: 20px;
  height: 20px;
  margin: 0 10px 0 10px;
`
const VideoControlBtnImgs = styled.img`
  width: 20px;
  height: 20px;
`


const WatchScreenItem = (props) => {

    const { thumbnailImgSrc, runningTime } = props.data;

    const IP = process.env.REACT_APP_IP_URL;

    return (
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
                    </VideoControlBtns>
                </VideoControlPart>
            </VideoControlContainer>
        </ScreenContainer>
    )
}

export default WatchScreenItem