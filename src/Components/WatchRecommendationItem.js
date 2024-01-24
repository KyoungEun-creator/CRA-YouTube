import React from "react";
import { styled } from "styled-components";
import { Div } from "../style/Div";
import UploadMentionModule from "../Modules/UploadMentionModule";

const RecommendedVideoContainer = styled(Div)`
    height: 90px;
    margin: 0 30px 15px 0;
`
const RecommendedVideoThumbnailBox = styled(Div)`
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
const RecommendedVideoDataContainer = styled(Div)`
    height: 100%;
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
const RecommendedVideoMetaDatasBox = styled(Div)`
    width: 100%;
`
const RecommendedVideoMetaDatas = styled.div`
    color: #606060;
    font-size: 14px;
    width: 100%;
    height: 20px;
`

const WatchRecommendationItem = (props) => {

    const { thumbnailImgSrc, runningTime, videoTitle, channelName, view } = props.data;
    
    //  ------------------- 업로드 경과 시간 도출 -------------------
    const uploadMention = UploadMentionModule({ data: props.data });

    return (
        <RecommendedVideoContainer flex="h_center">
                <RecommendedVideoThumbnailBox>
                    <RecommendedVideoThumbnail src={thumbnailImgSrc} alt="추천영상" />
                    <RecommendedVideoTimeStatus> {runningTime} </RecommendedVideoTimeStatus>
                </RecommendedVideoThumbnailBox>
            <RecommendedVideoDataContainer flex="v_between">
                    <RecommendedVideoTitle> {videoTitle} </RecommendedVideoTitle>
                    <RecommendedVideoMetaDatasBox flex="v_start">
                        <RecommendedVideoMetaDatas className="metadatas"> {channelName} </RecommendedVideoMetaDatas>
                        <RecommendedVideoMetaDatas className="metadatas"> 조회수 {view} ∙ {uploadMention} </RecommendedVideoMetaDatas>
                    </RecommendedVideoMetaDatasBox>
                </RecommendedVideoDataContainer>
        </RecommendedVideoContainer>
    )
}
export default WatchRecommendationItem