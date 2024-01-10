import React from "react"

const VideoDataContainer = (props) => {

    const { videoTitle, channelName, view, upload, channelProfileImgSrc, subscribers } = props.data

    return (
        <article id="videoData">
            <h1>{videoTitle}</h1>
            <div id="videoDataMiddle">
                <div id="videoDataMiddleLeft">
                    <a>
                        <img id="videoDataUploaderProfileImg" src={channelProfileImgSrc} />
                    </a>
                    <div id="videoDataUploader">
                        <h3 id="videoDataChannelName">{channelName}</h3>
                        <h6 id="videoDataSubscribers">구독자 {subscribers}</h6>
                    </div>
                    <button id="subscribeBtn">구독</button>
                </div>
                <div id="videoDataMiddleRight">
                    <button id="videoDataThumbUpBtn" className="videoDataBtns">
                        <img className="videoDataMetaImg" src="imgs/thumb-up.png" />
                        2.1천
                    </button>
                    <button id="videoDataThumbDownBtn" className="videoDataBtns">
                        <img className="videoDataMetaImg" src="imgs/thumb-down.png" />
                    </button>
                    <button id="videoDataShareBtn" className="videoDataBtns">
                        <img className="videoDataMetaImg" src="imgs/share.png" />
                        공유
                    </button>
                    <button id="videoDataMoreBtn" className="videoDataBtns">
                        <img className="videoDataMetaImg" src="imgs/more.png" />
                    </button>
                </div>
            </div>
            <div id="videoDataBottom">
                <div id="videoDataBottomMetaData">조회수 {view} {upload}</div>
                <br/>스웨덴의 전설적인 재즈 피아니스트 얀 요한손의 두 음반,
                <br/>≪Jazz på svenska≫와 ≪Jazz på ryska≫의 명곡들을 전합니다.
                <br/>…더보기
            </div>
        </article>
    )
}

export default VideoDataContainer