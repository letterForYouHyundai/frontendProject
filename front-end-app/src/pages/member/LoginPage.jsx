import React from 'react';
import Input from 'components/commons/Input';
import Button from '@mui/material/Button';

const LoginPage = () => {
  const handleLogin = () => {
    const kakaoLoginURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_MAIN_REDIRECT_URI}&response_type=code`;
    // navigate(kakaoLoginURL);
    window.location.href = kakaoLoginURL;
  };

  return (
    <div>
      <Input label="이메일" />
      <Input label="비밀번호" type="password" />
      <Button variant="outlined" onClick={handleLogin}>
        카카오 로그인
      </Button>
    </div>
  );
};

export default LoginPage;
