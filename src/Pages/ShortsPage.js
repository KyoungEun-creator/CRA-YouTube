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
  width: 352px;
  margin-right: 15px;
  border-radius: 10px;
`

const ShortsPage = () => {

    return (
        <>
            <NavContainer />
            <ShortsArticle id="shortsArticle">
                <ShortsVideo id="shortsVideo" src="imgs/shorts.jpeg" alt="쇼츠" />
                <ShortsBtnsContainer />
            </ShortsArticle>
        </>
    )
}

export default ShortsPage