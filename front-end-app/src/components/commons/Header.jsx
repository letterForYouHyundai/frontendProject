// Header.jsx

import React, { useContext } from 'react';
import * as H from 'styles/components/commons/HeaderStyles';
import { UserContext } from 'contexts/UserContext';
import { NavLink } from 'react-router-dom'; // NavLink를 사용하여 활성 링크 스타일링에 필요한 모듈 import

const Header = () => {
  const { userInfo } = useContext(UserContext);

  // 로그아웃 또는 로그인 링크를 반환하는 함수
  const renderAuthLink = () => {
    if (userInfo) {
      return (
        <>
          <H.MyPageText>
            <NavLink to="/member/mypage" activeClassName="activeLink">
              마이페이지
            </NavLink>
          </H.MyPageText>
          <H.LetterWriteText>
            <NavLink to="/letter/regist" activeClassName="activeLink">
              편지작성
            </NavLink>
          </H.LetterWriteText>
          {/* 로그아웃 링크 */}
          <H.LoginText>
            <NavLink to="/member/logout" activeClassName="activeLink">
              로그아웃
            </NavLink>
          </H.LoginText>
        </>
      );
    }
    return (
      <>
        {/* 로그인 링크 */}
        <H.LoginText>
          <NavLink to="/member/login" activeClassName="activeLink">
            로그인
          </NavLink>
        </H.LoginText>
      </>
    );
  };

  // 조건부 렌더링 결과를 반환
  return (
    <div>
      <H.DivWrapper>
        <H.TextWrapper>Letter4U</H.TextWrapper>
        <H.TextWrapper>
          <NavLink to="/" activeClassName="activeLink">
            Letter4U
          </NavLink>
        </H.TextWrapper>
        <H.DivText>
          <NavLink to="/board" activeClassName="activeLink">
            자유게시판
          </NavLink>
        </H.DivText>
        <H.TemplateText>
          <NavLink to="/template" activeClassName="activeLink">
            템플릿
          </NavLink>
        </H.TemplateText>
        {/* 로그인, 로그아웃 링크 렌더링 */}
        {renderAuthLink()}
        <H.Ellipse />
      </H.DivWrapper>
    </div>
  );
};

export default Header;
