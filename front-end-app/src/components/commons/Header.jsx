import React from 'react';
import * as H from 'styles/components/commons/HeaderStyles';

const Header = () => (
  <H.DivWrapper>
    {/* <H.VectorImg alt="Vector" src="vector-47.svg" /> */}
    <H.TextWrapper>Letter4U</H.TextWrapper>
    <H.TextWrapper>
      <H.StyledNavLink
        to="/"
      >
        Letter4U
      </H.StyledNavLink>
    </H.TextWrapper>
    <H.DivText>
      <H.StyledNavLink
        to="/board"
      >
        자유게시판
      </H.StyledNavLink>

    </H.DivText>
    <H.LoginText>
      <H.StyledNavLink
        to="/member/login"
      >
        로그인
      </H.StyledNavLink>
    </H.LoginText>
    <H.TemplateText>
      <H.StyledNavLink
        to="/template"
      >
        템플릿
      </H.StyledNavLink>

    </H.TemplateText>
    <H.MyPageText>
      <H.StyledNavLink
        to="/member/mypage"
      >
        마이페이지
      </H.StyledNavLink>

    </H.MyPageText>
    <H.LetterWriteText>
      <H.StyledNavLink
        to="/letter/regist"
      >
        편지작성
      </H.StyledNavLink>

    </H.LetterWriteText>
    <H.Ellipse />
  </H.DivWrapper>
);

export default Header;
