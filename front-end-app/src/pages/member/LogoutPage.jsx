import React, { useState, useEffect } from 'react';
import useApi from 'hooks/useApi';

const LogoutPage = () => {
  const [apiCall, setApiCall] = useState({
    url: '',
    method: 'GET',
    body: null,
    headers: null,
  });
  const [userInfo, setUserInfo] = useState(null);
  const { data, loading, error } = useApi({ ...apiCall });

  const handleLogout = () => {
    // 로그아웃 요청 보내기
    setApiCall({ ...apiCall, url: '/member/kakaoLogout' });
  };

  useEffect(() => {
    if (data && data.status === 200) {
      console.log('로그아웃 성공');
      sessionStorage.removeItem('userInfo');
      setUserInfo(null);
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
