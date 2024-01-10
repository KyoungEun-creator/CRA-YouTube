import React from "react"
import Screen from "./Screen"
import VideoDataContainer from "./VideoDataContainer"
import CommentsContainer from "./CommentsContainer"
import RecommendationList from "./RecommendationList"

const Watch = () => {

    const watchVideoData = [
        {
            id: "watchVideoData_1",
            videoTitle: "[Playlist] 비오는 뉴욕 대학교 감성",
            thumbnailImgSrc: "https://i.ytimg.com/vi/BshkGKR5iL8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCrF7trszfVd--AeD22kDbqfHrcKg",
            channelName: "반고흐가 되고싶어 Playlist",
            runningTime: "59:45",
            channelProfileUrl: "https://www.youtube.com/@Want_To_Be_VanGogh",
            channelProfileImgSrc: "https://yt3.ggpht.com/Lo23b_zLzkxOi2UyFCCWvRPp7jmVv7qLv3yMgEV1hi7iq2Bf9E4tRIDhhfDPeYdO2dNQAgaaAAQ=s88-c-k-c0x00ffffff-no-rj",
            view: "195만회",
            upload: "2023. 5. 5.",
            subscribers: "6.11만명"
        }
    ]
    return (
        <div id="watchVideoPage">
            <div>
                {
                    watchVideoData.map((elem) => {
                        return <Screen key={elem.id} data={elem} />
                    })
                }
                {
                    watchVideoData.map((elem) => {
                        return <VideoDataContainer key={elem.id} data={elem} />
                    })
                }
                <CommentsContainer />
            </div>
            <div>
                <RecommendationList />
            </div>
        </div>
        
    )
}

export default Watch