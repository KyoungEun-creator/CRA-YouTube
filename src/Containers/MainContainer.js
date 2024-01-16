import React from "react";
import MainVideoItem from "../Components/MainVideoItem";

const MainContainer = (props) => {

    const { setPage } = props
    
    const VideoListData = [
        {
            id: "video_1",
            moveToVideoUrl: "https://www.youtube.com/watch?v=VW-Caeb_0OU&t=2s",
            thumbnailImgSrc: "https://i.ytimg.com/vi/LqME1y6Mlyg/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCxoHJSZG5Jv57PIVNCyxcJ2JfMAg",
            thumbnailVideoSrc: "https://www.youtube.com/embed/VW-Caeb_0OU?si=tLR35RQstitiN9bM",
            runningTime: "7:59:59",
            channelProfileUrl: "https://www.youtube.com/@bossa3047",
            channelProfileImgSrc: "https://yt3.ggpht.com/bMa6Y7qQ6Q0zCt-5M0gxsmHh6gRdU7m4AnJ6LTN1aNxH7nDMNjnB3vucd4sJ_d6olVEMSh-gMg=s68-c-k-c0x00ffffff-no-rj",
            alt: "channelProfile",
            videoTitle: "[𝐖𝐎𝐑𝐊&𝐉𝐀𝐙𝐙] 사무실에서 일하다가 몰래 리듬타기 좋은 펑키한 재즈비지엠😎💖 l Relaxing Jazz Piano Music for Office, Work, Study",
            channelName: "Jazz Melody",
            view: "507회",
            upload: "2023. 9. 18."
        },
        {
            id: "video_2",
            moveToVideoUrl: "https://www.youtube.com/watch?v=x6i3_LfeTjY",
            thumbnailImgSrc: "https://i.ytimg.com/vi/x6i3_LfeTjY/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAqeEw2oAWSEkbU9yzkeWa-Kg21SQ",
            thumbnailVideoSrc: "https://www.youtube.com/embed/x6i3_LfeTjY?si=eSo1PnaI96cQ6tQT",
            runningTime: "4:00:00",
            channelProfileUrl: "https://www.youtube.com/@takealook.",
            channelProfileImgSrc: "https://yt3.ggpht.com/aW-CCbaQ2rbDrEvmpjf630Xhh4wiXEAYs_vZuhX7t3T7tqohQGYl1YzpWNORdJwPin6SMtstyw=s68-c-k-c0x00ffffff-no-rj",
            alt: "channelProfile",
            videoTitle: "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 질리도록 듣는 히트곡엔 그 이유가 있다𝐅𝐞𝐚𝐭. 𝐋𝐚𝐮𝐯, 𝐋𝐚𝐧𝐲, 𝐇𝐨𝐧𝐧𝐞, 𝐤𝐞𝐬𝐡𝐢, 𝐏𝐞𝐝𝐞𝐫 𝐄𝐥𝐢𝐚𝐬, 𝐓𝐫𝐨𝐲𝐞 𝐒𝐢𝐯𝐚𝐧, 𝐂𝐡𝐚𝐫𝐥𝐢𝐞 𝐏𝐮𝐭𝐡",
            channelName: "때껄룩ᴛᴀᴋᴇ ᴀ ʟᴏᴏᴋ",
            view: "621만회",
            upload: "2023. 6. 9."
        },
        {
            id: "video_3",
            moveToVideoUrl: "https://www.youtube.com/watch?v=180ysvIh6kU&t=1s",
            thumbnailImgSrc: "https://i.ytimg.com/vi/180ysvIh6kU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDAwC7NmQpn52EmQ9cd1bA9yVW6Kw",
            thumbnailVideoSrc: "https://www.youtube.com/embed/180ysvIh6kU?si=GdndZ4LjT5TKgvCA",
            runningTime: "59:45",
            channelProfileUrl: "https://www.youtube.com/@Want_To_Be_VanGogh",
            channelProfileImgSrc: "https://yt3.ggpht.com/Lo23b_zLzkxOi2UyFCCWvRPp7jmVv7qLv3yMgEV1hi7iq2Bf9E4tRIDhhfDPeYdO2dNQAgaaAAQ=s88-c-k-c0x00ffffff-no-rj",
            alt: "channelProfile",
            videoTitle: "[Playlist] 비오는 뉴욕 대학교 감성",
            channelName: "반고흐가 되고싶어 Playlist",
            view: "195만회",
            upload: "2024. 1. 1."
        },
        {
            id: "video_4",
            moveToVideoUrl: "https://www.youtube.com/watch?v=F64UhWehLOE",
            thumbnailImgSrc: "https://i.ytimg.com/vi/F64UhWehLOE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvw5VnIhey2cCQAul0A10tt3PmAw",
            thumbnailVideoSrc: "https://www.youtube.com/embed/F64UhWehLOE?si=qwPIK3C6HUTYXThS",
            runningTime: "50:25",
            channelProfileUrl: "https://www.youtube.com/@jazzeditor",
            channelProfileImgSrc: "https://yt3.ggpht.com/ytc/AOPolaSBFQ8BAVyWY5yo-CNlnFmJ3LE_7syzZpjG11lntg=s68-c-k-c0x00ffffff-no-rj",
            alt: "channelProfile",
            videoTitle: "[Playlist] 뉴욕의 가을",
            channelName: "재즈기자 Jazz Editor",
            view: "1.7만회",
            upload: "2023. 9. 16."
        },
        {
            id: "video_5",
            moveToVideoUrl: "https://www.youtube.com/watch?v=81yQY3TseKQ",
            thumbnailImgSrc: "https://i.ytimg.com/vi/81yQY3TseKQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDFPswKeZfkzz2eIs7SdwqlYqFt_g",
            thumbnailVideoSrc: "https://www.youtube.com/embed/81yQY3TseKQ?si=rN3HhloLihAQSlk4",
            runningTime: "21:05",
            channelProfileUrl: "https://www.youtube.com/@DingoMusic",
            channelProfileImgSrc: "https://yt3.ggpht.com/RL_eRSTZjEdc3vAB78wiK6xihSd3wInZ4g1TA3JLzOvxRdJg_2IKqIw8y3CAd03qvgsBb-P5jQ=s68-c-k-c0x00ffffff-no-rj",
            alt: "channelProfile",
            videoTitle: "혼네의 킬링보이스를 라이브로! - free love, Location Unknown, BACK ON TOP, by my side, Warm On A Cold Night, Day 1",
            channelName: "딩고 뮤직 / dingo music",
            view: "223만회",
            upload: "2022. 6. 28."
        },
        { 
            id: "video_6",
            moveToVideoUrl: "https://www.youtube.com/watch?v=ezzDBTX7Z3w",
            thumbnailImgSrc: "https://i.ytimg.com/vi/ezzDBTX7Z3w/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCeowqyOLwCfXVMR4RhNaamOIMn1A",
            thumbnailVideoSrc: "https://www.youtube.com/embed/ezzDBTX7Z3w?si=670s8l40UbIdCITs",
            runningTime: "8:14:31",
            channelProfileUrl: "https://www.youtube.com/@jazzoppa",
            channelProfileImgSrc: "https://yt3.ggpht.com/ayr7hPQ8q04Lms3TZpp9lkZosTjSo4euJ0l_pIyjsC9OhZkqXh7fo7AnHJwmErEiTWBbnoSE=s88-c-k-c0x00ffffff-no-rj",
            alt: "channelProfile",
            videoTitle: "'재진스 pt.III' | 뉴진스 재즈 플리 pt.III [playlist]",
            channelName: "재즈오빠 Jazzoppa",
            view: "27만회",
            upload: "2023. 7. 31."
        },
        {
            id: "video_7",
            moveToVideoUrl: "https://www.youtube.com/watch?v=59qUq5NRMhE&t=26s",
            thumbnailImgSrc: "https://i.ytimg.com/vi/59qUq5NRMhE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBd2puQudZfxhJWV1wAu1AIYCKgLQ",
            thumbnailVideoSrc: "https://www.youtube.com/embed/59qUq5NRMhE?si=qm8miqkROfYD9YvE",
            runningTime: "1:07:38",
            channelProfileUrl: "https://www.youtube.com/@sttaying",
            channelProfileImgSrc: "https://yt3.ggpht.com/v-yQ9UVqUgQlxBwlA2qBPI7_QeqbmgrD7uJQiKK4GIvgmrsJeau059F0uFLTRX3XaopNyEm25w=s68-c-k-c0x00ffffff-no-rj",
            alt: "channelProfile",
            videoTitle: "베이스 매력 모르는 사람 불쌍해",
            channelName: "때잉",
            view: "622만회",
            upload: "2022. 1. 15."
        },
        {
            id: "video_8",
            moveToVideoUrl: "https://www.youtube.com/watch?v=BshkGKR5iL8",
            thumbnailImgSrc: "https://i.ytimg.com/vi/BshkGKR5iL8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCrF7trszfVd--AeD22kDbqfHrcKg",
            thumbnailVideoSrc: "https://www.youtube.com/embed/BshkGKR5iL8?si=Pm2no4ApTQqpyQfM",
            runningTime: "10:09:57",
            channelProfileUrl: "https://www.youtube.com/@moodisjazz",
            channelProfileImgSrc: "https://yt3.ggpht.com/7C7gf_M2SLHMxYY74vn7QPRJuGrc9Ul2ehvf6LXmHDeAVi4-dBiSOGB8bXhMeLz0GYvqzwbk=s68-c-k-c0x00ffffff-no-rj",
            alt: "channelProfile",
            videoTitle: "Playlist | 시원한, 보사노바 재즈",
            channelName: "기분Jazz네 | Mood is Jazz",
            view: "192만회",
            upload: "2022. 7. 16."
        }
    ];

    return (
        <article>
            {
                VideoListData.map((elem) => {
                    return <MainVideoItem key={elem.id} data={elem} setPage={setPage}/>
                })
            }
        </article>
    )
}

export default MainContainer