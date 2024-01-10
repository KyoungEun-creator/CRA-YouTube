import React from "react"

const RecommendedVideo = (props) => {

    const { thumbnailImgSrc, runningTime, videoTitle, channelName, view, upload } = props.data

    return (
        <div id="recommendedVideoContainer">
                <div className="recommendedVideoThumbnailBox">
                    <img className="recommendedVideoThumbnail" src={thumbnailImgSrc}/>
                    <div className="time-status"> {runningTime} </div>
                </div>
            <div id="recommendedVideoDataContainer">
                    <h3 className="title"> {videoTitle} </h3>
                    <div>
                        <div className="metadatas"> {channelName} </div>
                        <div className="metadatas"> 조회수 {view} ∙ {upload} </div>
                    </div>
                </div>
        </div>
    )
}
export default RecommendedVideo