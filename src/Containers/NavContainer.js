import React from "react";
import { styled } from "styled-components";
import { Nav } from "../style/LayoutStyle";
import { Link } from "react-router-dom";
import NavBtnItem from "../Components/NavBtnItem";

const SimpleNav = styled(Nav)`
  z-index: 0;
  position: fixed;
  top: 56px;
`

const NavContainer = () => {

    const NavBtnData = [
        {
            id: "NavBtn_1",
            value: "home",
            title: "홈",
            imgSrc: "imgs/house-solid.svg",
            alt: "navBtn",
            label: "홈"
        },
        {
            id: "NavBtn_2",
            value: "shorts",
            title: "Shorts",
            imgSrc: "imgs/youtube-shorts-logo.svg",
            alt: "navBtn",
            label: "Shorts"
        },
        {
            id: "NavBtn_3",
            value: "subscribe",
            title: "구독",
            imgSrc: "imgs/warehouse-solid.svg",
            alt: "navBtn",
            label: "구독"
        },
        {
            id: "NavBtn_4",
            value: "youtubeMusic",
            title: "YouTube Music",
            imgSrc: "imgs/database-solid.svg",
            alt: "navBtn",
            label: "YouTube Music"
        },
        {
            id: "NavBtn_5",
            value: "storage",
            title: "보관함",
            imgSrc: "imgs/photo-film-solid.svg",
            alt: "navBtn",
            label: "보관함"
        },
        {
            id: "NavBtn_6",
            value: "offlineSaved",
            title: "오프라인 저장 동영상",
            imgSrc: "imgs/download-solid.svg",
            alt: "navBtn",
            label: "오프라인 저장 동영상"
        }
    ];

    return (
        <SimpleNav
            height="100vh" padding="0 4px" bgColor="white" flex="v_start">
            {
                NavBtnData.map((elem) => {
                    return (
                        <Link key={elem.id} to={`/${elem.value}`}>
                            <NavBtnItem key={elem.id} data={elem}/> 
                        </Link> 
                    )
                })   
            }
        </SimpleNav>
    )
}

export default NavContainer;