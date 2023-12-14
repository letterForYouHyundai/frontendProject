import React, { useState, useContext } from 'react';
import useApi from 'hooks/useApi';
import { Link, useNavigate } from 'react-router-dom';
import './BoardListPage.css'; // 기존의 CSS 파일 임포트
import * as Page from 'styles/pages/LetterViewPageStyles';
import Pagination from 'components/commons/Pagination';
import { FillButton, MyButton } from 'styles/components/commons/ButtonStyles';
import ModalContainer from 'components/commons/ModalContainer';
import { UserContext } from 'contexts/UserContext';
import LoadingSpinner from 'components/commons/LoadingSpinner';

const BoardListPage = () => {
  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate();
  const [apiCall, setApiCall] = useState({ url: '/board/list', method: 'GET' });
  const { data, isLoading, error } = useApi({ ...apiCall });
  const [page, setPage] = useState(1);
  const [loginRequiredModel, setLoginRequiredModel] = useState(false);

  const handleChange = (event, value) => {
    setPage(value);
    setApiCall({ url: `/board/list?page=${value}`, method: 'GET' });
  };

  const handleClickRegist = () => {
    // 만약 비회원 이라면 (모달) 로그인 페이지로 이동
    if (!userInfo) {
      setLoginRequiredModel(true);
    } else navigate('/board/regist');
  };
  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      <Page.TitleText>자유 게시판</Page.TitleText>
      <FillButton
        type="button"
        onClick={handleClickRegist}
        variant="outlined"
        style={{
          float: 'right', fontSize: '1rem', width: 'auto', height: 'auto', margin: '1rem 0',
        }}
      >
        글쓰기
      </FillButton>
      <div className="board-list">
        {data && data.boardList && data.boardList.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th />
                <th>제목</th>
                <th>작성자</th>
                <th>추천수</th>
                <th>조회수</th>
                <th>등록일</th>
              </tr>
            </thead>
            <tbody>
              {data.boardList.map((item) => (
                <tr key={item.boardNo}>
                  <td>
                    <img src={item.image} alt="" style={{ maxWidth: '4.5rem', maxHeight: '4.5rem' }} />
                  </td>
                  <td>
                    <Link to={`/board/${item.boardNo}`} className="link">{item.boardTitle}</Link>
                    {`[${item.commentCount}]`}
                  </td>
                  <td>{item.userNickname}</td>
                  <td>{item.likeCount}</td>
                  <td>{item.boardView}</td>
                  <td>{item.registDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data available</p>
        )}
      </div>
      <Pagination count={data?.pagination?.totalPageCount || 1} onChange={handleChange} defaultPage={page} />
      <ModalContainer modalOpen={loginRequiredModel} onClose={() => setLoginRequiredModel(false)}>
        <div style={{ margin: '3rem 0', textAlign: 'center' }}>
          로그인이 필요한 서비스입니다.
          <br />
          로그인 하시겠습니까?
          <br />
          클릭 시 로그인 페이지로 이동합니다.
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
        >
          <MyButton style={{ width: 'auto', height: 'auto' }} onClick={() => navigate('/member/login')}>예</MyButton>
          <MyButton style={{ width: 'auto', height: 'auto' }} onClick={() => setLoginRequiredModel(false)}> 아니오</MyButton>
        </div>
      </ModalContainer>
    </>
  );
};

export default BoardListPage;
