import React from "react";
import { styled } from "styled-components";
import { Div, Section  } from "../style/LayoutStyle"
import { P, Span, H3 } from "../style/TextStyle";
import { Button } from "../style/Button";
import { Img } from "../style/Img";
import UploadMentionModule from "../Modules/UploadMentionModule";
import useHover from "../Hooks/useHover";

const ContentItem = styled(Section)`
    object-fit: cover; /* 비율 고정 */
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 310px;
    cursor: pointer;
`
const ThumbnailBox = styled(Div)`
    position: relative;
    z-index: -1;
`
const Thumbnail = styled(Img)`
    object-fit: cover;
    aspect-ratio: 16 / 9; /* 16:9 비율 유지 */
    border-radius: 10px;
`
const ThumbnailVideo = styled.iframe`
    width: 100%;
    aspect-ratio: 16 / 9;
`
const TimeStatus = styled(Span)`
    position: absolute;
    opacity: 0.8;
    display: inline-block; 
    border-radius: 4px;
    bottom: 8px;
    right: 3px;
`
const ContentDetails = styled(Div)`
`
const ChannelProfileImg = styled(Img)`
    border-radius: 50%;
`
const ContentMetaData = styled(Div)`
    display: inline-block;
`
const ContentTitle = styled(H3)`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box; /* 두 줄부터 말줄임표 */
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`
const MainMetaDatas = styled(P)`
    color: #606060;
`
const DetailBtn = styled(Button)`
    border-radius: 50%;
    right: 0;
    &:hover {
        display: block;
  }
`
const DetailBtnImg = styled(Img)`
`

const MainVideoItem = (props) => {
    
    const { thumbnailImgSrc, thumbnailVideoSrc, runningTime, channelProfileUrl, channelProfileImgSrc, alt, videoTitle, channelName, view } = props.data;

    // ------------------- .contents-row-item 호버 이벤트 -------------------
    const [isVideoHovered, videoDisplayBlockEvent, videoDisplayNoneEvent] = useHover(false);

    //  ------------------- .contents-details 호버 이벤트 -------------------
    const [isBtnHovered, detailBtnDisplayBlockEvent, detailBtnDisplayNoneEvent] = useHover(false);

    //  ------------------- 업로드 경과 시간 도출 -------------------
    const uploadMention = UploadMentionModule({ data: props.data });

    return (
        <ContentItem onMouseOver={videoDisplayBlockEvent} onMouseOut={videoDisplayNoneEvent}
            width="313px" margin="0 7px 40px 7px" flex="v_start">
            <ThumbnailBox width="100%">
                {
                    isVideoHovered ?
                        <ThumbnailVideo src={thumbnailVideoSrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        :
                        <Thumbnail src={thumbnailImgSrc} alt="thumbnail" />
                }
                
                
                <TimeStatus 
                    padding="2px 4px" fontSize="small" fontWeight="bold" color="white" bgColor="black" flex="h_center"> {runningTime} </TimeStatus>
            </ThumbnailBox>

            <ContentDetails onMouseOver={detailBtnDisplayBlockEvent} onMouseOut={detailBtnDisplayNoneEvent} 
                width="100%" height="100px" flex="h_between">
                <a href={channelProfileUrl}>
                    <ChannelProfileImg src={channelProfileImgSrc} alt={alt}
                        width="36px" height="36px" margin="12px 12px 0 0" />
                </a>

                <ContentMetaData
                    width="100%" height="100px">
                    <ContentTitle
                        margin="12px 0 4px 0"> {videoTitle} </ContentTitle>
                    <div>
                        <a href={channelProfileUrl}>
                            <MainMetaDatas> {channelName} </MainMetaDatas> 
                        </a>
                        <MainMetaDatas> 조회수 {view} ∙ {uploadMention} </MainMetaDatas>
                    </div>
                </ContentMetaData>

                {
                    isBtnHovered && (
                        <DetailBtn value="세부사항 설정"
                            width="40px" height="40px" padding="0">
                            <DetailBtnImg src="imgs/ellipsis-vertical-solid.svg" alt={alt}
                                width="24px" height="24px" />
                        </DetailBtn>
                    )
                }
            </ContentDetails>
        </ContentItem> 
    )
}

export default MainVideoItem;