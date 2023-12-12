import React, { useState, useEffect, useContext } from 'react';
import useApi from 'hooks/useApi';
import { UserContext } from 'contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const OauthPage = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();
  const [apiCall, setApiCall] = useState({
    url: '',
    method: 'GET',
    body: null,
    headers: null,
    useNav: false,
  });
  const { data, loading, error } = useApi({ ...apiCall });

  const activeLogin = (code) => {
    setApiCall({ ...apiCall, url: `/member/kakaoLogin?code=${code}` });
  };

  useEffect(() => {
    const localStorageUser = localStorage.getItem('userInfo');
    const userInfoFromSession = localStorageUser ? JSON.parse(localStorageUser) : undefined;

    if (userInfoFromSession) {
      setUserInfo(userInfoFromSession);
    } else {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      if (code) {
        activeLogin(code);
      }
    }
  }, []);

  useEffect(() => {
    if (data != null || data === undefined) {
      const extractedUserInfo = data;
      localStorage.setItem('userInfo', JSON.stringify(extractedUserInfo));
      setUserInfo(extractedUserInfo);
    }
  }, [data]);

  useEffect(() => {
    if (userInfo) { navigate('/'); }
  }, [userInfo]);
};

export default OauthPage;
