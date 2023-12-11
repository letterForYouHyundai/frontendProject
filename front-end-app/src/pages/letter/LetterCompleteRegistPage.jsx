import React from 'react';

const LetterCompleteRegistPage = () => {
  const handleSendMessage = () => {
    console.log('a');
  };

  return (
    <>
      <h1>편지 작성이 완료되었습니다.</h1>
      <p>메세지 전송 url</p>
      <input value="" placeholder="메세지 전송 url" type="text" />
      <button type="button" onClick={handleSendMessage}>카카오톡으로 메세지 전송하기</button>
    </>
  );
};

export default LetterCompleteRegistPage;
