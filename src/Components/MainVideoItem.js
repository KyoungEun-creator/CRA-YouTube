import React from "react";
import UploadMentionModule from "./UploadMentionModule";
import useHover from "../Hooks/useHover"

const MainVideoItem = (props) => {
    const { id, thumbnailImgSrc, thumbnailVideoSrc, runningTime, channelProfileUrl, channelProfileImgSrc, alt, videoTitle, channelName, view } = props.data;
    const { setPage } = props;

    // ------------------- .contents-row-item 호버 이벤트 -------------------
    const [isVideoHovered, videoDisplayBlockEvent, videoDisplayNoneEvent] = useHover(false)

    //  ------------------- .contents-details 호버 이벤트 -------------------
    const [isBtnHovered, detailBtnDisplayBlockEvent, detailBtnDisplayNoneEvent] = useHover(false)

    //  ------------------- 업로드 경과 시간 도출 -------------------
    const uploadMention = UploadMentionModule({ data: props.data });

    //  ------------------- 비디오 시청 페이지로 이동 이벤트 -------------------
    const watchVideoEvent = (videoNum) => {
        setPage(videoNum)
    };

    return (
        <section className="contents-row-item" onMouseOver={videoDisplayBlockEvent} onMouseOut={videoDisplayNoneEvent} onClick={()=>watchVideoEvent(id)}>
            <div className="thumbnail-box">
                <img className="thumbnail" src={thumbnailImgSrc} style={{display: isVideoHovered ? "none" : "block"}} alt="thumbnail" />
                <iframe className="thumbnail-video" style={{display: isVideoHovered ? "block" : "none"}} src={thumbnailVideoSrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <div className="time-status"> {runningTime} </div>
            </div>
            <div className="contents-details" onMouseOver={detailBtnDisplayBlockEvent} onMouseOut={detailBtnDisplayNoneEvent}>
                <a href={channelProfileUrl}>
                    <img className="avatar" src={channelProfileImgSrc} alt={alt}/>
                </a>
                <div className="meta">
                    <h3 className="title"> {videoTitle} </h3>
                    <div>
                        <a href={channelProfileUrl}>
                            <div className="metadatas"> {channelName} </div>
                        </a>
                        <div className="metadatas"> 조회수 {view} ∙ {uploadMention} </div>
                    </div>
                </div>
                <button className="detail-btn a-detail" value="세부사항 설정" style={{display: isBtnHovered ? "block" : "none"}} type="button">
                    <img className="details" src="imgs/ellipsis-vertical-solid.svg" alt={alt}/>
                </button>
            </div>
        </section> 
    )
}

export default MainVideoItem