import React from "react";
import NavContainer from "../Containers/NavContainer";
import MainContainer from "../Containers/MainContainer";

const MainPage = (props) => {

    const { setPage } = props

    return (
        <>
            <NavContainer setPage={setPage}/>
            <MainContainer setPage={setPage}/>
        </>
    )
}

export default MainPage