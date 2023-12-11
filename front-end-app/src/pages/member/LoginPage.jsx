import React, { useState, useEffect, useContext } from 'react';
import Input from 'components/commons/Input';
import Button from '@mui/material/Button';
import useApi from 'hooks/useApi';
import { UserContext } from 'contexts/UserContext';

const LoginPage = () => {
  const kakaoLoginURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_MAIN_REDIRECT_URI}&response_type=code`;
  // const [userInfo, setUserInfo] = useState(null);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [apiCall, setApiCall] = useState({
    url: '',
    method: 'GET',
    body: null,
    headers: null,
  });
  const { data, loading, error } = useApi({ ...apiCall });

  const activeLogin = () => {
    setApiCall({ ...apiCall, url: '/member/kakaoLogin' });
  };

  const handleLogin = () => {
    window.location.href = kakaoLoginURL;
  };

  useEffect(() => {
    const userInfoFromSession = JSON.parse(sessionStorage.getItem('userInfo'));
    if (userInfoFromSession) {
      setUserInfo(userInfoFromSession);
    }

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      console.log(code);
      activeLogin();
    }
  }, []);

  useEffect(() => {
    if (data && data.status === 200) {
      sessionStorage.setItem('userInfo', JSON.stringify(data));
      setUserInfo(data);
    }
  }, [data]);

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
