import React from "react";
import { styled } from "styled-components";
import { Div, Section } from "../style/LayoutStyle";
import WatchScreenContainer from "../Containers/WatchScreenContainer";
import WatchVideoDataItem from "../Components/WatchVideoDataItem";
import WatchCommentsContainer from "../Containers/WatchCommentsContainer";
import WatchRecommendationContainer from "../Containers/WatchRecommendationContainer";

const WatchVideoPage = styled(Div)`
    z-index: 0;
`
const WatchVideoLeftContainer = styled(Section)`
`

const WatchPage = () => {

    const watchVideoData = [
        {
            id: "watchVideoData_1",
            videoTitle: "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 질리도록 듣는 히트곡엔 그 이유가 있다𝐅𝐞𝐚𝐭. 𝐋𝐚𝐮𝐯, 𝐋𝐚𝐧𝐲, 𝐇𝐨𝐧𝐧𝐞, 𝐤𝐞𝐬𝐡𝐢, 𝐏𝐞𝐝𝐞𝐫 𝐄𝐥𝐢𝐚𝐬, 𝐓𝐫𝐨𝐲𝐞 𝐒𝐢𝐯𝐚𝐧, 𝐂𝐡𝐚𝐫𝐥𝐢𝐞 𝐏𝐮𝐭𝐡",
            thumbnailImgSrc: "https://i.ytimg.com/vi/x6i3_LfeTjY/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAqeEw2oAWSEkbU9yzkeWa-Kg21SQ",
            channelName: "때껄룩ᴛᴀᴋᴇ ᴀ ʟᴏᴏᴋ",
            runningTime: "4:00:00",
            channelProfileUrl: "https://www.youtube.com/@takealook.",
            channelProfileImgSrc: "https://yt3.ggpht.com/aW-CCbaQ2rbDrEvmpjf630Xhh4wiXEAYs_vZuhX7t3T7tqohQGYl1YzpWNORdJwPin6SMtstyw=s68-c-k-c0x00ffffff-no-rj",
            alt: "creatorProfile",
            view: "621만회",
            upload: "2023. 6. 9.",
            subscribers: "162만명"
        }
    ]

    return (
        <WatchVideoPage 
            margin="0 0 0 40px" flex="h_between_left">
            <WatchVideoLeftContainer 
                margin="70px 0 0 0" padding="0 20px 0 0" flex="v_start"> 
                 {
                    watchVideoData.map((elem) => {
                        return <WatchScreenContainer key={elem.id} data={elem} />
                    })
                }
                {
                    watchVideoData.map((elem) => {
                        return <WatchVideoDataItem key={elem.id} data={elem} />
                    })
                }
                <WatchCommentsContainer />
            </WatchVideoLeftContainer>
            
            <WatchRecommendationContainer />
        </WatchVideoPage>     
    )
}

export default WatchPage