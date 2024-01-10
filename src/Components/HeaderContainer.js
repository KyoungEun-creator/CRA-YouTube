import React from "react"
import Header from "./Header/Header"
import DetailedNav from "./DetailedNav/DetailedNav"

const HeaderContainer = (props) => {
    const { setPage } = props
    // ------------------- #navOpenBtn 클릭 이벤트 -------------------
    const [isNavOpen, setIsNavOpen] = React.useState(false)


    return (
        <>
            <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
            <DetailedNav isNavOpen={isNavOpen} setPage={setPage} />
        </>
    )
}

export default HeaderContainer