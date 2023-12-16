// routes.js
import ErrorPage from 'pages/ErrorPage';
import * as Member from 'pages/member';
import * as Board from 'pages/board';
import * as Letter from 'pages/letter';

const routes = [
  { path: '/member/login', component: Member.LoginPage }, // 로그인
  { path: '/member/logout', component: Member.LogoutPage }, // 로그아웃
  { path: '/member/mypage', component: Member.MyPage }, // 마이페이지
  { path: '/member/oauth', component: Member.OauthPage }, // 권한 인증후 로그인
  { path: '/member/oauthout', component: Member.OauthOutPage }, // 권한 인증 로그아웃

  { path: '/board', component: Board.BoardListPage }, // 홈페이지, 자유게시판 리스트
  { path: '/board/:id', component: Board.BoardDetailPage }, // 자유게시판 상세보기
  { path: '/board/regist', component: Board.BoardRegistPage }, // 자유게시판 글쓰기
  { path: '/board/update', component: Board.BoardUpdatePage }, // 자유게시판 게시글 수정

  { path: '/letter/regist', component: Letter.LetterRegistPage }, // 편지 작성
  { path: '/letter/complete', component: Letter.LetterCompleteRegistPage }, // 편지 작성 완료
  { path: '/letter/send', component: Letter.LetterSendListPage }, // 보낸 편지함
  { path: '/letter/send/:id', component: Letter.LetterSendDetailPage }, // 보낸 편지 상세보기
  { path: '/letter/receive', component: Letter.LetterReceiveListPage }, // 받은 편지함
  { path: '/letter/receive/:id', component: Letter.LetterReceiveDetailPage }, // 받은 편지 상세보기

  { path: '*', component: ErrorPage }, // 에러 페이지
  // 추가 라우트를 여기에 정의할 수 있습니다.
];

export default routes;
