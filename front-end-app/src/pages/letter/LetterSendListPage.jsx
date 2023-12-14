import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useApi from 'hooks/useApi';

import * as Page from 'styles/pages/LetterViewPageStyles';
import LetterMiniTemplate from 'components/letter/LetterMiniTemplate';
import Pagination from 'components/commons/Pagination';

const LetterSendListPage = () => {
  const navigate = useNavigate();
  const { data: letterData, isLoading, error } = useApi({
    url: '/api/letter/send/list',
  });

  useEffect(() => {
    if (error) {
      console.error('Error fetching letters:', error);
    }
  }, [error]);

  const handleClickLetter = (letterNo) => {
    navigate(`/letter/send/${letterNo}`);
  };

  if (isLoading) return <p>Loading...</p>;
  if (!letterData) return <p>No data available</p>;

  return (
    <>
      <Page.TitleText>보낸 편지함</Page.TitleText>

      <Page.PageTemplate>
        {letterData.letterList.map((letter) => (
          <LetterMiniTemplate
            key={letter.letterNo}
            text={`To: ${letter.receiverNickname}`}
            pickerColor={letter.colorPalette.colorName}
            onClick={() => handleClickLetter(letter.letterNo)}
          />
        ))}
      </Page.PageTemplate>
      {/* <Pagination count={letterData.pagination.totalPageCount} /> */}
    </>
  );
};

export default LetterSendListPage;
