import React from "react";
import { styled } from "styled-components";
import { Div } from "../style/LayoutStyle";
import { H1 } from "../style/TextStyle";
import { Button } from "../style/Button";
import { Img } from "../style/Img";
import UploadMentionModule from "../Modules/UploadMentionModule";

const VideoData = styled(Div)`
`
const WatchVideoTitle = styled(H1)`
`
const VideoDataMiddle = styled(Div)`
`
const VideoDataMiddleLeft = styled(Div)`
`
const VideoDataUploaderProfileImg = styled(Img)`
    border-radius: 50%;
`
const VideoDataUploader = styled(Div)`
`
const SubscribeBtn = styled(Button)`
    border-radius: 20px;
`
const VideoDataMiddleRight = styled(Div)`
`
const VideoDataThumbUpBtn = styled(Button)`
    border-radius: 45% 0 0 45%;
    border: 1px solid lightgray;
    &:hover {
        background-color: lightgray;
    }
`
const VideoDataThumbDownBtn = styled(Button)`
    border-radius: 0 45% 45% 0;
    border: 1px solid lightgray;
    &:hover {
        background-color: lightgray;
    }
`
const VideoDataShareBtn = styled(Button)`
    border-radius: 45%;
    border: 1px solid lightgray;
    &:hover {
        background-color: lightgray;
    }
`
const VideoDataMoreBtn = styled(Button)`
    border-radius: 50%;
    border: 1px solid lightgray;
    &:hover {
        background-color: lightgray;
    }
`
const VideoDataMetaImg = styled(Img)`
    width: 20px;
    height: 20px;
    margin: 3px;
`
const VideoDataBtn = styled(Div)`
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
        <VideoData 
            margin="10px 0 10px 0" width="930px" padding="0" flex="v_start">
            <WatchVideoTitle
                margin="10px 0 0 0" > {videoTitle} </WatchVideoTitle>

            <VideoDataMiddle 
                width="100%" flex="h_between">

                <VideoDataMiddleLeft flex="h_between">
                    <a href={channelProfileUrl}>
                        <VideoDataUploaderProfileImg src={channelProfileImgSrc} alt={alt}
                            width="40px" height="40px" margin="0 12px 0 0" />
                    </a>
                    <VideoDataUploader
                        margin="0 12px 0 0" flex="v_start_left">
                        <h3> {channelName} </h3>
                        <h6> 구독자 {subscribers} </h6>
                    </VideoDataUploader>
                    <SubscribeBtn 
                        width="60px" height="40px" deco="black"> 구독 </SubscribeBtn>
                </VideoDataMiddleLeft>

                <VideoDataMiddleRight 
                    width="300px" flex="h_center">
                    <VideoDataThumbUpBtn 
                        width="95px" height="40px" padding="10px 15px 10px 15px" flex="h_between">
                        <VideoDataMetaImg src={`${IP}/imgs/thumb-up.png`} alt="좋아요" />
                        2.1천
                    </VideoDataThumbUpBtn>
                    <VideoDataThumbDownBtn 
                        width="50px" height="40px" margin="0 20px 0 0" flex="h_center">
                        <VideoDataMetaImg src={`${IP}/imgs/thumb-down.png`} alt="싫어요" />
                    </VideoDataThumbDownBtn>
                    <VideoDataShareBtn 
                        width="70px" height="40px" margin="0 20px 0 0" flex="h_center">
                        <VideoDataMetaImg src={`${IP}/imgs/share.png`} alt="공유" />
                        공유
                    </VideoDataShareBtn>
                    <VideoDataMoreBtn 
                        width="40px" height="40px" flex="h_center">
                        <VideoDataMetaImg src={`${IP}/imgs/more.png`} alt="설정" />
                    </VideoDataMoreBtn>
                </VideoDataMiddleRight>

            </VideoDataMiddle>

            <VideoDataBtn 
                width="100%" height="120px" padding="10px 20px 20px 10px" margin="20px 0 20px 0" flex="v_start_left">
                <VideoDataBtnMetaData>조회수 {view} {uploadMention}</VideoDataBtnMetaData>
                <br/>스웨덴의 전설적인 재즈 피아니스트 얀 요한손의 두 음반,
                <br/>≪Jazz på svenska≫와 ≪Jazz på ryska≫의 명곡들을 전합니다.
                <br/>…더보기
            </VideoDataBtn>
        </VideoData>
    )
}

export default WatchVideoDataItem