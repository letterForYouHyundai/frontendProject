import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle` 
  ${reset}
  
  :root {
    font-size: 16px;
    --basic-background-color: #F5F4F0;
    background-color: var(--basic-background-color);
    font-family: 'namum-myeongjo-regular';
    /* 초대형 장치 (와이드 스크린) */
    @media only screen and (min-width: 1025px) {
        /* CSS 규칙 */
      font-size: 16px;
    }
    
    /* 대형 장치 (데스크탑) */
    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        /* CSS 규칙 */
      font-size: 14px;
    }
    
    /* 중형 장치 (태블릿) */
    @media only screen and (min-width: 481px) and (max-width: 768px) {
        /* CSS 규칙 */
      font-size: 12px;
    }
    
    /* 소형 장치 (모바일) */
    @media only screen and (max-width: 480px) {
        /* CSS 규칙 */
      font-size: 10px;
    }
  }
`;

export default GlobalStyles;
