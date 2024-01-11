import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./style.css";
// import "./commonStyle.css";
import Home from "./Pages/Home";
import ShortsHome from "./Pages/ShortsHome";
import HeaderContainer from "./Components/HeaderContainer";
// import Nav from "./Components/Nav/Nav";
// import MainContainer from "./Pages/MainPage/MainContainer";
// import ShortsContainer from "./Pages/ShortsPage/ShortsContainer";
import Watch from "./Pages/WatchVideoPage/Watch";

const App = () => {
    // const [page, setPage] = React.useState("home")

    // return (
    //     <>
    //         <HeaderContainer setPage={setPage} />
    //         { 
    //             page === "home" 
    //             ? <MainContainer setPage={setPage} /> 
    //             : page === "shorts"  
    //                 ? <ShortsContainer setPage={setPage} /> 
    //                 : page === "video_1"
    //                     ? <Watch setPage={setPage} />
    //                     : null
    //         }
    //     </>
    // )
    return (
        <BrowserRouter>
            <HeaderContainer />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shorts" element={<ShortsHome />} />
                <Route path="/watch" element={<Watch />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

