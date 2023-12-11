// routes.js
import MainPage from 'pages/MainPage';
import ErrorPage from 'pages/ErrorPage';
import * as Member from 'pages/member';
import * as Board from 'pages/board';
import * as Letter from 'pages/letter';
import * as Template from 'pages/template';

const routes = [
  { path: '/', component: MainPage }, // 홈페이지

  { path: '/member/login', component: Member.LoginPage }, // 로그인
  { path: '/member/logout', component: Member.LogoutPage }, // 로그아웃
  { path: '/member/mypage', component: Member.MyPage }, // 마이페이지

  { path: '/board', component: Board.BoardListPage }, // 자유게시판 리스트
  { path: '/board/:id', component: Board.BoardDetailPage }, // 자유게시판 상세보기
  { path: '/board/regist', component: Board.BoardRegistPage }, // 자유게시판 글쓰기

  { path: '/letter/regist', component: Letter.LetterRegistPage }, // 편지 작성
  { path: '/letter/complete', component: Letter.LetterCompleteRegistPage }, // 편지 작성 완료
  { path: '/letter/send', component: Letter.LetterSendListPage }, // 보낸 편지함
  { path: '/letter/send/:id', component: Letter.LetterSendDetailPage }, // 보낸 편지 상세보기
  { path: '/letter/receive', component: Letter.LetterReceiveListPage }, // 받은 편지함
  { path: '/letter/receive/:id', component: Letter.LetterReceiveDetailPage }, // 받은 편지 상세보기

  { path: '/template', component: Template.TemplateListPage }, // 템플릿 리스트

  { path: '*', component: ErrorPage }, // 에러 페이지
  // 추가 라우트를 여기에 정의할 수 있습니다.
];

export default routes;
