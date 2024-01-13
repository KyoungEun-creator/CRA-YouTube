import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultContainer from "./Containers/DefaultContainer";
import MainPage from "./Pages/MainPage";
import ShortsPage from "./Pages/ShortsPage";
import WatchPage from "./Pages/WatchPage";

const App = () => {
    const [ page, setPage ] = React.useState("home")

    return (
        <>
            <DefaultContainer setPage={setPage} />
            { 
                page === "home" 
                ? <MainPage setPage={setPage} /> 
                : page === "shorts"  
                    ? <ShortsPage setPage={setPage} /> 
                    : page === "video_1"
                        ? <WatchPage setPage={setPage} />
                        : null
            }
        </>
    )
    // return (
    //     <BrowserRouter>
    //         <HeaderContainer />
    //         <Routes>
    //             <Route path="/" element={<Home />} />
    //             <Route path="/shorts" element={<ShortsHome />} />
    //             <Route path="/watch" element={<Watch />} />
    //         </Routes>
    //     </BrowserRouter>
    // )
}

export default App

