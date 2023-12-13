import React from 'react';
import * as Page from 'styles/pages/LetterViewPageStyles';
import Button from 'components/commons/Button';
import { useNavigate } from 'react-router-dom';
import Modal from 'components/commons/ModalContainer';

const MyPage = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = React.useState(false);

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
        {/* <Modal modalOpen={modalOpen} onClose={() => setModalOpen(false)}>내용!!</Modal> */}
        <Modal modalOpen={modalOpen} onClose={() => setModalOpen(false)}><div style={{ width: '100%', padding: '3rem 0' }}>내용!!</div></Modal>
        <Button style={{ margin: '1rem', width: '10rem' }} onClick={() => setModalOpen(true)}>모달 열기</Button>
      </div>

    </>
  );
};

export default MyPage;
