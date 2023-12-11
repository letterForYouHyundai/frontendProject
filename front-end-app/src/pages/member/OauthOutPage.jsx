import React, { useState, useEffect, useContext } from 'react';
import useApi from 'hooks/useApi';
import { UserContext } from 'contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const OauthOutPage = () => {
  const navigate = useNavigate();
  const [apiCall, setApiCall] = useState({
    url: '',
    method: 'GET',
    body: null,
    headers: null,
  });
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { data } = useApi({ ...apiCall });

  const handleLogout = () => {
    // 로그아웃 요청 보내기
    setApiCall({ ...apiCall, url: '/member/kakaoLogout' });
  };

  useEffect(() => {
    handleLogout();
    if (data != null || data === undefined) {
      console.log('로그아웃 성공');
      sessionStorage.removeItem('userInfo');
      setUserInfo(null);
      navigate('/');
    }
  }, [data, navigate, setUserInfo]);
};

export default OauthOutPage;
