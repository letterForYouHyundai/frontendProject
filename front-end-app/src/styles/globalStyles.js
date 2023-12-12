import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle` 
  ${reset}

  @font-face {
    font-family: 'song-myung'; /* 폰트 이름을 원하는대로 설정하세요 */
    src: url('../assets/fonts/Song_Myung/SongMyung-Regular.ttf') format('truetype'); /* 폰트 파일 경로를 정확하게 지정하세요 */
  }
  
  @font-face {
    font-family: 'namum-myeongjo-regular'; 
    src: url('../assets/fonts/Nanum_Myeongjo/NanumMyeongjo-Regular.ttf') format('truetype');
  }
  
  @font-face {
    font-family: 'namum-myeongjo-bold'; 
    src: url('../assets/fonts/Nanum_Myeongjo/NanumMyeongjo-Bold.ttf') format('truetype');
  }
  
  @font-face {
    font-family: 'namum-myeongjo-ExtraBold'; 
    src: url('../assets/fonts/Nanum_Myeongjo/NanumMyeongjo-ExtraBold.ttf') format('truetype');
  }
  
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
