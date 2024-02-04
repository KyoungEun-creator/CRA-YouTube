import React from "react";
import { styled } from "styled-components";
import { Article, Section, Div } from "../style/LayoutStyle";
import { H1, H3, Span } from "../style/TextStyle";
import { Input } from "../style/Input";

const SignupArticle = styled(Article)`
`
const SignupContainer = styled(Section)`
`
const WidthFixer = styled(Div)`
`
const ContainerName = styled(H1)` 
`
const InputSection = styled(Section)`
`
const InputContainer = styled(Div)`
`
const InputName = styled(H3)`
`
const InfoInput = styled(Input)`
    width: 400px;
    height: 40px;
    padding: 10px;
    border-radius: 10px;
`
const LoginBtn = styled(Input)`
    border-radius: 10px;
`
const AccountService = styled(Div)`
`
const GoLogin = styled(Span)`
`
const signupEvent = async () => {
    const BACKEND = process.env.RBACKEND_IP_URL;

    const response = await fetch(`${BACKEND}`, {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({
            "id": document.getElementById("idValue"),
            "pw": document.getElementById("pwValue"),
            "nickname": document.getElementById("nicknameValue"),
        })
    })

    const result = await response.JSON;

    if (result.success) {
        console.log("signup success!")
    }
    else {
        alert(result.message)
    }
}

const SignUpPage = () => {
    return (
        <SignupArticle
            width="100vw" height="100vh" flex="h_center">
                <SignupContainer
                    width="500px" height="700px" padding="40px" border="1px solid gray" flex="v_center">
                    <WidthFixer flex="v_center">
                        <ContainerName>회원가입</ContainerName>
                        <InputSection padding="50px 0 50px 0">
                            <InputContainer flex="v_between_start" margin="0 0 20px 0">
                                <InputName margin="0 10px 0 0">ID</InputName>
                                <InfoInput id="idValue" type="text" placeholder="6 ~ 16 글자로 입력해주세요" position="relative"></InfoInput>
                                <button position="absolute">중복확인</button>
                            </InputContainer>
                            <InputContainer flex="v_between_start" margin="0 0 20px 0">
                                <InputName margin="0 10px 0 0">PW</InputName>
                                <InfoInput id="pwValue" type="password" placeholder="8 ~ 20 글자로 입력해주세요"></InfoInput>
                            </InputContainer>

                            <InputContainer flex="v_between_start" margin="0 0 20px 0">
                                <InputName margin="0 10px 0 0">PW 재입력</InputName>
                                <InfoInput id="pwValue" type="password" placeholder="8 ~ 20 글자로 입력해주세요"></InfoInput>
                            </InputContainer>

                            <InputContainer flex="v_between_start" margin="0 0 20px 0">
                                <InputName margin="0 10px 0 0">닉네임</InputName>
                                <InfoInput id="nicknameValue" type="text" placeholder="2 ~ 6 글자로 입력해주세요"></InfoInput>
                            </InputContainer>
                            <InputContainer flex="v_between_start" margin="0 0 20px 0">
                                <InputName margin="0 10px 0 0">프로필 이미지</InputName>
                                <InfoInput id="profileImgValue" type="file"></InfoInput>
                            </InputContainer>
                        </InputSection>
                        
                        <LoginBtn type="button" value="회원가입하기" onClick="signupEvent()"
                            width="400px" height="50px" bgColor="red" color="white" fontSize="20px" margin="0 0 10px 0"></LoginBtn>
                        <AccountService 
                            width="100%" flex="h_center">
                            <GoLogin>로그인하러 가기</GoLogin>
                        </AccountService>
                    </WidthFixer>
                </SignupContainer>
        </SignupArticle>
    )
}

export default SignUpPage;