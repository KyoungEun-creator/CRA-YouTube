import React from "react";
import NavContainer from "../Containers/NavContainer";
import ShortsBtnsContainer from "../Containers/ShortsBtnsContainer";

const ShortsPage = () => {

    return (
        <>
            <NavContainer />
            <article id="shortsArticle">
                <img id="shortsVideo" src="imgs/shorts.jpeg" alt="쇼츠" />
                <ShortsBtnsContainer />
            </article>
        </>
    )
}

export default ShortsPage