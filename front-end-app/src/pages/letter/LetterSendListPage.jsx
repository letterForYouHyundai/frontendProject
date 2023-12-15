import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useApi from 'hooks/useApi';

import * as Page from 'styles/pages/LetterViewPageStyles';
import LetterMiniTemplate from 'components/letter/LetterMiniTemplate';
import Pagination from 'components/commons/Pagination';
import LoadingSpinner from 'components/commons/LoadingSpinner';

const LetterSendListPage = () => {
  const navigate = useNavigate();
  const { data: letterData, isLoading, error } = useApi({
    url: '/letter/send/list',
  });

  useEffect(() => {
    if (error) {
      console.error('보낸 편지 리스트 Fetching 오류', error);
    }
  }, [error]);

  const handleClickLetter = (letterNo) => {
    navigate(`/letter/send/${letterNo}`, { state: { letterNo } });
  };

  if (isLoading) return <LoadingSpinner />;
  if (!letterData) return <p>데이터 로딩 불가</p>;

  return (
    <>
      <Page.TitleText>보낸 편지함</Page.TitleText>

      <Page.PageTemplate>
        {letterData.letterList.map((letter) => (
          <LetterMiniTemplate
            key={letter.letterNo}
            text={`To: ${letter.receiverNickname}`}
            pickerColor={letter.colorPalette.colorHex}
            onClick={() => handleClickLetter(letter.letterNo)}
          />
        ))}
      </Page.PageTemplate>
      {/* <Pagination count={letterData.pagination.totalPageCount} /> */}
    </>
  );
};

export default LetterSendListPage;
