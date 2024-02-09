import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { profileModalAtom } from "../recoil/mainAtom";
import { uploadModalAtom } from "../recoil/mainAtom";
import { styled } from "styled-components";
import { Button } from "../style/Button";
import { Header, Div } from "../style/LayoutStyle";
import { Input } from "../style/Input";
import { Span } from "../style/TextStyle";
import { Img } from "../style/Img";
import HoverAlertBtnItem from "../Components/HoverAlertBtnItem";

const DefaultHeader = styled(Header)`
  top: 0;
  position: fixed;
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
const NavOpenBtnImg = styled(Img)`
`
const YoutubePremiumLogo = styled(Img)`
    position: relative;
`
const CountryCode = styled(Span)`  
    position: absolute;
    top: 1px;
    left: 180px;
`
const HeaderMiddle = styled(Div)`
`
const SearchBar = styled(Span)`
`
const SearchText = styled(Div)`
    position: relative;
`
const SearchInput = styled(Input)`
    border-radius: 20px 0 0 20px;
    flex: 1;
`
const SearchTypingBtn = styled(Button)`
    position: absolute;
    top: 10px;
    bottom: 0;
    right: 5px;
`
const SearchKeyboard = styled(Img)`
`
const SearchEnterBtn = styled(Button)`
    background-color: #f8f8f8;
    border: 1px solid lightgray;
    border-radius: 0 20px 20px 0;
    &:hover {
        background-color: lightgray;
        box-shadow: 0.5px 0.5px #f8f8f8;
    }
`
const HoverAlertBtn = styled(Button)`
    width: 40px;
    height: 40px;
`
const HeaderRight = styled(Div)`
`
const ProfileBtn = styled(Button)`
`
const ProfileBtnImg = styled(Img)`
    border-radius: 50%;
`

const HeaderContainer = (props) => {

    const { event } = props;

    const [isProfileModalOpen, setIsProfileModalOpen] = useRecoilState(profileModalAtom);
    const [isUploadModalOpen, setIsUploadModalOpen] = useRecoilState(uploadModalAtom);

    // 동영상 업로드 모달창 이벤트
    const uploadModalOpenEvent = () => {
        setIsUploadModalOpen(!isUploadModalOpen)
    }
    // 프로필 이미지 모달창 이벤트
    const profileModalOpenEvent = () => {
        setIsProfileModalOpen(!isProfileModalOpen)
    }

    return (
        <DefaultHeader 
            width="100vw" height="56px" padding="0 16px" bgColor="white" flex="h_between">
            <HeaderLeft flex="h_start">
                <NavOpenBtn onClick={event} 
                    width="40px" height="40px" flex="h_center">
                    <NavOpenBtnImg src="imgs/bars-solid.svg" alt="navigation 열기" 
                        width="24px" height="24px" padding="5px" />
                </NavOpenBtn>
                <Link to="/home" title="youtube">
                    <YoutubePremiumLogo src="imgs/YouTube_Premium_logo.svg" alt="Youtube 홈" 
                        width="97px" height="20px" padding="8px 14px 8px 16px" />
                    <CountryCode
                        fontSize="10px" margin="12px 0 0 -10px" color="#606060"> KR </CountryCode>
                </Link>
            </HeaderLeft>

            <HeaderMiddle 
                margin="10px" flex="h_center">
                <SearchBar 
                    width="100%" padding="0 4px" margin="0 0 0 40px" flex="h_center">
                    <SearchText>
                        <SearchInput type="text" placeholder="검색" 
                            width="536px" height="40px" padding="0 4px 0 16px" margin="0 0 0 32px" />
                        <SearchTypingBtn>
                            <SearchKeyboard src="https://www.gstatic.com/inputtools/images/tia.png" alt="검색하기"
                                width="19px" height="11px" />
                        </SearchTypingBtn>
                    </SearchText>
                    <SearchEnterBtn width="64px" height="42px" padding="1px 6px" margin="0 10px 0 0">
                        <HoverAlertBtnItem imgSrc="imgs/magnifying-glass-solid.svg" alt="middleHeaderBtn" tagContent="검색" />
                    </SearchEnterBtn>
                    <HoverAlertBtn>
                        <HoverAlertBtnItem imgSrc="imgs/microphone-solid.svg" alt="middleHeaderBtn" tagContent="음성으로 검색" />
                    </HoverAlertBtn>
                </SearchBar> 
            </HeaderMiddle>

            <HeaderRight flex="h_between" width="156px" height="40px">
                <HoverAlertBtn onClick={uploadModalOpenEvent}>
                    <HoverAlertBtnItem imgSrc="imgs/video-solid.svg" alt="rightHeaderBtn" tagContent="만들기" />
                </HoverAlertBtn>
                <HoverAlertBtn>
                    <HoverAlertBtnItem imgSrc="imgs/bell-regular.svg" alarm="9+" alt="rightHeaderBtn" tagContent="알림" />
                </HoverAlertBtn>
                <ProfileBtn onClick={profileModalOpenEvent}>
                    <ProfileBtnImg width="30px" height="30px" src="https://yt3.ggpht.com/ytc/AOPolaR8cvVX4lWqRCFMDreXwkxAGUSkd8i-gOk2rmgg80Vag4G8-_Ayo5c9L2NduuJn=s88-c-k-c0x00ffffff-no-rj" alt="profileImg" />
                </ProfileBtn>
            </HeaderRight>
        </DefaultHeader>
    )
}

export default HeaderContainer;