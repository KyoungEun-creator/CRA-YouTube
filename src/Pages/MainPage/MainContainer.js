import React from "react"
import Nav from "../../Components/Nav/Nav"
import Main from "./Main"

const MainContainer = (props) => {

    const { setPage } = props

    return (
        <>
            <Nav setPage={setPage}/>
            <Main setPage={setPage}/>
        </>
    )
}

export default MainContainer