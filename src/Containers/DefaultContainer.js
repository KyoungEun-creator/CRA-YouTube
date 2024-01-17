import React from "react";
import { useDispatch } from "react-redux";  
import { detailedNavState } from "../redux/action";
import HeaderContainer from "./HeaderContainer";
import DetailedNavContainer from "./DetailedNavContainer";

const DefaultContainer = () => {

    const dispatch = useDispatch();     // useDispatch: reducer를 호출할 때

    // ------------------- #navOpenBtn 클릭 이벤트 -------------------
    const detailedNavOpenEvent = () => {
        dispatch(detailedNavState())
    };

    return (
        <>
            <HeaderContainer event={detailedNavOpenEvent} />
            <DetailedNavContainer />
        </>    
    )
}

export default DefaultContainer