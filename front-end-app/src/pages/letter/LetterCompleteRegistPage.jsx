import React, { useEffect, useContext, useState } from 'react';
import { UserContext } from 'contexts/UserContext';
import { useLocation } from 'react-router-dom';

const LetterCompleteRegistPage = () => {
  const { userInfo } = useContext(UserContext);
  const javascriptKey = `${process.env.REACT_APP_JAVASCRIPT_KEY}`;
  let key;
  const location = useLocation();
  const [urlText, setUrlText] = useState('');
  const { letterUrl, letterNo } = location.state || {};

  const baseUrl = `${process.env.REACT_APP_RCV_BASE_URL}`;

  if (letterUrl.startsWith(baseUrl)) {
    key = letterUrl.substring(baseUrl.length);
  }

  useEffect(() => {
    setUrlText(letterUrl);
    const loadKakaoScript = () => {
      const script = document.createElement('script');
      script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
      script.async = true;

      script.onload = () => {
        window.Kakao.init(javascriptKey);
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

  const handleUrlText = (e) => {
    const { value } = e.target;
    setUrlText(value); // 입력값을 urlText state로 업데이트
  };

  return (
    <>
      <h1>편지 작성이 완료되었습니다.</h1>
      <p>메세지 전송 url</p>
      <input value={urlText} placeholder="메세지 전송 url" type="text" onChange={handleUrlText} />
      {/* input 요소의 값은 urlText state와 바인딩됨 */}
      <button type="button" onClick={handleSendMessage}>
        카카오톡으로 메세지 전송하기
      </button>
    </>
  );
};

export default LetterCompleteRegistPage;
