import React from "react";
import { styled } from "styled-components";
import { Div } from "../style/LayoutStyle";
import { Span, H3 } from "../style/TextStyle";
import { Img } from "../style/Img";
import UploadMentionModule from "../Modules/UploadMentionModule";

const RecommendedVideoContainer = styled(Div)`
`
const RecommendedVideoThumbnailBox = styled(Div)`
    position: relative;
    z-index: -1;
`
const RecommendedVideoThumbnail = styled(Img)`
    object-fit: cover;
    aspect-ratio: 16 / 9;
    border-radius: 10px;
`
const RecommendedVideoTimeStatus = styled(Span)`
    position: absolute;
    opacity: 0.8;
    display: inline-block; 
    border-radius: 4px;
    bottom: 8px;
    right: 3px;    
    font-weight: 800;
`
const RecommendedVideoDataContainer = styled(Div)`
`
const RecommendedVideoTitle = styled(H3)`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box; 
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`
const RecommendedVideoMetaDatasBox = styled(Div)`
`
const RecommendedVideoMetaDatas = styled(Span)`
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
        <RecommendedVideoContainer 
            height="90px" margin="0 30px 15px 0" flex="h_center">
            <RecommendedVideoThumbnailBox margin="0 10px 0 0">
                <RecommendedVideoThumbnail src={thumbnailImgSrc} alt="추천영상" height="90px" />
                <RecommendedVideoTimeStatus 
                    padding="2px 4px" fontSize="small" color="white" bgColor="black"> {runningTime} </RecommendedVideoTimeStatus>
            </RecommendedVideoThumbnailBox>

            <RecommendedVideoDataContainer width="242px" height="100%" flex="v_between">
                <RecommendedVideoTitle width="100%"> {videoTitle} </RecommendedVideoTitle>
                <RecommendedVideoMetaDatasBox width="100%" flex="v_center">
                    <RecommendedVideoMetaDatas flex="h_start"> {channelName} </RecommendedVideoMetaDatas>
                    <RecommendedVideoMetaDatas flex="h_start"> 조회수 {view} ∙ {uploadMention} </RecommendedVideoMetaDatas>
                </RecommendedVideoMetaDatasBox>
            </RecommendedVideoDataContainer>
        </RecommendedVideoContainer>
    )
}
export default WatchRecommendationItem