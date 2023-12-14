// TemplateListPage.jsx
import React, { useEffect, useState } from 'react';
import MyCard from 'components/commons/MyCard';
import useApi from 'hooks/useApi';
import { useNavigate } from 'react-router-dom';
import * as Page from 'styles/pages/LetterViewPageStyles';
import LoadingSpinner from 'components/commons/LoadingSpinner';

const TemplateListPage = () => {
  const { data, isLoading, error } = useApi({ url: '/template/list', method: 'GET' });
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  const handleClickGoLetterBtn = (templateInfo) => {
    navigate('/letter/regist', { state: { template: { ...templateInfo } } });
  };
  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      <Page.TitleText>템플릿</Page.TitleText>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)', // Creates 3 equal columns
        gridTemplateRows: 'repeat(3, 1fr)', // Creates 3 equal rows
        gap: '1rem', // Space between cards
        // width: '80%', // Set the width to 80% of the screen width
        // margin: '0 auto', // Center the grid in the middle of the screen
        minWidth: '100%', // Ensures the grid does not exceed the screen width
      }}
      >
        {data?.templateList?.map((el, index) => <MyCard registDate={el.registDate} templateContent={el.templateContent} templateLikes={el.templateLikes} templateNo={el.templateNo} templateTitle={el.templateTitle} key={index} onClick={() => handleClickGoLetterBtn(el)} />)}
      </div>

    </>
  );
};

export default TemplateListPage;
