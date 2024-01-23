import React from "react";
import { styled } from "styled-components";
import UploadMentionModule from "../Modules/UploadMentionModule";
import useHover from "../Hooks/useHover";

const ContentItem = styled.section`
  width: 313px;
  object-fit: cover; /* 비율 고정 */
  margin: 0 7px 40px 7px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 310px;
  cursor: pointer;
`
const ThumbnailBox = styled.div`
  position: relative;
  z-index: -1;
`
const Thumbnail = styled.img`
  object-fit: cover;
  width: 100%;
  aspect-ratio: 16 / 9; /* 16:9 비율 유지 */
  border-radius: 10px;
`
const ThumbnailVideo = styled.iframe`
  width: 100%;
  aspect-ratio: 16 / 9;
`
const TimeStatus = styled.div`
  position: absolute;
  background-color: black;
  opacity: 0.8;
  display: inline-block; /* 내용에 맞는 width 길이 갖도록 */
  height: 12px;
  padding: 3px 4px;
  border-radius: 4px;
  bottom: 8px;
  right: 3px;
  color: white;
  font-size: 12px;
  font-weight: 800;
`
const ContentDetails = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px; /* 고정 */
  justify-content: space-between;
`
const ChannelProfileImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin: 12px 12px 0 0;
`
const ContentMetaData = styled.div`
  display: inline-block;
  width: 100%;
  height: 100px;
`
const ContentTitle = styled.h3`
  color: black;
  font-size: 16px;
  width: 241.73px;
  height: fit-content;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 12px 0 4px 0;
  display: -webkit-box; /* 두 줄부터 말줄임표 */
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
const DetailBtn = styled.button`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 0;
  right: 0;
`
const DetailBtnImg = styled.img`
  width: 24px;
  height: 24px;
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
        <ContentItem className="contents-row-item" onMouseOver={videoDisplayBlockEvent} onMouseOut={videoDisplayNoneEvent}>
            <ThumbnailBox className="thumbnail-box">
                <Thumbnail className="thumbnail" src={thumbnailImgSrc} style={{display: isVideoHovered ? "none" : "block"}} alt="thumbnail" />
                <ThumbnailVideo className="thumbnail-video" style={{display: isVideoHovered ? "block" : "none"}} src={thumbnailVideoSrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></ThumbnailVideo>
                <TimeStatus className="time-status"> {runningTime} </TimeStatus>
            </ThumbnailBox>
            <ContentDetails className="contents-details" onMouseOver={detailBtnDisplayBlockEvent} onMouseOut={detailBtnDisplayNoneEvent}>
                <a href={channelProfileUrl}>
                    <ChannelProfileImg className="avatar" src={channelProfileImgSrc} alt={alt}/>
                </a>
                <ContentMetaData className="meta">
                    <ContentTitle className="title"> {videoTitle} </ContentTitle>
                    <div>
                        <a href={channelProfileUrl} className="metadatas">
                            <span className="metadatas">{channelName}</span> 
                        </a>
                        <div className="metadatas"> 조회수 {view} ∙ {uploadMention} </div>
                    </div>
                </ContentMetaData>
                <DetailBtn className="detail-btn a-detail" value="세부사항 설정" style={{display: isBtnHovered ? "block" : "none"}} type="button">
                    <DetailBtnImg className="details" src="imgs/ellipsis-vertical-solid.svg" alt={alt}/>
                </DetailBtn>
            </ContentDetails>
        </ContentItem> 
    )
}

export default MainVideoItem