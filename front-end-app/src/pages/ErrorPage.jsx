import React from 'react';
import { useLocation } from 'react-router-dom';

const ErrorPage = () => {
  const location = useLocation();
  const state = location?.state;

  return (
    <>
      <h1>에러 페이지 입니다</h1>
      <p>{state?.error?.message}</p>
    </>
  );
};

export default ErrorPage;
