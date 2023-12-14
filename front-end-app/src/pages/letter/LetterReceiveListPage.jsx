import LetterMiniTemplate from 'components/letter/LetterMiniTemplate';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Page from 'styles/pages/LetterViewPageStyles';
import Pagination from 'components/commons/Pagination';
import axios from 'axios';

const LetterReceiveListPage = () => {
  const [letterData, setLetterData] = useState({ letterList: [], pagination: {} });
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/letter/receive/list')
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
    navigate(`/letter/receive/${letterNo}`);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Page.TitleText>받은 편지함</Page.TitleText>

      <Page.PageTemplate>
        <LetterMiniTemplate text="From.ljy" pickerColor="red" onClick={() => handleClickLetter('iT4x7iD7GbzG3y6Mb9CnhQ==')} />
        <LetterMiniTemplate text="From.jk" pickerColor="blue" onClick={() => handleClickLetter('600')} />
        <LetterMiniTemplate text="From.es" pickerColor="green" onClick={() => handleClickLetter('601')} />
      </Page.PageTemplate>
      {/* <Pagination count={letterData.pagination.totalPageCount} /> */}
    </>
  );
};

export default LetterReceiveListPage;
