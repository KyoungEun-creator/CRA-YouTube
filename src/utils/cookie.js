import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = () => {
    return cookies.set()
}

export const getCookie = () => {
    return cookies.get()
}



// 1. Cookie 만들어서 token 담기

// 2. 백엔드 통신 필요한 부분에서, token 가져와 api에 넣어서 보내기



// 3. 토큰의 유무에 따라서, 접근 가능한 페이지와 / 접근 못하는 페이지에 대해선 페이지 돌려주기
// ( 쿠키의 유무에 따라서 해줄 수 있음 )