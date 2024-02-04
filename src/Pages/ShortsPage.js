import React from "react";
import { styled } from "styled-components";
import { Img } from "../style/Img";
import { Article, Section } from "../style/LayoutStyle";
import NavContainer from "../Containers/NavContainer";
import ShortsBtnsContainer from "../Containers/ShortsBtnsContainer";

const ShortsContainer = styled(Section)`
`
const ShortsArticle = styled(Article)`
`
const ShortsVideo = styled(Img)`
  border-radius: 10px;
`

const ShortsPage = () => {

    return (
        <>
            <NavContainer />

            <ShortsContainer
                margin="0 0 0 72px" width="calc(100vw - 72px)" flex="h_center">
                <ShortsArticle 
                    height="626px" margin="70px 0 0 0"  flex="h_center">
                    <ShortsVideo src="imgs/shorts.jpeg" alt="쇼츠"  
                        width="352px" margin="0 15px 0 0" />
                    <ShortsBtnsContainer />
                </ShortsArticle>
            </ShortsContainer> 
        </>
    )
}

export default ShortsPage