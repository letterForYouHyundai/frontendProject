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
        minWidth: '100%', // Ensures the grid does not exceed the screen width
      }}
      >
        {data?.templateList?.map((el, index) => <MyCard registDate={el.registDate} templateContent={el.templateContent} templateLikes={el.templateLikes} templateNo={el.templateNo} templateTitle={el.templateTitle} key={index} onClick={() => handleClickGoLetterBtn(el)} />)}
      </div>

    </>
  );
};

export default TemplateListPage;
