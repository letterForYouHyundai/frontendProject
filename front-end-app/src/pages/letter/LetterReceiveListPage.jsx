import LetterMiniTemplate from 'components/letter/LetterMiniTemplate';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Page from 'styles/pages/LetterViewPageStyles';
import Pagination from 'components/commons/Pagination';

const LetterReceiveListPage = () => {
  const navigate = useNavigate();
  const handleClickLetter = (letterId) => {
    navigate(`/letter/receive/${letterId}`);
  };

  return (
    <>
      <Page.TitleText>받은 편지함</Page.TitleText>
      <Page.PageTemplate>
        <LetterMiniTemplate text="From.ljy" pickerColor="red" onClick={() => handleClickLetter('575')} />
        <LetterMiniTemplate text="From.jk" pickerColor="blue" onClick={() => handleClickLetter('600')} />
        <LetterMiniTemplate text="From.es" pickerColor="green" onClick={() => handleClickLetter('601')} />
      </Page.PageTemplate>
      <Pagination count={15} />
    </>
  );
};

export default LetterReceiveListPage;
