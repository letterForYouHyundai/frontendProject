import React, { useEffect, useContext, useState } from 'react';
import { UserContext } from 'contexts/UserContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { FillButton, MyButton } from 'styles/components/commons/ButtonStyles';

const LetterCompleteRegistPage = () => {
  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate();
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
    <div style={{ margin: 'auto', width: '50%' }}>
      <p style={{ fontSize: '3rem', margin: '3rem 3rem 0.5rem 3rem' }}>편지 작성이</p>
      <p style={{ fontSize: '3rem', margin: '0.5rem 3rem' }}>완료되었습니다.</p>
      <p style={{ fontSize: '1.5rem', margin: '2rem 3rem' }}>메세지 전송 url</p>
      <input
        style={{
          display: 'block', width: '30rem', margin: '2rem 3rem', padding: '0.5rem',
        }}
        value={urlText}
        placeholder="메세지 전송 url"
        type="text"
        onChange={handleUrlText}
      />
      {/* input 요소의 값은 urlText state와 바인딩됨 */}
      <FillButton
        style={{
          width: 'auto', display: 'block', padding: '0 2rem', margin: '2rem 3rem',
        }}
        type="button"
        onClick={handleSendMessage}
      >
        카카오톡으로 메세지 전송하기
      </FillButton>
      <MyButton
        style={{
          width: 'auto', display: 'block', padding: '0 2rem', margin: '2rem 3rem',
        }}
        type="button"
        onClick={() => navigate('/board')}
      >
        메인으로 돌아가기
      </MyButton>
    </div>
  );
};

export default LetterCompleteRegistPage;
