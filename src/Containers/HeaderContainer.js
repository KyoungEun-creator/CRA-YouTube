import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Button } from "../style/Button";
<<<<<<< HEAD
import { Div } from "../style/Div";
import { Input } from "../style/Input";
import { Span } from "../style/Span";
=======
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
import HeaderHoverAlertItem from "../Components/HeaderHoverAlertItem";

const Header = styled.header`
  top: 0;
  position: fixed;
<<<<<<< HEAD
  width: 100vw;
  height: 56px;
  padding: 0 16px;
  display: flex;
=======
  display: flex;
  width: 100vw;
  height: 56px;
  padding: 0 16px;
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
  justify-content: space-between;
  align-items: center;
  background-color: white;
  z-index: 100;
`
<<<<<<< HEAD
const HeaderLeft = styled(Div)`
`
const NavOpenBtn = styled(Button)`
    border-radius: 50%;
    &:hover {
        background-color: lightgray;
    }
=======
const HeaderLeft = styled.div`
    display: flex;
    width: fit-content;
    align-items: center;
    justify-content: flex-start;
`
const NavOpenBtn = styled(Button)`
    border-radius: 50%;
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
`
const NavOpenBtnImg = styled.img`
  width: 24px;
  height: 24px;
  padding: 5px;
`
const YoutubePremiumLogo = styled.img`
  width: 97px;
  height: 20px;
  padding: 8px 14px 8px 16px;
  position: relative;
`
const CountryCode = styled.span`  
    font-size: 10px;
    color: #606060;
    margin: 12px 0 0 -10px;
    position: absolute;
    top: 1px;
`
<<<<<<< HEAD
const HeaderMiddle = styled(Div)`
  margin: 10px 10px;
`
const SearchBar = styled(Span)`
  margin: 0 0 0 40px;
  padding: 0 4px;
  width: 100%;
`
const SearchText = styled(Div)`
  position: relative;
`
const SearchInput = styled(Input)`
  border-radius: 20px 0 0 20px;
  margin: 0 0 0 32px;
  flex: 1;
`
const SearchTypingBtn = styled(Button)`
=======
const HeaderMiddle = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  margin: 10px 10px;
  justify-content: center;
`
const SearchBar = styled.span`
  margin: 0 0 0 40px;
  padding: 0 4px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const SearchText = styled.div`
  position: relative;
`
const SearchInput = styled.input`
  border: 1px solid lightgray;
  border-radius: 20px 0 0 20px;
  width: 536px;
  height: 40px;
  padding: 0 4px 0 16px;
  margin: 0 0 0 32px;
  flex: 1;
`
const SearchTypingBtn = styled.button`
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
  position: absolute;
  top: 0;
  bottom: 0;
  right: 5px;
`
const SearchKeyboard = styled.img`
  width: 19px;
  height: 11px;
`
<<<<<<< HEAD
const HeaderRight = styled(Div)`
  padding: 0 50px;
=======
const HeaderRight = styled.div`
  display: flex;
  width: 156px;
  height: 40px;
  padding: 0 50px;
  align-items: right;
  justify-content: flex-end;
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
`

const HeaderContainer = (props) => {
    const { event } = props;

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
    ];

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
    ];

    return (
        <Header>
<<<<<<< HEAD
            <HeaderLeft flex="h_row_start">
                <NavOpenBtn onClick={event} width="40px" height="40px" flex="h_row_center" deco="none">
                    <NavOpenBtnImg src="imgs/bars-solid.svg" alt="navigation 열기" />
                </NavOpenBtn>
                <Link to="/home" title="youtube">
                    <YoutubePremiumLogo src="imgs/YouTube_Premium_logo.svg" alt="Youtube 홈" />
                    <CountryCode>KR</CountryCode>
                </Link>
            </HeaderLeft>
            <HeaderMiddle flex="h_row_center">
                <SearchBar flex="h_row_center">
                    <SearchText>
                        <SearchInput placeholder="검색" width="536px" height="40px" padding="0 4px 0 16px" />
                        <SearchTypingBtn>
                            <SearchKeyboard src="https://www.gstatic.com/inputtools/images/tia.png" alt="검색하기"/>
=======
            <HeaderLeft id="headerLeft">
                <NavOpenBtn id="navOpenBtn" onClick={event} width="40px" height="40px" setFlex="h_row_center" setBorder="none">
                    <NavOpenBtnImg id="navOpenBtnImg" src="imgs/bars-solid.svg" alt="navigation 열기" />
                </NavOpenBtn>
                <Link to="/home" title="youtube">
                    <YoutubePremiumLogo id="youtubePremiumLogo" src="imgs/YouTube_Premium_logo.svg" alt="Youtube 홈" />
                    <CountryCode id="countryCode">KR</CountryCode>
                </Link>
            </HeaderLeft>
            <HeaderMiddle id="headerMiddle">
                <SearchBar id="searchBar">
                    <SearchText id="searchText">
                        <SearchInput id="searchInput" type="text" placeholder="검색" />
                        <SearchTypingBtn id="searchTypingBtn" type="button">
                            <SearchKeyboard id="searchKeyboard" src="https://www.gstatic.com/inputtools/images/tia.png" alt="검색하기"/>
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
                        </SearchTypingBtn>
                    </SearchText>
                    {
                        HeaderMiddleItemData.map((elem) => {
                            return <HeaderHoverAlertItem key={elem.id} data={elem}/>
                        })
                    }
                </SearchBar> 
            </HeaderMiddle>
<<<<<<< HEAD
            <HeaderRight width="156px" height="40px" flex="h_row_end">
=======
            <HeaderRight id="headerRight">
>>>>>>> ca7d02137f3facfb2d172109ced24f4044d0f249
                {
                    HeaderRightItemData.map((elem) => {
                        return <HeaderHoverAlertItem key={elem.id} data={elem} isHover/>
                    })
                }
            </HeaderRight>
        </Header>
    )
}

export default HeaderContainer