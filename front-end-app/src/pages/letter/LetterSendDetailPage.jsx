import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from 'contexts/UserContext';
import { useNavigate, useLocation } from 'react-router-dom';
import useApi from 'hooks/useApi';
import LetterTemplate from 'components/letter/LetterTemplate';
import { MyButton } from 'styles/components/commons/ButtonStyles';
import * as Page from 'styles/pages/LetterViewPageStyles';

const LetterSendDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const letterNo = location.state && location.state.letterNo;
  const [userName, setUserName] = useState('User');
  const [content, setContent] = useState('Content입니당');
  const [title, setTitle] = useState('제목입니당');
  const [colorInfo, setColorInfo] = useState({
    name: '',
    hex: '',
    rgb: '',
    textColor: '',
  });

  const currentURL = window.location.href;
  const [apiCall, setApiCall] = useState({
    url: '',
    method: 'GET',
    body: null,
    headers: null,
    useNav: false,
  });
  const { data, loading, error } = useApi({ ...apiCall });

  const readLetterData = () => {
    setApiCall({ ...apiCall, url: `/letter/send/${letterNo}` });
  };
  const handleBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    readLetterData();
  }, []);

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
      <Page.TitleText>보낸 편지함</Page.TitleText>
      <LetterTemplate from title={title} content={content} userName={userName} colorInfo={colorInfo} regist={false} />

      {/* <button type="button" onClick={handleBack}>편지 목록으로 이동</button> */}
    </>
  );
};

export default LetterSendDetailPage;
