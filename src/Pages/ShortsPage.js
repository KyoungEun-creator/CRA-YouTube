import React from "react";
import NavContainer from "../Containers/NavContainer";
import ShortsBtnsContainer from "../Containers/ShortsBtnsContainer";

const ShortsPage = (props) => {

    const { setPage } = props;

    return (
        <>
            <NavContainer setPage={setPage}/>
            <article id="shortsArticle">
                <img id="shortsVideo" src="imgs/shorts.jpeg" alt="쇼츠" />
                <ShortsBtnsContainer />
            </article>
        </>
    )
}

export default ShortsPage