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
  const [content, setContent] = useState('Content입니당');
  const [title, setTitle] = useState('제목입니당');
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
    console.log(`urlToSet: ${urlToSet}`);
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
      console.log(data);
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
      {/* <button type="button" onClick={handleBack}>편지 목록으로 이동</button> */}
    </>
  );
};

export default LetterReceiveDetailPage;
