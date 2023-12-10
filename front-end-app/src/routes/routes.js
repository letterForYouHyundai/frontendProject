// routes.js
import * as Board from 'pages/board';

const routes = [
  // { path: "/", component: HomePage, exact: true },
  { path: '/board/list', component: Board.BoardListPage, exact: true },
  { path: '/board/:id', component: Board.BoardDetailPage },
  // { path: "/user/:userId", component: UserPage }
  // 추가 라우트를 여기에 정의할 수 있습니다.
];

export default routes;
