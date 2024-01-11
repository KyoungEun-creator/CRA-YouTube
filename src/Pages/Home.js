import React from "react"
import HeaderContainer from "../Components/HeaderContainer"
import MainContainer from "./MainPage/MainContainer"
// import { Link } from "react-router-dom"


const Home = () => {
    return (
        <>
            <HeaderContainer />
            <MainContainer />
            {/* <Link to="./ShortsHome">쇼츠</Link> */}
        </>
    )
}

export default Home