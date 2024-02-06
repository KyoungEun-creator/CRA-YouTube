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
const UploadModal = () => {
    return (
        <Modal
            flex="v_start" padding="20px 10px 20px 10px">
            <H3>비디오 업로드</H3>
            <input type="text" placeholder="비디오 제목" />
            <input type="file" />
        </Modal>
    )
}

export default UploadModal;