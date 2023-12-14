import React from 'react';
import { Spinner, SpinnerContainer } from 'styles/components/commons/SpinnerStyles'; // 수정된 스타일 임포트

const LoadingSpinner = () => (
  <SpinnerContainer>
    <Spinner />
  </SpinnerContainer>
);

export default LoadingSpinner;
