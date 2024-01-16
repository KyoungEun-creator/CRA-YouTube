import React from "react";
import UploadMentionModule from "./UploadMentionModule";

const WatchRecommendationItem = (props) => {

    const { thumbnailImgSrc, runningTime, videoTitle, channelName, view } = props.data
    
    //  ------------------- 업로드 경과 시간 도출 -------------------
    const uploadMention = UploadMentionModule({ data: props.data })

    return (
        <div id="recommendedVideoContainer">
                <div className="recommendedVideoThumbnailBox">
                    <img className="recommendedVideoThumbnail" src={thumbnailImgSrc}/>
                    <div className="time-status"> {runningTime} </div>
                </div>
            <div id="recommendedVideoDataContainer">
                    <h3 className="recommendedVideoTitle"> {videoTitle} </h3>
                    <div>
                        <div className="metadatas"> {channelName} </div>
                        <div className="metadatas"> 조회수 {view} ∙ {uploadMention} </div>
                    </div>
                </div>
        </div>
    )
}
export default WatchRecommendationItem