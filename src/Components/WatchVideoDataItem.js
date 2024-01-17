import React from "react";
import UploadMentionModule from "./UploadMentionModule";

const WatchVideoDataItem = (props) => {

    const { videoTitle, channelName, view, channelProfileUrl, channelProfileImgSrc, alt, subscribers } = props.data;

    const IP = process.env.REACT_APP_IP_URL;

    const uploadMention = UploadMentionModule({ data: props.data });

    return (
        <article id="videoData">
            <h1>{videoTitle}</h1>
            <div id="videoDataMiddle">
                <div id="videoDataMiddleLeft">
                    <a href={channelProfileUrl}>
                        <img id="videoDataUploaderProfileImg" src={channelProfileImgSrc} alt={alt} />
                    </a>
                    <div id="videoDataUploader">
                        <h3 id="videoDataChannelName">{channelName}</h3>
                        <h6 id="videoDataSubscribers">구독자 {subscribers}</h6>
                    </div>
                    <button id="subscribeBtn">구독</button>
                </div>
                <div id="videoDataMiddleRight">
                    <button id="videoDataThumbUpBtn" className="videoDataBtns">
                        <img className="videoDataMetaImg" src={`${IP}/imgs/thumb-up.png`} alt="좋아요" />
                        2.1천
                    </button>
                    <button id="videoDataThumbDownBtn" className="videoDataBtns">
                        <img className="videoDataMetaImg" src={`${IP}/imgs/thumb-down.png`} alt="싫어요" />
                    </button>
                    <button id="videoDataShareBtn" className="videoDataBtns">
                        <img className="videoDataMetaImg" src={`${IP}/imgs/share.png`} alt="공유" />
                        공유
                    </button>
                    <button id="videoDataMoreBtn" className="videoDataBtns">
                        <img className="videoDataMetaImg" src={`${IP}/imgs/more.png`} alt="설정" />
                    </button>
                </div>
            </div>
            <div id="videoDataBottom">
                <div id="videoDataBottomMetaData">조회수 {view} {uploadMention}</div>
                <br/>스웨덴의 전설적인 재즈 피아니스트 얀 요한손의 두 음반,
                <br/>≪Jazz på svenska≫와 ≪Jazz på ryska≫의 명곡들을 전합니다.
                <br/>…더보기
            </div>
        </article>
    )
}

export default WatchVideoDataItem