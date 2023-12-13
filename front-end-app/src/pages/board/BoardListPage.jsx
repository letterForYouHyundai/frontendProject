import React, { useState, useEffect } from 'react';
import useApi from 'hooks/useApi';
import { Link } from 'react-router-dom';
import './BoardListPage.css'; // 기존의 CSS 파일 임포트
import * as Page from 'styles/pages/LetterViewPageStyles';
import Pagination from 'components/commons/Pagination';

const BoardListPage = () => {
  const [apiCall, setApiCall] = useState({ url: '/board/list', method: 'GET' });
  const { data, isLoading, error } = useApi({ ...apiCall });
  const [page, setPage] = useState(1);
  if (isLoading) return <p>Loading...</p>;

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const now = new Date();

    // 'YYYY-MM-DD' 형식으로 날짜 비교
    const isToday = date.toISOString().split('T')[0] === now.toISOString().split('T')[0];

    if (isToday) {
      // 오늘 날짜이면 'HH:mm' 형식으로 반환 (오전, 오후 제거)
      return new Intl.DateTimeFormat('default', { hour: '2-digit', minute: '2-digit', hour12: false }).format(date);
    }
    // 오늘 날짜가 아니면 'MM-DD' 형식으로 반환
    return new Intl.DateTimeFormat('default', { month: '2-digit', day: '2-digit' }).format(date).replace('. ', '-').replace('.', '');
  };

  // useEffect(() => {
  //   first

  // }, []);

  const handleChange = (event, value) => {
    setPage(value);
    console.log('pagination', value);
    setApiCall({ url: `/board/list?page=${value}`, method: 'GET' });
  };

  return (
    <>
      <Page.TitleText>자유 게시판</Page.TitleText>
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
                  <td>{formatDate(item.registDate)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data available</p>
        )}
      </div>
      <Pagination count={data?.pagination?.totalPageCount || 1} onChange={handleChange} defaultPage={page} />
    </>
  );
};

export default BoardListPage;
