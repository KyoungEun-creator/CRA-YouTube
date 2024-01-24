import React from "react";
import { styled } from "styled-components";
import { Div } from "../style/Div";
import WatchScreenItem from "../Components/WatchScreenItem";
import WatchVideoDataItem from "../Components/WatchVideoDataItem";
import WatchCommentsContainer from "../Containers/WatchCommentsContainer";
import WatchRecommendationContainer from "../Containers/WatchRecommendationContainer";

const WatchVideoPage = styled(Div)`
    z-index: 0;
    margin-left: 40px;
`
const WatchVideoLeftContainer = styled(Div)`
    padding-right: 20px;
`
const RecommendationContainer = styled.div`
    margin-top: 70px;
`

const WatchPage = () => {

    const watchVideoData = [
        {
            id: "watchVideoData_1",
            videoTitle: "[Playlist] 비오는 뉴욕 대학교 감성",
            thumbnailImgSrc: "https://i.ytimg.com/vi/BshkGKR5iL8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCrF7trszfVd--AeD22kDbqfHrcKg",
            channelName: "반고흐가 되고싶어 Playlist",
            runningTime: "59:45",
            channelProfileUrl: "https://www.youtube.com/@Want_To_Be_VanGogh",
            channelProfileImgSrc: "https://yt3.ggpht.com/Lo23b_zLzkxOi2UyFCCWvRPp7jmVv7qLv3yMgEV1hi7iq2Bf9E4tRIDhhfDPeYdO2dNQAgaaAAQ=s88-c-k-c0x00ffffff-no-rj",
            alt: "creatorProfile",
            view: "195만회",
            upload: "2023. 5. 5.",
            subscribers: "6.11만명"
        }
    ]

    return (
        <WatchVideoPage flex="h_row_center">
            <WatchVideoLeftContainer>
                 {
                    watchVideoData.map((elem) => {
                        return <WatchScreenItem key={elem.id} data={elem} />
                    })
                }
                {
                    watchVideoData.map((elem) => {
                        return <WatchVideoDataItem key={elem.id} data={elem} />
                    })
                }
                <WatchCommentsContainer />
            </WatchVideoLeftContainer>
            <RecommendationContainer>
                <WatchRecommendationContainer />
            </RecommendationContainer>
        </WatchVideoPage>     
    )
}

export default WatchPage