import React from "react";
import DetailedNavItem from "../Components/DetailedNavItem";

const DetailedNavContainer = (props) => {
    const { isNavOpen } = props
    const { setPage } = props

    const DetailedNavBtnHomeData = [
        {
            id: "DetailedNavBtnHome_1",
            value: "home",
            title: "홈",
            className: "exnav-btn-img",
            imgSrc: "imgs/house-solid.svg", 
            alt: "detailedNavBtn",
            label: "홈", 
        },
        {
            id: "DetailedNavBtnHome_2",
            value: "shorts",
            title: "Shorts",
            className: "exnav-btn-img",
            imgSrc: "imgs/youtube-shorts-logo.svg", 
            alt: "detailedNavBtn",
            label: "Shorts", 
        },
        {
            id: "DetailedNavBtnHome_3",
            value: "subscribe",
            title: "구독",
            className: "exnav-btn-img",
            imgSrc: "imgs/warehouse-solid.svg", 
            alt: "detailedNavBtn",
            label: "구독", 
        },
        {
            id: "DetailedNavBtnHome_4",
            value: "youtubeMusic",
            title: "YouTube Music",
            className: "exnav-btn-img",
            imgSrc: "imgs/database-solid.svg", 
            alt: "detailedNavBtn",
            label: "YouTube Music", 
        },
        {
            id: "DetailedNavBtnHome_5",
            value: "storage",
            title: "보관함",
            className: "exnav-btn-img",
            imgSrc: "imgs/photo-film-solid.svg", 
            alt: "detailedNavBtn",
            label: "보관함", 
        },
        {
            id: "DetailedNavBtnHome_6",
            value: "시청기록",
            title: "시청기록",
            className: "exnav-btn-img",
            imgSrc: "imgs/clock-rotate-left-solid.svg", 
            alt: "detailedNavBtn",
            label: "시청기록", 
        },
        {
            id: "DetailedNavBtnHome_7",
            value: "내 동영상",
            title: "내 동영상",
            className: "exnav-btn-img",
            imgSrc: "imgs/square-caret-right-regular.svg", 
            alt: "detailedNavBtn",
            label: "내 동영상", 
        },
        {
            id: "DetailedNavBtnHome_8",
            value: "내 영화",
            title: "내 영화",
            className: "exnav-btn-img",
            imgSrc: "imgs/clapperboard-solid.svg", 
            alt: "detailedNavBtn",
            label: "내 영화", 
        },
        {
            id: "DetailedNavBtnHome_9",
            value: "나중에 볼 동영상",
            title: "나중에 볼 동영상",
            className: "exnav-btn-img",
            imgSrc: "imgs/clock-regular.svg", 
            alt: "detailedNavBtn",
            label: "나중에 볼 동영상", 
        },
        {
            id: "DetailedNavBtnHome_10",
            value: "오프라인 저장 동영상",
            title: "오프라인 저장 동영상",
            className: "exnav-btn-img",
            imgSrc: "imgs/download-solid.svg", 
            alt: "detailedNavBtn",
            label: "오프라인 저장 동영상", 
        },
        {
            id: "DetailedNavBtnHome_11",
            value: "더보기",
            title: "더보기",
            className: "exnav-btn-img",
            imgSrc: "imgs/angle-down-solid.svg", 
            alt: "detailedNavBtn",
            label: "더보기", 
        }
    ]

    const DetailedNavBtnSubscribeData = [
        {
            id: "DetailedNavBtnSubscribe_1",
            value: "YouTube Music",
            title: "YouTube Music",
            className: "subscribing-channel-img",
            imgSrc: "https://yt3.ggpht.com/bMa6Y7qQ6Q0zCt-5M0gxsmHh6gRdU7m4AnJ6LTN1aNxH7nDMNjnB3vucd4sJ_d6olVEMSh-gMg=s68-c-k-c0x00ffffff-no-rj", 
            alt: "detailedNavBtn",
            label: "Jazz Melody", 
        },
        {
            id: "DetailedNavBtnSubscribe_2",
            value: "YouTube Music",
            title: "YouTube Music",
            className: "subscribing-channel-img",
            imgSrc: "https://yt3.ggpht.com/aW-CCbaQ2rbDrEvmpjf630Xhh4wiXEAYs_vZuhX7t3T7tqohQGYl1YzpWNORdJwPin6SMtstyw=s68-c-k-c0x00ffffff-no-rj", 
            alt: "detailedNavBtn",
            label: "때껄룩ᴛᴀᴋᴇ ᴀ ʟᴏᴏᴋ", 
        },
        {
            id: "DetailedNavBtnSubscribe_3",
            value: "YouTube Music",
            title: "YouTube Music",
            className: "subscribing-channel-img",
            imgSrc: "https://yt3.ggpht.com/Lo23b_zLzkxOi2UyFCCWvRPp7jmVv7qLv3yMgEV1hi7iq2Bf9E4tRIDhhfDPeYdO2dNQAgaaAAQ=s88-c-k-c0x00ffffff-no-rj", 
            alt: "detailedNavBtn",
            label: "반고흐가 되고싶어", 
        },
        {
            id: "DetailedNavBtnSubscribe_4",
            value: "YouTube Music",
            title: "YouTube Music",
            className: "subscribing-channel-img",
            imgSrc: "https://yt3.ggpht.com/ytc/AOPolaSBFQ8BAVyWY5yo-CNlnFmJ3LE_7syzZpjG11lntg=s68-c-k-c0x00ffffff-no-rj", 
            alt: "detailedNavBtn",
            label: "재즈기자 Jazz Editor", 
        },
        {
            id: "DetailedNavBtnSubscribe_5",
            value: "YouTube Music",
            title: "YouTube Music",
            className: "subscribing-channel-img",
            imgSrc: "https://yt3.ggpht.com/RL_eRSTZjEdc3vAB78wiK6xihSd3wInZ4g1TA3JLzOvxRdJg_2IKqIw8y3CAd03qvgsBb-P5jQ=s68-c-k-c0x00ffffff-no-rj", 
            alt: "detailedNavBtn",
            label: "딩고 뮤직 / dingo music", 
        },
        {
            id: "DetailedNavBtnSubscribe_6",
            value: "YouTube Music",
            title: "YouTube Music",
            className: "subscribing-channel-img",
            imgSrc: "https://yt3.ggpht.com/Xo80SrZKXQbOIf3vxV_rbspOArWwdODWrMyQaV_k-xhIKGvCv7h1uPqchD-m8ZDxm59Ix01xxA=s68-c-k-c0x00ffffff-no-rj", 
            alt: "detailedNavBtn",
            label: "재즈오빠 Jazzoppa", 
        },
        {
            id: "DetailedNavBtnSubscribe_7",
            value: "YouTube Music",
            title: "YouTube Music",
            className: "subscribing-channel-img",
            imgSrc: "https://yt3.ggpht.com/v-yQ9UVqUgQlxBwlA2qBPI7_QeqbmgrD7uJQiKK4GIvgmrsJeau059F0uFLTRX3XaopNyEm25w=s68-c-k-c0x00ffffff-no-rj", 
            alt: "detailedNavBtn",
            label: "때잉", 
        },
        {
            id: "DetailedNavBtnSubscribe_8",
            value: "YouTube Music",
            title: "YouTube Music",
            className: "subscribing-channel-img",
            imgSrc: "https://yt3.ggpht.com/7C7gf_M2SLHMxYY74vn7QPRJuGrc9Ul2ehvf6LXmHDeAVi4-dBiSOGB8bXhMeLz0GYvqzwbk=s68-c-k-c0x00ffffff-no-rj", 
            alt: "detailedNavBtn",
            label: "기분Jazz네 | Mood is Jazz", 
        },
        {
            id: "DetailedNavBtnSubscribe_9",
            value: "구독 더보기",
            title: "구독 더보기",
            className: "exnav-btn-img",
            imgSrc: "imgs/angle-down-solid.svg", 
            alt: "detailedNavBtn",
            label: "376개 더보기", 
        }
    ]

    const DetailedNavBtnExploreData = [
        {
            id: "DetailedNavBtnExplore_1",
            value: "인기 급상승",
            title: "인기 급상승",
            className: "exnav-btn-img",
            imgSrc: "imgs/fire-solid.svg", 
            alt: "detailedNavBtn",
            label: "인기 급상승", 
        },
        {
            id: "DetailedNavBtnExplore_2",
            value: "쇼핑",
            title: "쇼핑",
            className: "exnav-btn-img",
            imgSrc: "imgs/bag-shopping-solid.svg", 
            alt: "detailedNavBtn",
            label: "쇼핑", 
        },
        {
            id: "DetailedNavBtnExplore_3",
            value: "음악",
            title: "음악",
            className: "exnav-btn-img",
            imgSrc: "imgs/music-solid.svg", 
            alt: "detailedNavBtn",
            label: "음악", 
        },
        {
            id: "DetailedNavBtnExplore_4",
            value: "영화",
            title: "영화",
            className: "exnav-btn-img",
            imgSrc: "imgs/clapperboard-solid.svg", 
            alt: "detailedNavBtn",
            label: "영화", 
        },
        {
            id: "DetailedNavBtnExplore_5",
            value: "YouTube Music",
            title: "YouTube Music",
            className: "exnav-btn-img",
            imgSrc: "imgs/wifi-solid.svg", 
            alt: "detailedNavBtn",
            label: "실시간", 
        },
        {
            id: "DetailedNavBtnExplore_6",
            value: "게임",
            title: "게임",
            className: "exnav-btn-img",
            imgSrc: "imgs/gamepad-solid.svg", 
            alt: "detailedNavBtn",
            label: "게임", 
        },
        {
            id: "DetailedNavBtnExplore_7",
            value: "스포츠",
            title: "스포츠",
            className: "exnav-btn-img",
            imgSrc: "imgs/medal-solid.svg", 
            alt: "detailedNavBtn",
            label: "스포츠", 
        },
        {
            id: "DetailedNavBtnExplore_8",
            value: "학습",
            title: "학습",
            className: "exnav-btn-img",
            imgSrc: "imgs/lightbulb-regular.svg", 
            alt: "detailedNavBtn",
            label: "학습", 
        }
    ]

    const DetailedNavBtnExtraData = [
        {
            id: "DetailedNavBtnExtra_1",
            value: "YouTube Studio",
            title: "YouTube Studio",
            className: "exnav-btn-img",
            imgSrc: "imgs/youtube-studio.webp", 
            alt: "detailedNavBtn",
            label: "YouTube 스튜디오", 
        },
        {
            id: "DetailedNavBtnExtra_2",
            value: "YouTube Music",
            title: "YouTube Music",
            className: "exnav-btn-img",
            imgSrc: "imgs/youtube-music_icon.png", 
            alt: "detailedNavBtn",
            label: "YouTube Music", 
        },
        {
            id: "DetailedNavBtnExtra_3",
            value: "YouTube Kids",
            title: "YouTube Kids",
            className: "exnav-btn-img",
            imgSrc: "imgs/youtube-kids.png", 
            alt: "detailedNavBtn",
            label: "YouTube Kids", 
        }
    ]

    const DetailedNavBtnSettingData = [
        {
            id: "DetailedNavBtnSetting_1",
            value: "설정",
            title: "설정",
            className: "exnav-btn-img",
            imgSrc: "imgs/gear-solid.svg", 
            alt: "detailedNavBtn",
            label: "설정", 
        },
        {
            id: "DetailedNavBtnSetting_2",
            value: "신고 기록",
            title: "신고 기록",
            className: "exnav-btn-img",
            imgSrc: "imgs/flag-regular.svg", 
            alt: "detailedNavBtn",
            label: "신고 기록", 
        },
        {
            id: "DetailedNavBtnSetting_3",
            value: "고객센터",
            title: "고객센터",
            className: "exnav-btn-img",
            imgSrc: "imgs/circle-question-solid.svg", 
            alt: "detailedNavBtn",
            label: "고객센터", 
        },
        {
            id: "DetailedNavBtnSetting_4",
            value: "의견 보내기",
            title: "의견 보내기",
            className: "exnav-btn-img",
            imgSrc: "imgs/circle-exclamation-solid.svg", 
            alt: "detailedNavBtn",
            label: "의견 보내기", 
        }
    ]
    
    const FooterData = [
        {
            id: "FooterData_1",
            content: "정보 보도자료 저작권 문의하기 크리에이터 광고 개발자"
        },
        {
            id: "FooterData_2",
            content: "약관 개인정보처리방침 정책 및 안전 YouTube 작동의 원리 새로운 기능 테스트하기"
        },
        {
            id: "FooterData_3",
            content: "© 2023 Google LLC, Sundar Pichai, 1600 Amphitheatre Parkway, Mountain View CA 94043, USA, 0807-882-594 (무료), yt-support-solutions-kr@google.com, 호스팅: Google LLC, 사업자정보, 불법촬영물 신고 크리에이터들이 유튜브 상에 게시, 태그 또는 추천한 상품들은 판매자들의 약관에 따라 판매됩니다. 유튜브는 이러한 제품들을 판매하지 않으며, 그에 대한 책임을 지지 않습니다."
        }
    ]

    return (
        <nav id="explicit-nav" style={{ display: isNavOpen ? "block" : "none" }}>
            <section id="sections">
                <div className="guide-section">
                    {
                        DetailedNavBtnHomeData.map((elem) => {
                            return <DetailedNavItem key={elem.id} data={elem} setPage={setPage} />
                        })
                    }
                </div>
                <div className="guide-section">
                    {
                        DetailedNavBtnSubscribeData.map((elem) => {
                            return <DetailedNavItem key={elem.id} data={elem} setPage={setPage} />
                        })
                    }
                </div>
                <div className="guide-section">
                    {
                        DetailedNavBtnExploreData.map((elem) => {
                            return <DetailedNavItem key={elem.id} data={elem} setPage={setPage} />
                        })
                    }
                </div>
                <div className="guide-section">
                    {
                        DetailedNavBtnExtraData.map((elem) => {
                            return <DetailedNavItem key={elem.id} data={elem} setPage={setPage} />
                        })
                    }
                </div>
                <div className="guide-section">
                    {
                        DetailedNavBtnSettingData.map((elem) => {
                            return <DetailedNavItem key={elem.id} data={elem} setPage={setPage} />
                        })
                    }
                </div>
            </section>
            <section id="footer">
                {
                    FooterData.map((elem) => {
                        return <DetailedNavItem key={elem.id} data={elem} />
                    })
                }
            </section>
        </nav>
    )
}

export default DetailedNavContainer