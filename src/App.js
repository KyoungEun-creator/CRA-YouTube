import React from "react"
import "./style.css"
import "./commonStyle.css"
import HeaderContainer from "./components/HeaderContainer"
import Nav from "./components/Nav"
import Main from "./components/Main"
import Shorts from "./components/Shorts"
import Watch from "./components/Watch"

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