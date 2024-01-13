import React from "react";
import NavContainer from "../Containers/NavContainer";
import ShortsContainer from "../Containers/ShortsContainer";

const ShortsPage = (props) => {

    const { setPage } = props

    return (
        <>
            <NavContainer setPage={setPage}/>
            <ShortsContainer />
            {/* 쇼츠 컴포넌트를 여기에 넣어줘도 무방하지 않을까 */}
        </>
    )
}

export default ShortsPage