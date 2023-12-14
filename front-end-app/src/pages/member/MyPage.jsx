import React from 'react';
import * as Page from 'styles/pages/LetterViewPageStyles';
import Button from 'components/commons/Button';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const navigate = useNavigate();

  return (

    <>
      <Page.TitleText>마이 페이지</Page.TitleText>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <Button style={{ margin: '1rem' }} onClick={() => navigate('/letter/receive')}>받은 편지함으로 이동</Button>
        <Button style={{ margin: '1rem' }} onClick={() => navigate('/letter/send')}>보낸 편지함으로 이동</Button>
      </div>
    </>
  );
};

export default MyPage;
