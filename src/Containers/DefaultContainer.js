import React from "react";
import { useRecoilState } from "recoil";
import { detailedNavAtom } from "../recoil/mainAtom";
import HeaderContainer from "./HeaderContainer";
import DetailedNavContainer from "./DetailedNavContainer";

const DefaultContainer = () => {

    const [isOpen, setIsOpen] = useRecoilState(detailedNavAtom);

    // ------------------- #navOpenBtn 클릭 이벤트 -------------------
    const detailedNavOpenEvent = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <HeaderContainer event={detailedNavOpenEvent} />
            <DetailedNavContainer />
        </>    
    )
}

export default DefaultContainer