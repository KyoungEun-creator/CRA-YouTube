import React from "react";
import NavContainer from "../Containers/NavContainer";
import MainContainer from "../Containers/MainContainer";
import ProfileModal from "../Components/ProfileModal";
import UploadModal from "../Components/UploadModal";
import { useRecoilValue } from "recoil";  
import { profileModalAtom, uploadModalAtom } from "../recoil/mainAtom";

const MainPage = () => {

    const profileModalOpen = useRecoilValue(profileModalAtom);
    const uploadModalOpen = useRecoilValue(uploadModalAtom);

    return (
        <>
            <NavContainer />
            <MainContainer />
            {
                profileModalOpen &&
                <ProfileModal />   
            }
            {
                uploadModalOpen &&
                <UploadModal />
            }
        </>
    )
}

export default MainPage;