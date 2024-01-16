import React from "react";
// import { Link } from "react-router-dom"
import HeaderHoverAlertItem from "../Components/HeaderHoverAlertItem";

const HeaderContainer = (props) => {
    
    const { isNavOpen, setIsNavOpen } = props

    const HeaderMiddleItemData = [
        {
            id: "HeaderMiddleItem_1",
            idName: "magnifyingGlassBtn",
            imgClassName: "magnifyingGlassBtnImg",
            imgSrc: "imgs/magnifying-glass-solid.svg",
            alt: "middleHeaderBtn",
            tagContent: "검색"
        },
        {
            id: "HeaderMiddleItem_2",
            idName: "microphoneBtn",
            imgClassName: "microphone",
            imgSrc: "imgs/microphone-solid.svg",
            alt: "middleHeaderBtn",
            tagContent: "음성으로 검색"
        }
    ]

    const HeaderRightItemData = [
        {
            id: "HeaderRightItem_1",
            idName: "uploadBtn",
            imgClassName: "headerRightIcons",
            imgSrc: "imgs/video-solid.svg",
            alt: "rightHeaderBtn",
            tagContent: "만들기",
        },
        {
            id: "HeaderRightItem_2",
            idName: "alarmBtn",
            imgClassName: "headerRightIcons",
            imgSrc: "imgs/bell-regular.svg",
            alt: "rightHeaderBtn",
            tagContent: "알림",
            alarmNum: "9+"
        },
        {
            id: "HeaderRightItem_3",
            idName: "profileBtn",
            imgId: "profileImg",
            imgClassName: "headerRightIcons",
            imgSrc: "https://yt3.ggpht.com/ytc/AOPolaR8cvVX4lWqRCFMDreXwkxAGUSkd8i-gOk2rmgg80Vag4G8-_Ayo5c9L2NduuJn=s88-c-k-c0x00ffffff-no-rj",
            alt: "rightHeaderBtn",
        }
    ]

    // ------------------- #navOpenBtn 클릭 이벤트 -------------------
    const navOpenEvent = () => {
        setIsNavOpen(!isNavOpen)
    }

    return (
        <header>
            <div id="headerLeft">
                <button id="navOpenBtn" onClick={navOpenEvent}>
                    <img id="navOpenBtnImg" src="imgs/bars-solid.svg" alt="navigation 열기" />
                </button>
                <a href="https://www.youtube.com/" title="youtube">
                    <img id="youtubePremiumLogo" src="imgs/YouTube_Premium_logo.svg" alt="Youtube 홈" />
                    <span id="countryCode">KR</span>
                </a>
            </div>
            <div id="headerMiddle">
                <span id="searchBar">
                    <div id="searchText">
                        <input id="searchInput" type="text" placeholder="검색" />
                        <button id="searchTypingBtn" type="button">
                            <img id="searchKeyboard" src="https://www.gstatic.com/inputtools/images/tia.png" alt="검색하기"/>
                        </button>
                    </div>
                    {
                        HeaderMiddleItemData.map((elem) => {
                            return <HeaderHoverAlertItem key={elem.id} data={elem}/>
                        })
                    }
                </span> 
            </div>
            <div id="headerRight">
                {
                    HeaderRightItemData.map((elem) => {
                        return <HeaderHoverAlertItem key={elem.id} data={elem} isHover/>
                    })
                }
            </div>
        </header>
    )
}

export default HeaderContainer