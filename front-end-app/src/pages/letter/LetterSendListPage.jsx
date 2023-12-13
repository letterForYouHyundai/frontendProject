import LetterMiniTemplate from 'components/letter/LetterMiniTemplate';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Page from 'styles/pages/LetterViewPageStyles';
import Pagination from 'components/commons/Pagination';

const LetterSendListPage = () => {
  const navigate = useNavigate();
  const handleClickLetter = (letterId) => {
    navigate(`/letter/send/${letterId}`);
  };

  return (
    <>
      <Page.TitleText>보낸 편지함</Page.TitleText>
      <Page.PageTemplate>
        <LetterMiniTemplate text="To.ljy" pickerColor="red" onClick={() => handleClickLetter('575')} />
        <LetterMiniTemplate text="To.jk" pickerColor="blue" onClick={() => handleClickLetter('600')} />
        <LetterMiniTemplate text="To.es" pickerColor="green" onClick={() => handleClickLetter('601')} />
      </Page.PageTemplate>
      <Pagination count={15} />
    </>
  );
};

export default LetterSendListPage;
