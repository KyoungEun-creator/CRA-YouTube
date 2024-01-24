import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Button } from "../style/Button";
import { Div } from "../style/Div";
import { Input } from "../style/Input";
import { Span } from "../style/Span";
import HeaderHoverAlertItem from "../Components/HeaderHoverAlertItem";

const Header = styled.header`
  top: 0;
  position: fixed;
  width: 100vw;
  height: 56px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  z-index: 100;
`
const HeaderLeft = styled(Div)`
`
const NavOpenBtn = styled(Button)`
    border-radius: 50%;
    &:hover {
        background-color: lightgray;
    }
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
  position: absolute;
  top: 0;
  bottom: 0;
  right: 5px;
`
const SearchKeyboard = styled.img`
  width: 19px;
  height: 11px;
`
const HeaderRight = styled(Div)`
  padding: 0 50px;
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
                        </SearchTypingBtn>
                    </SearchText>
                    {
                        HeaderMiddleItemData.map((elem) => {
                            return <HeaderHoverAlertItem key={elem.id} data={elem}/>
                        })
                    }
                </SearchBar> 
            </HeaderMiddle>
            <HeaderRight width="156px" height="40px" flex="h_row_end">
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