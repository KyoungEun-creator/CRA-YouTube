import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import NavBtnItem from "../Components/NavBtnItem";

const Nav = styled.nav`
  z-index: 0;
  position: fixed;
  height: 100vh;
  top: 56px;
  padding: 0 4px;
  background-color: white;
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
        <Nav>
            {
                NavBtnData.map((elem) => {
                    return (
                        <Link key={elem.id} to={`/${elem.value}`}>
                            <NavBtnItem key={elem.id} data={elem}/> 
                        </Link> 
                    )
                })   
            }
        </Nav>
    )
}

export default NavContainer