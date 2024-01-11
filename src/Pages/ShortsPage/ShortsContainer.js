import React from "react"
import Nav from "../../Components/Nav/Nav"
import Shorts from "./Shorts"

const ShortsContainer = (props) => {

    const { setPage } = props

    return (
        <>
            <Nav setPage={setPage}/>
            <Shorts />
            {/* 쇼츠 컴포넌트를 여기에 넣어줘도 무방하지 않을까 */}
        </>
    )
}

export default ShortsContainer