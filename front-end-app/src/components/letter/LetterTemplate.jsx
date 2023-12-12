import React from 'react';
import * as Letter from 'styles/components/letter/LetterStyles';

const LetterTemplate = ({
  from, title, content, userName, textColor = 'black', onChangeTitle, onChangeContent, onChangeUser, backgroundColor,
}) => {
  console.log('');

  return (
    <Letter.Container style={{ backgroundColor }}>
      <Letter.InnerBox>
        <Letter.Square style={{ backgroundColor }}>
          <Letter.TitleMessage style={{ color: textColor }} value={title} placeholder="제목을 입력하세요" onChange={onChangeTitle} maxLength={20} />
          <Letter.DetailedMessage style={{ color: textColor }} value={content} placeholder="편지 내용을 입력하세요" onChange={onChangeContent} />
        </Letter.Square>
        <Letter.UserText>{from ? 'From. ' : 'To. '}</Letter.UserText>
        <Letter.UserInput placeholder="이름" value={userName} onChange={onChangeUser} maxLength={10} />
        <Letter.ColorInfo>
          PANTONE: Tropicana
          <br />
          HEX COLOR: #6CBFC3;
          <br />
          RGB: (108,191,195)
        </Letter.ColorInfo>
      </Letter.InnerBox>
    </Letter.Container>
  );
};

export default LetterTemplate;
