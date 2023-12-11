// HeaderStyles.js
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import 'assets/fonts/fonts.css';

export const StyledNavLink = styled(NavLink)`
  /* Default NavLink style */
  color: #000; // Example default color
  text-decoration: none;
`;

export const DivWrapper = styled.div`
  width: 100%;
  height: 7.5rem;
  background-color: var(--basic-background-color);
  position: relative;
`;

export const Image = styled.img`
  width: 10rem;
  height: auto;
`;

export const DivContentWrapper = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
`;

export const CenteredImgWrapper = styled.div`
  margin: auto; // 가운데 정렬을 위한 속성
`;

export const LeftAlignedDiv = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: auto;
`;

export const TextWrapper = styled.div`
  color: #000000;
  font-family: 'namum-myeongjo-regular', Helvetica;
  font-size: 1.25rem;
  font-weight: 400;
  margin-right: 1rem;
`;

export const BigTextWrapper = styled(TextWrapper)`
font-family: 'namum-myeongjo-bold', Helvetica;
`;
