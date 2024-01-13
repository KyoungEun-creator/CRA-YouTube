import React from "react";

const MainVideoItem = (props) => {
    const { id, thumbnailImgSrc, thumbnailVideoSrc, runningTime, channelProfileUrl, channelProfileImgSrc, videoTitle, channelName, view, upload } = props.data;
    const { setPage } = props

    // ------------------- .contents-row-item 호버 이벤트 -------------------
    const [isVideoVisible, setIsVideoVisible] = React.useState(false)

    const videoDisplayBlockEvent = () => {
        setIsVideoVisible(true)
    }
    const videoDisplayNoneEvent = () => {
        setIsVideoVisible(false)
    }

    // ------------------- .contents-details 호버 이벤트 -------------------
    const [isDetailBtnVisible, setIsDetailBtnVisible] = React.useState(false)

    const detailBtnDisplayBlockEvent = () => {
        setIsDetailBtnVisible(true)
    }
    const detailBtnDisplayNoneEvent = () => {
        setIsDetailBtnVisible(false)
    }

    // ------------------- upload 시점과 현시점 간의 차이 계산을 통한 경과기간 도출 모듈 -------------------
    const now = new Date()
    const currentYear = now.getFullYear()
    const currentMonth = now.getMonth()+1
    const currentDate = now.getDate()

    let uploadMention = ""
    const uploadYear = upload.split('.')[0]
    const uploadMonth = upload.split('.')[1]
    const uploadDate = upload.split('.')[2]

    if (currentYear - uploadYear > 0) {
        uploadMention = `${currentYear - uploadYear}년 전`
    }
    else if (currentMonth - uploadMonth > 0) {
        uploadMention = `${currentMonth - uploadMonth}개월 전`
    }
    else if (currentDate - uploadDate > 0) {
        uploadMention = `${currentDate - uploadDate}일 전`
    }

    const watchVideoEvent = (videoNum) => {
        setPage(videoNum)
    }

    return (
        <section className="contents-row-item" onMouseOver={videoDisplayBlockEvent} onMouseOut={videoDisplayNoneEvent} onClick={()=>watchVideoEvent(id)}>
            {/*<a href={moveToVideoUrl}>*/}
                <div className="thumbnail-box">
                    <img className="thumbnail" src={thumbnailImgSrc} style={{display: isVideoVisible ? "none" : "block"}}/>
                    <iframe className="thumbnail-video" style={{display: isVideoVisible ? "block" : "none"}} src={thumbnailVideoSrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <div className="time-status"> {runningTime} </div>
                </div>
            {/*</a>*/}
            <div className="contents-details" onMouseOver={detailBtnDisplayBlockEvent} onMouseOut={detailBtnDisplayNoneEvent}>
                <a href={channelProfileUrl}>
                    <img className="avatar" src={channelProfileImgSrc} />
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
                <button className="detail-btn a-detail" value="세부사항 설정" style={{display: isDetailBtnVisible ? "block" : "none"}} type="button">
                    <img className="details" src="imgs/ellipsis-vertical-solid.svg" />
                </button>
            </div>
        </section> 
    )
}

export default MainVideoItem