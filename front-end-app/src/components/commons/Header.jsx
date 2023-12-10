import React from 'react';
import * as H from 'styles/components/commons/HeaderStyles';

const Header = () => (
  <H.DivWrapper>
    {/* <H.VectorImg alt="Vector" src="vector-47.svg" /> */}
    <H.TextWrapper>Letter4U</H.TextWrapper>
    <H.DivText>자유게시판</H.DivText>
    <H.LoginText>로그인</H.LoginText>
    <H.TemplateText>템플릿</H.TemplateText>
    <H.MyPageText>마이페이지</H.MyPageText>
    <H.LetterWriteText>편지작성</H.LetterWriteText>
    <H.Ellipse />
  </H.DivWrapper>
);

export default Header;
