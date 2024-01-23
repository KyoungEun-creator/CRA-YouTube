import React from "react";
import { styled } from "styled-components";
import UploadMentionModule from "../Modules/UploadMentionModule";

const VideoData = styled.div`
  margin: 10px 0 10px 0;
  width: 930px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 0;
`
const WatchVideoTitle = styled.h1`
  margin-top: 10px;
`
const VideoDataMiddle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const VideoDataMiddleLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
const SubscribeBtn = styled.button`
  background-color: black;
  color: white;
  width: 60px;
  height: 40px;
  border-radius: 20px;
`
const VideoDataMiddleRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 300px;
`
const VideoDataThumbUpBtn = styled.button`
  padding: 10px 15px 10px 15px;
  justify-content: space-between;
  border-radius: 45% 0 0 45%;
  width: 95px;
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  height: 40px;
`
const VideoDataThumbDownBtn = styled.button`
  border-radius: 0 45% 45% 0;
  width: 50px;
  justify-content: center;
  margin-right: 20px;
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  height: 40px;
`
const VideoDataShareBtn = styled.button`
  border-radius: 45%;
  justify-content: center;
  width: 70px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  height: 40px;
`
const VideoDataMoreBtn = styled.button`
  width: 40px;
  border-radius: 50%;
  justify-content: center;  
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  height: 40px;
`
const VideoDataMetaImg = styled.img`
  width: 20px;
  height: 20px;
  margin: 3px 3px 3px 3px;
`
const VideoDataBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  padding: 10px 20px 20px 10px;
  box-sizing: border-box;
  width: 100%;
  height: 120px;
  margin: 20px 0 20px 0;
  background-color: lightgray;
  border-radius: 10px 10px 10px 10px;
`
const VideoDataBottomMetaData = styled.div`
  font-weight: bold;
`

const WatchVideoDataItem = (props) => {

    const { videoTitle, channelName, view, channelProfileUrl, channelProfileImgSrc, alt, subscribers } = props.data;

    const IP = process.env.REACT_APP_IP_URL;

    const uploadMention = UploadMentionModule({ data: props.data });

    return (
        <VideoData id="videoData">
            <WatchVideoTitle>{videoTitle}</WatchVideoTitle>
            <VideoDataMiddle id="videoDataMiddle">
                <VideoDataMiddleLeft id="videoDataMiddleLeft">
                    <a href={channelProfileUrl}>
                        <VideoDataUploaderProfileImg id="videoDataUploaderProfileImg" src={channelProfileImgSrc} alt={alt} />
                    </a>
                    <VideoDataUploader id="videoDataUploader">
                        <h3 id="videoDataChannelName">{channelName}</h3>
                        <h6 id="videoDataSubscribers">구독자 {subscribers}</h6>
                    </VideoDataUploader>
                    <SubscribeBtn id="subscribeBtn">구독</SubscribeBtn>
                </VideoDataMiddleLeft>
                <VideoDataMiddleRight id="videoDataMiddleRight">
                    <VideoDataThumbUpBtn id="videoDataThumbUpBtn" className="videoDataBtns">
                        <VideoDataMetaImg className="videoDataMetaImg" src={`${IP}/imgs/thumb-up.png`} alt="좋아요" />
                        2.1천
                    </VideoDataThumbUpBtn>
                    <VideoDataThumbDownBtn id="videoDataThumbDownBtn" className="videoDataBtns">
                        <VideoDataMetaImg className="videoDataMetaImg" src={`${IP}/imgs/thumb-down.png`} alt="싫어요" />
                    </VideoDataThumbDownBtn>
                    <VideoDataShareBtn id="videoDataShareBtn" className="videoDataBtns">
                        <VideoDataMetaImg className="videoDataMetaImg" src={`${IP}/imgs/share.png`} alt="공유" />
                        공유
                    </VideoDataShareBtn>
                    <VideoDataMoreBtn id="videoDataMoreBtn" className="videoDataBtns">
                        <VideoDataMetaImg className="videoDataMetaImg" src={`${IP}/imgs/more.png`} alt="설정" />
                    </VideoDataMoreBtn>
                </VideoDataMiddleRight>
            </VideoDataMiddle>
            <VideoDataBottom id="videoDataBottom">
                <VideoDataBottomMetaData id="videoDataBottomMetaData">조회수 {view} {uploadMention}</VideoDataBottomMetaData>
                <br/>스웨덴의 전설적인 재즈 피아니스트 얀 요한손의 두 음반,
                <br/>≪Jazz på svenska≫와 ≪Jazz på ryska≫의 명곡들을 전합니다.
                <br/>…더보기
            </VideoDataBottom>
        </VideoData>
    )
}

export default WatchVideoDataItem