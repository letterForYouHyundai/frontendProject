import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  to { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh; // 전체 뷰포트 높이
  width: 100%; // 전체 뷰포트 너비
`;

export const Spinner = styled.div`
  width: 3rem;
  height: 3rem;
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid black;
  animation: ${rotate} 1s linear infinite;
`;
