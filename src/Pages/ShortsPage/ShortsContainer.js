import React from "react"
import Nav from "../../Components/Nav/Nav"
import Shorts from "./Shorts"

const MainContainer = (props) => {

    const { setPage } = props

    return (
        <>
            <Nav setPage={setPage}/>
            <Shorts />
        </>
    )
}

export default MainContainer