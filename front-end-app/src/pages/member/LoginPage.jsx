import React from 'react';
import Button from 'components/commons/Button';
import kakaoLogo from 'assets/image/kakao_logo.png';

const LoginPage = () => {
  const handleLogin = () => {
    const kakaoLoginURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_MAIN_REDIRECT_URI}&response_type=code`;
    // navigate(kakaoLoginURL);
    window.location.href = kakaoLoginURL;
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '30rem',
      marginTop: '10rem',
    }}
    >
      <img src="/logo.png" alt="letter4u_logo" style={{ width: '6rem', height: '6rem' }} />
      <Button onClick={handleLogin} style={{ margin: '10rem' }}>
        <img src={kakaoLogo} style={{ width: '1.5rem', height: '1.5rem', marginRight: '0.5rem' }} alt="kakao_logo" />
        카카오톡으로 로그인
      </Button>
    </div>
  );
};

export default LoginPage;
