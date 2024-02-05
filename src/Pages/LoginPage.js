import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Article, Section, Div } from "../style/LayoutStyle";
import { H1, H3, Span } from "../style/TextStyle";
import { Input } from "../style/Input";
// import { useCookies } from "react-cookie";

const LoginArticle = styled(Article)`
`
const LoginContainer = styled(Section)`
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
const GoFindID = styled(Span)`
`
const GoFindPW = styled(Span)`
`
const loginEvent = async () => {
    const BACKEND = process.env.RBACKEND_IP_URL;

    const response = await fetch(`${BACKEND}/auth`, {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({
            "id": document.getElementById("idValue").value,
            "pw": document.getElementById("pwValue").value
        })
    })

    const result = await response.json();

    if (result.success) {
        // 토큰을 저장하는 방법(리액트 쿠키에 저장)
        // 페이지 이동, 리액트 라우터 돔 이용
        console.log("login success!")
    }
    else {
        alert(result.message)
    }
}

const LoginPage = () => {
    return (
        <LoginArticle
            width="100vw" height="100vh" flex="h_center">
                <LoginContainer
                    width="500px" height="700px" padding="40px" border="1px solid gray" flex="v_center">
                    <WidthFixer flex="v_center">
                        <ContainerName>로그인</ContainerName>
                        <InputSection padding="50px 0 50px 0">
                            <InputContainer flex="v_between_start" margin="0 0 20px 0">
                                <InputName margin="0 10px 0 0">ID</InputName>
                                <InfoInput id="idValue" type="text"></InfoInput>
                            </InputContainer>
                            <InputContainer flex="v_between_start">
                                <InputName margin="0 10px 0 0">PW</InputName>
                                <InfoInput id="pwValue" type="password"></InfoInput>
                            </InputContainer>
                        </InputSection>
                        
                        <LoginBtn type="button" value="로그인하기" onClick={loginEvent}
                            width="400px" height="50px" bgcolor="red" color="white" margin="0 0 10px 0"></LoginBtn>
                        <AccountService 
                            width="100%" flex="h_between">
                            <Link to="./signUp" color="black">계정이 없으세요? 회원가입</Link>
                            <GoFindID>아이디 찾기</GoFindID>
                            <GoFindPW>비밀번호 찾기</GoFindPW>
                        </AccountService>
                    </WidthFixer>
                </LoginContainer>
        </LoginArticle>
    )
}

export default LoginPage;