import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Article, Section, Div } from "../style/LayoutStyle";
import { H1, H3 } from "../style/TextStyle";
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
const SignupBtn = styled(Input)`
    border-radius: 10px;
`
const AccountService = styled(Div)`
`

// 아이디, 비번, 닉네임 정규표현식 체크
const isIdValid = (id) => {
    return /^[a-z][a-z0-9]*$/i.test(id)
}
const isPwValid = (pw) => {
    return /^(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,20}$/.test(pw)
}
const isNicknameValid = (nickname) => {
    return /^[가-힣a-zA-Z]+$/.test(nickname)
}
  
const signupEvent = async () => {
    const idValue = document.getElementById("idValue").value;
    const pwValue = document.getElementById("pwValue").value;
    const pwSecValue = document.getElementById("pwSecValue").value;
    const nicknameValue = document.getElementById("nicknameValue").value;

    if (!isIdValid(idValue)) {
        alert("6 ~ 16 글자의 아이디를 입력해주세요")
        console.log("아이디 이상함")
    }
    else if (!isPwValid(pwValue)) {
        console.log("비번 이상함")
        alert("8 ~ 20 글자의 비밀번호를 입력해주세요")
    }
    else if (pwValue !== pwSecValue) {
        console.log("비번 두 개 다름")
        alert("비밀번호를 재확인 해주세요")
    }
    else if (!isNicknameValid(nicknameValue)) {
        console.log("닉네임 이상함")
        alert("2 ~ 6 글자의 닉네임을 입력해주세요")
    }
    else {
        const BACKEND = process.env.RBACKEND_IP_URL;

        const response = await fetch(`${BACKEND}/user`, {
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
                            <InfoInput id="pwSecValue" type="password" placeholder="8 ~ 20 글자로 입력해주세요"></InfoInput>
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
                    
                    <SignupBtn id="signUpBtn" type="button" value="회원가입하기" onClick={signupEvent}
                        width="400px" height="50px" bgcolor="red" color="white" fontSize="20px" margin="0 0 10px 0"></SignupBtn>
                    <AccountService 
                        width="100%" flex="h_center">
                        <Link to="/">로그인하러 가기</Link>
                    </AccountService>
                </WidthFixer>
            </SignupContainer> 
        </SignupArticle>
    )
}

export default SignUpPage;