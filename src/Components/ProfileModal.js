import React from "react";
import { styled } from "styled-components";
import { Div } from "../style/LayoutStyle";
import { H3 } from "../style/TextStyle";

const Modal = styled(Div)`
    position: fixed;
    top: 50px;
    right: 50px;
    position: absolute;
    background-color: gray;
`

const ProfileModal = () => {
    return (
        <Modal
            flex="v_start" padding="20px 10px 20px 10px">
            <H3>프로필 이미지 변경</H3>
            <input type="file" />
        </Modal>
    )
}

export default ProfileModal;