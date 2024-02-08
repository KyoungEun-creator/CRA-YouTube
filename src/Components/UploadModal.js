import React from "react";
import { styled } from "styled-components";
import { Aside, Div } from "../style/LayoutStyle";
import { H3 } from "../style/TextStyle";

const Modal = styled(Aside)`
    position: fixed;
    top: 50px;
    right: 50px;
    position: absolute;
    background-color: gray;
`
const ModalContent = styled(Div)`

`
const UploadModal = () => {
    return (
        <Modal  padding="20px 10px 20px 10px">
            <ModalContent flex="v_center" border="1px solid red">
                <H3>비디오 업로드</H3>
                <input type="text" placeholder="비디오 제목" />
                <input type="file" />

                <input type="button" value="업로드하기" />
            </ModalContent>
        </Modal>
    )
}

export default UploadModal;