import React from 'react';
import useApi from 'hooks/useApi';
import { Link } from 'react-router-dom';

const BoardListPage = () => {
  const { data, isLoading, error } = useApi({ url: '/board/list', method: 'GET' });

  if (isLoading) return <p>Loading...</p>;
  if (error) {
    return (
      <p>
        {`Error occurred: ${error.message}`}
      </p>
    );
  }

  return (
    <div>
      <h1>API 통신 호출 확인</h1>
      {data ? (
        <ul>
          {data?.result.boardList?.map((item) => (
            <li key={item.boardNo}>
              <p>
                {`BoardNo: ${item.boardNo}`}
              </p>
              <p>
                <Link to={`/board/${item.boardNo}`}>{`BoardTitle: ${item.boardTitle}`}</Link>
              </p>
              <p>
                {`BoardView: ${item.boardView}`}
              </p>
              <p>
                {`CommentCount: ${item.commentCount}`}
              </p>
              <p>
                {`Image: ${item.image}`}
              </p>
              <p>
                {`LikeCount: ${item.likeCount}`}
              </p>
              <p>
                {`RegistDate: ${item.registDate}`}
              </p>
              <p>
                {`UserNickname: ${item.userNickname}`}
              </p>
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BoardListPage;
