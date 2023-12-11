import React, { useState } from 'react';
import Input from 'components/commons/Input';
import Button from '@mui/material/Button';
import useApi from 'hooks/useApi';

const LoginPage = () => {
  console.log('aaa');

  // const CLIENT_ID = 'ad117e5251ddb446c15d829ce0967079';
  // const REDIRECT_URI = 'http://localhost:8081/api/member/kakaoLoginPage';
  // const kakaoLoginURL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  // const code = '';

  // function loginTest() {
  //   window.location.href = kakaoLoginURL;
  // }

  const [apiCall, setApiCall] = useState({
    url: '', method: 'GET', body: null, headers: null,
  }); // API 호출에 사용할 URL
  const { data } = useApi({ ...apiCall });

  // 버튼 클릭 핸들러: API 엔드포인트 URL을 설정

  const handleLogin = () => {
    console.log(data);
    setApiCall({ ...apiCall, url: '/member/kakaoLogin' });
    // $.ajax({
    //   url: '/api/member/kakaoLogin',
    //   data: { code },
    //   type: 'GET',
    //   success: function onData(data) {
    //     // 예시: 사용자 정보 출력
    //     const { userInfo } = data;
    //       console.log(data);
    //       if (userInfo) {
    //       const userInfoDiv = document.getElementById('userInfo');
    //       console.log(userInfo);
    //       userInfoDiv.innerText = `Welcome, ${userInfo.userNickname}`;
    //       userInfoDiv.style.display = 'block'; // 닉네임이 있는 경우 해당 div 보이도록 설정
    //     }
    //   },
    //   error: function onError(error) {
    //     console.error(error);
    //   },
    // });
  };

  return (
    <>
      <Input label="이메일" />
      <Input label="비밀번호" type="password" />
      <Button variant="outlined" onClick={handleLogin}>로그인</Button>
    </>
  );
};

export default LoginPage;
