import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultContainer from "./Containers/DefaultContainer";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import MainPage from "./Pages/MainPage";
import ShortsPage from "./Pages/ShortsPage";
import WatchPage from "./Pages/WatchPage";
import EmptyPage from "./Pages/EmptyPage";
import GlobalStyle from "./style/GlobalStyle";

const App = () => {

    return (
        <BrowserRouter>
            <GlobalStyle />
            <DefaultContainer />
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/signUp" element={<SignUpPage />} />
                <Route path="/home" element={<MainPage />} />
                <Route path="/shorts" element={<ShortsPage />} />
                <Route path="/watch/:idx" element={<WatchPage />} />
                <Route path="*" element={<EmptyPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App