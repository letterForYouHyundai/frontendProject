import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useApi from 'hooks/useApi';

import * as Page from 'styles/pages/LetterViewPageStyles';
import LetterMiniTemplate from 'components/letter/LetterMiniTemplate';
import Pagination from 'components/commons/Pagination';

const LetterReceiveListPage = () => {
  const navigate = useNavigate();
  const { data: letterData, isLoading, error } = useApi({
    url: '/letter/receive/list',
  });

  useEffect(() => {
    if (error) {
      console.error('Error fetching letters:', error);
    }
  }, [error]);

  const handleClickLetter = (letterNo) => {
    navigate(`/letter/receive/${letterNo}`, { state: { letterNo } });
  };

  if (isLoading) return <p>Loading...</p>;
  if (!letterData) return <p>No data available</p>;

  return (
    <>
      <Page.TitleText>받은 편지함</Page.TitleText>

      <Page.PageTemplate>
        {letterData.letterList.map((letter) => (
          <LetterMiniTemplate
            key={letter.letterNo}
            text={`From: ${letter.senderNickname}`}
            pickerColor={letter.colorPalette.colorHex}
            onClick={() => handleClickLetter(letter.letterNo)}
          />
        ))}
      </Page.PageTemplate>
      {/* <Pagination count={letterData.pagination.totalPageCount} /> */}
    </>
  );
};

export default LetterReceiveListPage;
