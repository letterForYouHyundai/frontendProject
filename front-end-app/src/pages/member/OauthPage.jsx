import React, { useState, useEffect, useContext } from 'react';
import useApi from 'hooks/useApi';
import { UserContext } from 'contexts/UserContext';

const OauthPage = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [apiCall, setApiCall] = useState({
    url: '',
    method: 'GET',
    body: null,
    headers: null,
  });
  const { data, loading, error } = useApi({ ...apiCall });
  let code;

  const activeLogin = () => {
    setApiCall({ ...apiCall, url: `/member/kakaoLogin?code=${code}` });
  };

  useEffect(() => {
    const userInfoFromSession = JSON.parse(sessionStorage.getItem('userInfo'));
    if (userInfoFromSession) {
      setUserInfo(userInfoFromSession);
    }

    const urlParams = new URLSearchParams(window.location.search);
    code = urlParams.get('code');
    if (code) {
      activeLogin();
    }
  }, [setUserInfo]);

  useEffect(() => {
    if (data != null || data === undefined) {
      // console.log('data.userInfo:', data.userInfo); // 받은 데이터 로그로 확인
    }

    if (data != null || data === undefined) {
      const extractedUserInfo = data.userInfo;
      sessionStorage.setItem('userInfo', JSON.stringify(extractedUserInfo));
      setUserInfo(extractedUserInfo);
    }
  }, [data, setUserInfo]);
};

export default OauthPage;
