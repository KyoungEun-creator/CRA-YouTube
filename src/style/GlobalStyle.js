import { createGlobalStyle } from "styled-components";


// css in js 에서 이러한 글로벌 스타일이 필요없는 이유
// 1. 차라리 컴포넌트 분리를 통해서, 얘랑 같은 기능을 사용할 수 있음
// 2. 결론적으로 스타일링을 하는 방법이 2가지가 되어버림 ( 통일성이 무너짐 )

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
`

export default GlobalStyle;