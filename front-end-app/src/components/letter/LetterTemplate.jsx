import React from 'react';
import * as Letter from 'styles/components/letter/LetterStyles';

const LetterTemplate = ({
  from, title, content, userName, onChangeTitle, onChangeContent, onChangeUser, colorInfo, regist = true,
}) => (
  <Letter.Container style={{ backgroundColor: colorInfo.hex }}>
    <Letter.InnerBox>
      <Letter.Square style={{ backgroundColor: colorInfo.hex }}>
        {regist ? <Letter.TitleMessageInput style={{ color: colorInfo.textColor }} value={title} placeholder="제목을 입력하세요" onChange={onChangeTitle} maxLength={20} /> : <Letter.TitleMessageText style={{ color: colorInfo.textColor }}>{title}</Letter.TitleMessageText> }
        {regist ? <Letter.DetailedMessageTextArea style={{ color: colorInfo.textColor }} value={content} placeholder="편지 내용을 입력하세요" onChange={onChangeContent} /> : <Letter.DetailedMessageText style={{ color: colorInfo.textColor }}>{content}</Letter.DetailedMessageText>}
      </Letter.Square>
      {regist ? (
        <>
          <Letter.UserText>{from ? 'From. ' : 'To. '}</Letter.UserText>
          <Letter.UserInput placeholder="이름" value={userName} onChange={onChangeUser} maxLength={10} />
        </>
      ) : <Letter.UserText>{from ? `From. ${userName}` : `To. ${userName}`}</Letter.UserText>}

      <Letter.ColorInfo>
        PANTONE:
        {' '}
        {colorInfo.name}
        <br />
        HEX COLOR:
        {' '}
        {colorInfo.hex}
        ;
        <br />
        RGB:
        {' '}
        {colorInfo.rgb}
      </Letter.ColorInfo>
    </Letter.InnerBox>
  </Letter.Container>
);

export default LetterTemplate;
