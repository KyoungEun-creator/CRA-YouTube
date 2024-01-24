import React from "react";
import { styled } from "styled-components";
import { Div } from "../style/Div";
import { Button } from "../style/Button";
import UploadMentionModule from "../Modules/UploadMentionModule";

const VideoData = styled(Div)`
  margin: 10px 0 10px 0;
  width: 930px;
  display: flex;
  flex-direction: column;
  padding: 0;
`
const WatchVideoTitle = styled.h1`
    margin-top: 10px;
`
const VideoDataMiddle = styled(Div)`
    width: 100%;
`
const VideoDataMiddleLeft = styled(Div)`
`
const VideoDataUploaderProfileImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0 12px 0 0;
`
const VideoDataUploader = styled.div`
    margin-right: 12px;
`
const SubscribeBtn = styled(Button)`
    background-color: black;
    color: white;
    width: 60px;
    height: 40px;
    border-radius: 20px;
`
const VideoDataMiddleRight = styled(Div)`
    width: 300px;
`
const VideoDataThumbUpBtn = styled(Button)`
    padding: 10px 15px 10px 15px;
    border-radius: 45% 0 0 45%;
    width: 95px;
    border: 1px solid lightgray;
    height: 40px;
    &:hover {
        background-color: lightgray;
    }
`
const VideoDataThumbDownBtn = styled(Button)`
    border-radius: 0 45% 45% 0;
    width: 50px;
    margin-right: 20px;
    border: 1px solid lightgray;
    height: 40px;
    &:hover {
        background-color: lightgray;
    }
`
const VideoDataShareBtn = styled(Button)`
    border-radius: 45%;
    width: 70px;
    margin-right: 20px;
    border: 1px solid lightgray;
    height: 40px;
    &:hover {
        background-color: lightgray;
    }
`
const VideoDataMoreBtn = styled(Button)`
    width: 40px;
    border-radius: 50%;
    border: 1px solid lightgray;
    height: 40px;
    &:hover {
        background-color: lightgray;
    }
`
const VideoDataMetaImg = styled.img`
    width: 20px;
    height: 20px;
    margin: 3px 3px 3px 3px;
`
const VideoDataBtn = styled(Div)`
  padding: 10px 20px 20px 10px;
  width: 100%;
  height: 120px;
  margin: 20px 0 20px 0;
  background-color: lightgray;
  border-radius: 10px 10px 10px 10px;
`
const VideoDataBtnMetaData = styled.div`
  font-weight: bold;
`

const WatchVideoDataItem = (props) => {

    const { videoTitle, channelName, view, channelProfileUrl, channelProfileImgSrc, alt, subscribers } = props.data;

    const IP = process.env.REACT_APP_IP_URL;

    const uploadMention = UploadMentionModule({ data: props.data });

    return (
        <VideoData>
            <WatchVideoTitle>{videoTitle}</WatchVideoTitle>

            <VideoDataMiddle flex="h_between">
                <VideoDataMiddleLeft flex="h_center">
                    <a href={channelProfileUrl}>
                        <VideoDataUploaderProfileImg src={channelProfileImgSrc} alt={alt} />
                    </a>
                    <VideoDataUploader>
                        <h3> {channelName} </h3>
                        <h6> 구독자 {subscribers} </h6>
                    </VideoDataUploader>
                    <SubscribeBtn deco="none">구독</SubscribeBtn>
                </VideoDataMiddleLeft>

                <VideoDataMiddleRight flex="h_center">
                    <VideoDataThumbUpBtn flex="h_between">
                        <VideoDataMetaImg src={`${IP}/imgs/thumb-up.png`} alt="좋아요" />
                        2.1천
                    </VideoDataThumbUpBtn>
                    <VideoDataThumbDownBtn flex="h_center">
                        <VideoDataMetaImg src={`${IP}/imgs/thumb-down.png`} alt="싫어요" />
                    </VideoDataThumbDownBtn>
                    <VideoDataShareBtn flex="h_center">
                        <VideoDataMetaImg src={`${IP}/imgs/share.png`} alt="공유" />
                        공유
                    </VideoDataShareBtn>
                    <VideoDataMoreBtn flex="h_center">
                        <VideoDataMetaImg src={`${IP}/imgs/more.png`} alt="설정" />
                    </VideoDataMoreBtn>
                </VideoDataMiddleRight>
            </VideoDataMiddle>

            <VideoDataBtn flex="v_start_left">
                <VideoDataBtnMetaData>조회수 {view} {uploadMention}</VideoDataBtnMetaData>
                <br/>스웨덴의 전설적인 재즈 피아니스트 얀 요한손의 두 음반,
                <br/>≪Jazz på svenska≫와 ≪Jazz på ryska≫의 명곡들을 전합니다.
                <br/>…더보기
            </VideoDataBtn>
        </VideoData>
    )
}

export default WatchVideoDataItem