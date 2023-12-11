import React, { useState, useEffect, useContext } from 'react';
import useApi from 'hooks/useApi';
import { UserContext } from 'contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {
  const navigate = useNavigate();
  const [apiCall, setApiCall] = useState({
    url: '',
    method: 'GET',
    body: null,
    headers: null,
  });
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { data, loading, error } = useApi({ ...apiCall });

  const handleLogout = () => {
    // 로그아웃 요청 보내기
    setApiCall({ ...apiCall, url: '/member/kakaoLogout' });
  };

  useEffect(() => {
    if (data != null || data === undefined) {
      console.log(data);
      console.log('로그아웃 성공');
      sessionStorage.removeItem('userInfo');
      setUserInfo(null);
      navigate('/');
    }
  }, [data]);

  return (
    <>
      <h1>로그아웃 페이지입니다</h1>
      <button type="button" onClick={handleLogout}>
        로그아웃
      </button>
    </>
  );
};

export default LogoutPage;
