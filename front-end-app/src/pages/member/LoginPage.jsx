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
      marginTop: '7rem',
    }}
    >
      <img src="/logo.png" alt="letter4u_logo" style={{ width: '6rem', height: '6rem' }} />
      <p style={{ fontSize: '2.5rem', marginTop: '4rem' }}>마음을 담은 편지</p>
      <p style={{ fontSize: '2.5rem', margin: '1rem' }}>Letter4U에서 시작하세요</p>
      <Button onClick={handleLogin} style={{ margin: '5rem', padding: '' }}>
        <img src={kakaoLogo} style={{ width: '1.5rem', height: '1.5rem', marginRight: '0.5rem' }} alt="kakao_logo" />
        카카오톡으로 로그인
      </Button>
    </div>
  );
};

export default LoginPage;
