import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from 'contexts/UserContext';
import { useNavigate, useLocation } from 'react-router-dom';
import useApi from 'hooks/useApi';
import LetterTemplate from 'components/letter/LetterTemplate';
import { MyButton } from 'styles/components/commons/ButtonStyles';
import * as Page from 'styles/pages/LetterViewPageStyles';

const LetterReceiveDetailPage = () => {
  const location = useLocation();
  const letterNo = location.state && location.state.letterNo;
  const navigate = useNavigate();
  const [userName, setUserName] = useState('User');
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [currentURL, setCurrentURL] = useState('');
  const [apiCall, setApiCall] = useState({
    url: '',
    method: 'GET',
    body: null,
    headers: null,
    useNav: false,
  });
  const { data, loading, error } = useApi({ ...apiCall });

  const [colorInfo, setColorInfo] = useState({
    name: '',
    hex: '',
    rgb: '',
    textColor: '',
  });
  const handleBack = () => {
    navigate(-1);
  };
  const readLetterData = () => {
    let urlToSet = `/letter/receive/${letterNo}`;

    if (letterNo === null || letterNo === undefined) {
      // letterNo is null or undefined, so use currentURL
      urlToSet = `/letter/receive/${currentURL}`;
    }
    setApiCall({ ...apiCall, url: urlToSet });
  };
  useEffect(() => {
    if (letterNo === null) {
      const fullPath = window.location.href;
      const baseURL = `${process.env.REACT_APP_RCV_BASE_URL}`;
      const key = fullPath.replace(baseURL, '');
      setCurrentURL(key);
    }
  }, []);

  useEffect(() => {
    readLetterData();
  }, [currentURL]);

  useEffect(() => {
    if (data != null || data === undefined) {
      setTitle(data.letterDTO.letterTitle);
      setContent(data.letterDTO.letterContent);
      setUserName(data.letterDTO.userAlias);
      const { colorPalette } = data.letterDTO;
      setColorInfo({
        name: colorPalette.colorName,
        hex: colorPalette.colorHex,
        rgb: colorPalette.colorRgb,
        textColor: colorPalette.colorText,
      });
    }
  }, [data]);

  return (
    <>
      <Page.TitleText>받은 편지함</Page.TitleText>
      <LetterTemplate from={false} title={title} content={content} userName={userName} colorInfo={colorInfo} regist={false} />
      <div style={{ width: '100%', height: '10rem', background: 'none' }} />
    </>
  );
};

export default LetterReceiveDetailPage;
