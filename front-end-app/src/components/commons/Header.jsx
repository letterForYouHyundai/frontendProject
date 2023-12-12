// Header.jsx

import React, { useContext } from 'react';
import * as H from 'styles/components/commons/HeaderStyles';
import { UserContext } from 'contexts/UserContext';
import Letter4U from 'assets/image/Letter4U.png';

const Header = () => {
  const { userInfo } = useContext(UserContext);

  return (
    <H.DivWrapper>
      <H.DivContentWrapper>
        <H.StyledNavLink
          to="/"
        >
          <H.Image src={Letter4U} alt="" />
        </H.StyledNavLink>
        <H.LeftAlignedDiv>
          <H.TextWrapper>
            <H.StyledNavLink
              to="/template"
            >
              템플릿
            </H.StyledNavLink>
          </H.TextWrapper>
          <H.TextWrapper>
            <H.StyledNavLink
              to="/board"
            >
              자유게시판
            </H.StyledNavLink>
          </H.TextWrapper>
          {userInfo ? (
            <>
              <H.TextWrapper>
                <H.StyledNavLink
                  to="/letter/regist"
                >
                  편지작성
                </H.StyledNavLink>
              </H.TextWrapper>
              <H.TextWrapper>
                <H.StyledNavLink
                  to="/member/mypage"
                >
                  마이페이지
                </H.StyledNavLink>
              </H.TextWrapper>
              <H.BigTextWrapper>
                <H.StyledNavLink
                  to="/member/oauthout"
                >
                  로그아웃
                </H.StyledNavLink>
              </H.BigTextWrapper>
            </>
          ) : (
            <H.BigTextWrapper>
              <H.StyledNavLink
                to="/member/login"
              >
                로그인
              </H.StyledNavLink>
            </H.BigTextWrapper>
          )}

        </H.LeftAlignedDiv>
      </H.DivContentWrapper>
    </H.DivWrapper>
  );
};
export default Header;
