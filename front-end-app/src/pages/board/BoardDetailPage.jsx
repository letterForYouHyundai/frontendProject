// BoardDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import useApi from 'hooks/useApi';

const BoardDetail = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useApi(`/board/${id}`, 'GET');

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
      <h1>게시물 상세 페이지</h1>
      <p>{`게시물 ID: ${id}`}</p>
      <p>{`boardTitle: ${data?.boardTitle}`}</p>
      <p>{`userNickname: ${data?.userNickname}`}</p>
      <p>
        attachList:
        {data?.attachList?.map((attach, idx) => <p key={idx}>{attach?.file_name}</p>)}
      </p>
      <p>{`boardContent: ${data?.boardContent}`}</p>
      <p>{`boardDate: ${data?.boardDate}`}</p>
      <p>{`boardLike: ${data?.boardLike}`}</p>
      <p>
        commentList:
        {data?.commentList?.map((comment, idx) => <p key={idx}>{comment?.comment_content}</p>)}
      </p>
      <p>{`userImage: ${data?.userImage}`}</p>
    </div>
  );
};

export default BoardDetail;
