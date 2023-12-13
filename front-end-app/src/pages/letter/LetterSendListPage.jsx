import LetterMiniTemplate from 'components/letter/LetterMiniTemplate';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useApi from 'hooks/useApi';
import { Link, useNavigate } from 'react-router-dom';

import * as Page from 'styles/pages/LetterViewPageStyles';
import Pagination from 'components/commons/Pagination';

const LetterSendListPage = () => {
  const [letterData, setLetterData] = useState({ letterList: [], pagination: {} });
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/letter/send/list')
      .then((response) => {
        setLetterData(response.data.result);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching letters:', error);
        setLoading(false);
      });
  }, []);

  const handleClickLetter = (letterNo) => {
    navigate(`/letter/send/${letterNo}`);
  };

  return (
    <>
      <Page.TitleText>받은 편지함</Page.TitleText>

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
      <Pagination count={letterData.pagination.totalPageCount} />
    </>
  );
};

export default LetterSendListPage;
