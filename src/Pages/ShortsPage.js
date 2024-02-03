import React from "react";
import { styled } from "styled-components";
import { Img } from "../style/Img";
import NavContainer from "../Containers/NavContainer";
import ShortsBtnsContainer from "../Containers/ShortsBtnsContainer";

const ShortsArticle = styled.article`
  width: calc(100% - margin-left);
  height: 626px;
  justify-content: center;
  margin-left: 72px;
  padding: 70px 30px 0 30px;
  display: flex;
  flex-direction: row;
`
const ShortsVideo = styled(Img)`
  border-radius: 10px;
`

const ShortsPage = () => {

    return (
        <>
            <NavContainer />
            <ShortsArticle id="shortsArticle">
                <ShortsVideo id="shortsVideo" src="imgs/shorts.jpeg" alt="쇼츠"  
                width="352px" margin="0 15px 0 0" />
                <ShortsBtnsContainer />
            </ShortsArticle>
        </>
    )
}

export default ShortsPage