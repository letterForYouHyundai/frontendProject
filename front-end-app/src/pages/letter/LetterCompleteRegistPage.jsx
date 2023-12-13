import React, { useEffect, useContext } from 'react';
import { UserContext } from 'contexts/UserContext';

const LetterCompleteRegistPage = () => {
  const { userInfo } = useContext(UserContext);
  const javascriptKey = `${process.env.REACT_APP_JAVASCRIPT_KEY}`;
  const key = 600;
  useEffect(() => {
    const loadKakaoScript = () => {
      const script = document.createElement('script');
      script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
      script.async = true;

      script.onload = () => {
        window.Kakao.init(javascriptKey);
        console.log(window.Kakao.isInitialized()); // Kakao SDK 초기화 상태 확인
        window.Kakao.Auth.setAccessToken(userInfo.accessToken);
      };

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    };

    loadKakaoScript();
  }, []);

  const handleSendMessage = () => {
    if (window.Kakao && userInfo && userInfo.accessToken) {
      window.Kakao.Share.sendCustom({
        templateId: 101767,
        templateArgs: {
          title: '제목 영역입니다.',
          description: '설명 영역입니다.',
          key,
        },
      });
    } else {
      console.error('Kakao SDK not initialized or accessToken is missing.');
    }
  };

  return (
    <>
      <h1>편지 작성이 완료되었습니다.</h1>
      <p>메세지 전송 url</p>
      <input value="" placeholder="메세지 전송 url" type="text" />
      <button type="button" onClick={handleSendMessage}>
        카카오톡으로 메세지 전송하기
      </button>
    </>
  );
};

export default LetterCompleteRegistPage;
