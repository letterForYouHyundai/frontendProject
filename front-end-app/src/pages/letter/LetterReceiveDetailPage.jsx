import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from 'contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import useApi from 'hooks/useApi';
import LetterTemplate from 'components/letter/LetterTemplate';
import { MyButton } from 'styles/components/commons/ButtonStyles';
import * as Page from 'styles/pages/LetterViewPageStyles';

const LetterReceiveDetailPage = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('User');
  const [content, setContent] = useState('Content입니당');
  const [title, setTitle] = useState('제목입니당');
  const [colorInfo, setColorInfo] = useState({
    name: 'Viva Magenta',
    hex: '#BB2749',
    rgb: '(187, 39, 73)',
    textColor: 'white',
  });

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Page.TitleText>받은 편지함</Page.TitleText>
      <LetterTemplate from={false} title={title} content={content} userName={userName} colorInfo={colorInfo} regist={false} />
      {/* <button type="button" onClick={handleBack}>편지 목록으로 이동</button> */}
    </>
  );
};

export default LetterReceiveDetailPage;
