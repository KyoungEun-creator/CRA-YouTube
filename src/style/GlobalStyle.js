import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
    }
    
    /* ==================== header ==================== */
    #magnifyingGlassBtn {
    background-color: #f8f8f8;
    width: 64px;
    height: 42px;
    border: 1px solid lightgray;
    border-radius: 0 20px 20px 0;
    padding: 1px 6px;
    margin-right: 10px;
    }
    #magnifyingGlassBtn:hover {
    background-color: lightgray;
    border: 1px solid gray;
    box-shadow: 0.5px 0.5px #f8f8f8;
    }
    .magnifyingGlassBtnImg {
    width: 24px;
    height: 24px;
    }
    #magnifyingGlassBtnSmallScreen {
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    background-color: transparent;
    display: none;
    }
    #microphoneBtn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    }
    #microphoneBtn:hover {
    background-color: lightgray;
    }
    .microphone {
    width: 24px;
    height: 24px;
    }
    .headerRightBtns {
    width: 40px;
    height: 40px;
    padding: 8px;
    border-radius: 50%;
    margin-right: 8px;
    }
    .headerRightBtns:hover {
    background-color: lightgray;
    }
    .headerRightIcons {
    width: 24px;
    height: 24px;
    }
    #alarmBtn {
    position: relative;
    }
    #profileImg {
    width: 24px;
    height: 24px;
    border: none;
    border-radius: 50%;
    }

    /* ==================== explicit nav ==================== */
    .exnav-btn-img {
    width: 18px;
    height: 18px;
    margin-right: 24px;
    display: flex;
    justify-content: left;
    align-items: center;
    }
    .subscribing-channel-img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: none;
    margin-right: 24px;
    display: flex;
    justify-content: left;
    align-items: center;
    }

    /* ==================== MainVideoItem ==================== */
    .metadatas {
    color: #606060;
    font-size: 14px;
    width: fit-content;
    height: 20px;
    }
`

export default GlobalStyle;