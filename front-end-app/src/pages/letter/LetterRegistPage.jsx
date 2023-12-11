import React, { useContext, useEffect } from 'react';
import { UserContext } from 'contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import useApi from 'hooks/useApi';

const LetterRegistPage = () => {
  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate();
  const { data, isLoading, error } = useApi({ url: '/board/592', method: 'GET' });

  const handleComplete = () => {
    navigate('/letter/complete');
  };
  // 로그인 안했을 경우 자동으로 로그인 페이지로 이동
  // useEffect(() => {
  //   if (!userInfo) {
  //     navigate('/member/login'); // '/member/login'으로 이동
  //     // navigate(-1); // 이전 페이지로 이동
  //   }
  // }, []);

  //  private String letterNo; 편지 번호
  //  private String letterReceiveId; 편지 수신 아이디
  // private String letterSendId; 편지 송신 아이디
  // private String letterTitle; 편지 제목
  // private String letterContent; 편지 내용
  // private String letterUrl; 편지 URL
  //  private String registDt; 편지 작성일자
  // private String kakaoSendYn; 카카오톡 송신여부
  // private String letterColorNo; 편지 배경번호
  // private String letterReceiveYn; 받은 편지 열람여부
  // private String accessToken; 엑세스토큰

  return (
    <>
      <h1>편지 작성 페이지 입니다</h1>
      <button type="button" onClick={handleComplete}>편지 작성 완료</button>
    </>
  );
};

export default LetterRegistPage;
