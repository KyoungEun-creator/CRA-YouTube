import React from "react";
import { styled } from "styled-components";
import { Div } from "../style/Div";
import UploadMentionModule from "../Modules/UploadMentionModule";

const RecommendedVideoContainer = styled.div`
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 30px 15px 0;
`
const RecommendedVideoThumbnailBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: -1;
  margin-right: 10px;
`
const RecommendedVideoThumbnail = styled.img`
  object-fit: cover;
  height: 90px;
  aspect-ratio: 16 / 9;
  border-radius: 10px;
`
const RecommendedVideoTimeStatus = styled.div`
  position: absolute;
  background-color: black;
  opacity: 0.8;
  display: inline-block; 
  height: 12px;
  padding: 3px 4px;
  border-radius: 4px;
  bottom: 8px;
  right: 3px;
  color: white;
  font-size: 12px;
  font-weight: 800;
`
const RecommendedVideoDataContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const RecommendedVideoTitle = styled.h3`
  color: black;
  font-size: 16px;
  width: 241.73px;
  height: fit-content;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box; 
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
const RecommendedVideoMetaDatas = styled.div`
  color: #606060;
  font-size: 14px;
  width: fit-content;
  height: 20px;
`

const WatchRecommendationItem = (props) => {

    const { thumbnailImgSrc, runningTime, videoTitle, channelName, view } = props.data;
    
    //  ------------------- 업로드 경과 시간 도출 -------------------
    const uploadMention = UploadMentionModule({ data: props.data });

    return (
        <RecommendedVideoContainer id="recommendedVideoContainer">
                <RecommendedVideoThumbnailBox className="recommendedVideoThumbnailBox">
                    <RecommendedVideoThumbnail className="recommendedVideoThumbnail" src={thumbnailImgSrc} alt="추천영상" />
                    <RecommendedVideoTimeStatus className="time-status"> {runningTime} </RecommendedVideoTimeStatus>
                </RecommendedVideoThumbnailBox>
            <RecommendedVideoDataContainer id="recommendedVideoDataContainer">
                    <RecommendedVideoTitle className="recommendedVideoTitle"> {videoTitle} </RecommendedVideoTitle>
                    <div>
                        <RecommendedVideoMetaDatas className="metadatas"> {channelName} </RecommendedVideoMetaDatas>
                        <RecommendedVideoMetaDatas className="metadatas"> 조회수 {view} ∙ {uploadMention} </RecommendedVideoMetaDatas>
                    </div>
                </RecommendedVideoDataContainer>
        </RecommendedVideoContainer>
    )
}
export default WatchRecommendationItem