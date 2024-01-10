import React from "react"
import "./style.css"
import "./commonStyle.css"
import HeaderContainer from "./Components/HeaderContainer"
import Nav from "./Components/Nav/Nav"
import Main from "./Pages/MainPage/Main"
import Shorts from "./Pages/ShortsPage/Shorts"
import Watch from "./Pages/WatchVideoPage/Watch"

const App = () => {
    const [page, setPage] = React.useState("home")

    return (
        <>
            <HeaderContainer setPage={setPage} />
            <Nav setPage={setPage}/>
            {/*{ 
                page === "home" 
                ? <Main /> 
                : page === "shorts" 
                    ? <Shorts/> 
                    : null
            }*/}
            <Watch />
        </>
    )
}
export default App