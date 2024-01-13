import React from "react";
import HeaderContainer from "./HeaderContainer";
import DetailedNavContainer from "./DetailedNavContainer";

const DefaultContainer = (props) => {

    const { setPage } = props
    // ------------------- #navOpenBtn 클릭 이벤트 -------------------
    const [isNavOpen, setIsNavOpen] = React.useState(false)


    return (
        <>
            <HeaderContainer {...{isNavOpen, setIsNavOpen}} />
            <DetailedNavContainer {...{isNavOpen, setPage}} />
        </>    
    )
}

export default DefaultContainer