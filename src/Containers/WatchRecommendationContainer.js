import React from "react";
import { styled } from "styled-components";
import { Div } from "../style/LayoutStyle";
import WatchRecommendationItem from "../Components/WatchRecommendationItem";

const RecommendationContainer = styled(Div)`
`

const WatchRecommendationContainer = () => {

    const RecommendationVideosData = [
        {
            id: "RecommendationVideo_1",
            thumbnailImgSrc: "https://i.ytimg.com/vi/LqME1y6Mlyg/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCxoHJSZG5Jv57PIVNCyxcJ2JfMAg",
            runningTime: "7:59:59",
            videoTitle: "[𝐖𝐎𝐑𝐊&𝐉𝐀𝐙𝐙] 사무실에서 일하다가 몰래 리듬타기 좋은 펑키한 재즈비지엠😎💖 l Relaxing Jazz Piano Music for Office, Work, Study",
            channelName: "Jazz Melody",
            view: "507회",
            upload: "2023. 9. 18."
        },
        {
            id: "RecommendationVideo_2",
            thumbnailImgSrc: "https://i.ytimg.com/vi/x6i3_LfeTjY/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAqeEw2oAWSEkbU9yzkeWa-Kg21SQ",
            runningTime: "4:00:00",
            videoTitle: "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 질리도록 듣는 히트곡엔 그 이유가 있다𝐅𝐞𝐚𝐭. 𝐋𝐚𝐮𝐯, 𝐋𝐚𝐧𝐲, 𝐇𝐨𝐧𝐧𝐞, 𝐤𝐞𝐬𝐡𝐢, 𝐏𝐞𝐝𝐞𝐫 𝐄𝐥𝐢𝐚𝐬, 𝐓𝐫𝐨𝐲𝐞 𝐒𝐢𝐯𝐚𝐧, 𝐂𝐡𝐚𝐫𝐥𝐢𝐞 𝐏𝐮𝐭𝐡",
            channelName: "때껄룩ᴛᴀᴋᴇ ᴀ ʟᴏᴏᴋ",
            view: "621만회",
            upload: "2023. 6. 9."
        },
        {
            id: "RecommendationVideo_3",
            thumbnailImgSrc: "https://i.ytimg.com/vi/180ysvIh6kU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDAwC7NmQpn52EmQ9cd1bA9yVW6Kw",
            runningTime: "59:45",
            videoTitle: "[Playlist] 비오는 뉴욕 대학교 감성",
            channelName: "반고흐가 되고싶어 Playlist",
            view: "195만회",
            upload: "2024. 1. 1."
        },
        {
            id: "RecommendationVideo_4",
            thumbnailImgSrc: "https://i.ytimg.com/vi/81yQY3TseKQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDFPswKeZfkzz2eIs7SdwqlYqFt_g",
            runningTime: "21:05",
            videoTitle: "혼네의 킬링보이스를 라이브로! - free love, Location Unknown, BACK ON TOP, by my side, Warm On A Cold Night, Day 1",
            channelName: "딩고 뮤직 / dingo music",
            view: "223만회",
            upload: "2022. 6. 28."
        },
        {
            id: "RecommendationVideo_5",
            thumbnailImgSrc: "https://i.ytimg.com/vi/59qUq5NRMhE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBd2puQudZfxhJWV1wAu1AIYCKgLQ",
            runningTime: "1:07:38",
            videoTitle: "베이스 매력 모르는 사람 불쌍해",
            channelName: "때잉",
            view: "622만회",
            upload: "2022. 1. 15."
        },
        {
            id: "RecommendationVideo_6",
            thumbnailImgSrc: "https://i.ytimg.com/vi/BshkGKR5iL8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCrF7trszfVd--AeD22kDbqfHrcKg",
            runningTime: "10:09:57",
            videoTitle: "Playlist | 시원한, 보사노바 재즈",
            channelName: "기분Jazz네 | Mood is Jazz",
            view: "192만회",
            upload: "2022. 7. 16."
        },
        {
            id: "RecommendationVideo_7",
            thumbnailImgSrc: "https://i.ytimg.com/vi/LqME1y6Mlyg/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCxoHJSZG5Jv57PIVNCyxcJ2JfMAg",
            runningTime: "7:59:59",
            videoTitle: "[𝐖𝐎𝐑𝐊&𝐉𝐀𝐙𝐙] 사무실에서 일하다가 몰래 리듬타기 좋은 펑키한 재즈비지엠😎💖 l Relaxing Jazz Piano Music for Office, Work, Study",
            channelName: "Jazz Melody",
            view: "507회",
            upload: "2023. 9. 18."
        },
        {
            id: "RecommendationVideo_8",
            thumbnailImgSrc: "https://i.ytimg.com/vi/x6i3_LfeTjY/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAqeEw2oAWSEkbU9yzkeWa-Kg21SQ",
            runningTime: "4:00:00",
            videoTitle: "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 질리도록 듣는 히트곡엔 그 이유가 있다𝐅𝐞𝐚𝐭. 𝐋𝐚𝐮𝐯, 𝐋𝐚𝐧𝐲, 𝐇𝐨𝐧𝐧𝐞, 𝐤𝐞𝐬𝐡𝐢, 𝐏𝐞𝐝𝐞𝐫 𝐄𝐥𝐢𝐚𝐬, 𝐓𝐫𝐨𝐲𝐞 𝐒𝐢𝐯𝐚𝐧, 𝐂𝐡𝐚𝐫𝐥𝐢𝐞 𝐏𝐮𝐭𝐡",
            channelName: "때껄룩ᴛᴀᴋᴇ ᴀ ʟᴏᴏᴋ",
            view: "621만회",
            upload: "2023. 6. 9."
        },
        {
            id: "RecommendationVideo_9",
            thumbnailImgSrc: "https://i.ytimg.com/vi/180ysvIh6kU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDAwC7NmQpn52EmQ9cd1bA9yVW6Kw",
            runningTime: "59:45",
            videoTitle: "[Playlist] 비오는 뉴욕 대학교 감성",
            channelName: "반고흐가 되고싶어 Playlist",
            view: "195만회",
            upload: "2024. 1. 1."
        },
        {
            id: "RecommendationVideo_10",
            thumbnailImgSrc: "https://i.ytimg.com/vi/81yQY3TseKQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDFPswKeZfkzz2eIs7SdwqlYqFt_g",
            runningTime: "21:05",
            videoTitle: "혼네의 킬링보이스를 라이브로! - free love, Location Unknown, BACK ON TOP, by my side, Warm On A Cold Night, Day 1",
            channelName: "딩고 뮤직 / dingo music",
            view: "223만회",
            upload: "2022. 6. 28."
        },
        {
            id: "RecommendationVideo_11",
            thumbnailImgSrc: "https://i.ytimg.com/vi/59qUq5NRMhE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBd2puQudZfxhJWV1wAu1AIYCKgLQ",
            runningTime: "1:07:38",
            videoTitle: "베이스 매력 모르는 사람 불쌍해",
            channelName: "때잉",
            view: "622만회",
            upload: "2022. 1. 15."
        },
        {
            id: "RecommendationVideo_12",
            thumbnailImgSrc: "https://i.ytimg.com/vi/BshkGKR5iL8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCrF7trszfVd--AeD22kDbqfHrcKg",
            runningTime: "10:09:57",
            videoTitle: "Playlist | 시원한, 보사노바 재즈",
            channelName: "기분Jazz네 | Mood is Jazz",
            view: "192만회",
            upload: "2022. 7. 16."
        }
    ];

    return (
        <RecommendationContainer 
            margin="70px 0 0 0" flex="v_center">
            {
                RecommendationVideosData.map((elem) => {
                    return <WatchRecommendationItem key={elem.id} data={elem} />
                })
            }
        </RecommendationContainer>
    )
}

export default WatchRecommendationContainer