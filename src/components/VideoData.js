import React from "react"

const VideoData = () => {
    return (
        <article id="videoData">
            <h1>[Playlist] 2023년 너무나 많은 사랑받은 팝송 결산 Best Songs of 2023</h1>
            <div id="videoDataMiddle">
                <div id="videoDataMiddleLeft">
                    <a>
                        <img id="videoDataUploaderProfileImg" src="https://yt3.ggpht.com/Lo23b_zLzkxOi2UyFCCWvRPp7jmVv7qLv3yMgEV1hi7iq2Bf9E4tRIDhhfDPeYdO2dNQAgaaAAQ=s88-c-k-c0x00ffffff-no-rj" />
                    </a>
                    <div id="videoDataUploader">
                        <h3 id="videoDataChannelName">반고흐가 되고싶어 Playlist</h3>
                        <h6 id="videoDataSubscribers">구독자 6.11만명</h6>
                    </div>
                    <button id="subscribeBtn">구독</button>
                </div>
                <div id="videoDataMiddleRight">
                    <button id="videoDataThumbUpBtn">
                        <img class="videoDataMetaImg" src="imgs/thumb-up.png" />
                        2.1천
                    </button>
                    <button id="videoDataThumbDownBtn">
                        <img class="videoDataMetaImg" src="imgs/thumb-down.png" />
                    </button>
                    <button id="videoDataShareBtn">
                        <img class="videoDataMetaImg" src="imgs/share.png" />
                    </button>
                    <button id="videoDataMoreBtn">
                        <img class="videoDataMetaImg" src="imgs/more.png" />
                    </button>

                </div>
            </div>
            <div id="videoDataBottom">

            </div>
        </article>
    )
}

export default VideoData