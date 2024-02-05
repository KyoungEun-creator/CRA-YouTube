import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { CookiesProvider } from "react-cookie";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <CookiesProvider>
        <RecoilRoot>
            <App />  
        </RecoilRoot>
    </CookiesProvider>
);