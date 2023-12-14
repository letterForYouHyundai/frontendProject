// BoardDetail.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useApi from 'hooks/useApi';
import * as Page from 'styles/pages/LetterViewPageStyles';
import { FillButton, MyButton } from 'styles/components/commons/ButtonStyles';
import 'assets/fonts/fonts.css';
import LoadingSpinner from 'components/commons/LoadingSpinner';
import HeartIcon from 'assets/image/icons/heart.png';
import BHeartIcon from 'assets/image/icons/bheart.png';
import axios from 'axios';

const BoardDetail = () => {
  const { id } = useParams();
  const [modalOpen, setModalOpen] = React.useState(false);

  const [apiCall, setApiCall] = useState({
    url: `/board/${id}`,
    method: 'GET',
    body: null,
    headers: null,
    useNav: false,
  });
  const { data, isLoading, error } = useApi({ ...apiCall });

  const [boardLike, setBoardLike] = useState('N');
  const [likeCnt, setLikeCnt] = useState(0);
  const [boardData, setBoardData] = useState(null);
  const [comment, setComment] = useState(null);
  const [commetText, setCommetText] = useState('');

  const getBoardInfo = async () => {
    const response = await axios.get(`/board/${id}`);
    if (response.data.code === 200) {
      setBoardData({ ...response.data.result });
    }
  };

  const handleClickLike = async () => {
    try {
      const response = await axios.post(`/board/likes/${id}`, { boardNo: id });
      if (response.data.code === 200) {
        // 로컬 상태 업데이트
        if (response.data.result?.boardDTO?.likeYn === 'Y') {
          setBoardLike('Y');
          setLikeCnt((prev) => prev + 1);
        } else {
          setBoardLike('N');
          setLikeCnt((prev) => prev - 1);
        }
      }
    } catch (err) {
      console.error('Error in like button:', err);
    }
  };
  const handleRegistComment = async () => {
    const response = await axios.post('/board/comment', { boardNo: id, commentContent: commetText });
    if (response.data.code === 200) {
      setCommetText('');
      getBoardInfo();
    }
  };

  const handleCommentText = (e) => {
    const { value } = e.target;
    setCommetText(value);
  };

  // API 데이터를 로컬 상태로 동기화
  useEffect(() => {
    setBoardData(data);
  }, [data]);

  useEffect(() => {
    setBoardLike(boardData?.likeYn);
    setLikeCnt(boardData?.boardLike);
    setComment(boardData?.commentList);
  }, [boardData]);

  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      <Page.TitleText>자유 게시판</Page.TitleText>
      <div style={{ width: '80%', height: '100%', margin: 'auto' }}>
        <div style={{
          padding: '1rem 0',
          color: 'black',
          fontSize: '2rem',
          fontFamily: 'namum-myeongjo-bold',
          fontWeight: '400',
          wordWrap: 'break-word',
          textAlign: 'left',
        }}
        >
          {boardData?.boardTitle}
        </div>
        <div style={{ minHeight: '30.75rem', margin: '2rem auto', width: '100%' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '2rem 0',
            backgroundColor: 'lightgray',
            paddingLeft: '1rem',
          }}
          >
            <img
              className="img1"
              style={{
                width: '4.5rem', height: '4.5rem', borderRadius: '50%',
              }}
              src={boardData?.userImage}
              alt=""
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                className="txt4"
                style={{
                  margin: '0.3rem 0.5rem',
                  color: '#666666',
                  fontSize: '1rem',
                  fontFamily: 'namum-myeongjo-regular',
                  fontWeight: '400',
                  wordWrap: 'break-word',
                }}
              >
                {boardData?.boardDate}
              </div>
              <div
                className="txt3"
                style={{
                  margin: '0.3rem 0.5rem',
                  color: 'black',
                  fontSize: '1rem',
                  fontFamily: 'namum-myeongjo-regular',
                  fontWeight: '400',
                  wordWrap: 'break-word',
                }}
              >
                {boardData?.userNickname}
                <br />
              </div>
            </div>
          </div>
          <div
            className="txt2"
            style={{
              color: 'black',
              fontSize: '1rem',
              fontFamily: 'namum-myeongjo-regular',
              fontWeight: '400',
              wordWrap: 'break-word',
              width: '100%',
              minHeight: '10rem',
              margin: '2rem auto',
            }}
          >
            {boardData?.boardContent}
          </div>
          {boardData?.attachList?.map((attach, idx) => (
            <img
              style={{
                maxWidth: '50%', maxHeight: '50%', display: 'block', margin: '1rem auto',
              }}
              key={idx}
              src={attach}
              alt=""
            />
          ))}
          <MyButton
            type="button"
            style={{
              display: 'block',
              width: '6rem',
              height: '3rem',
              padding: '1rem',
              margin: 'auto',
            }}
            onClick={handleClickLike}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
            >
              <img
                src={boardLike === 'N' ? BHeartIcon : HeartIcon}
                style={{
                  width: '1.5rem',
                  height: '1.5rem',
                  marginRight: '0.3rem',
                }}
                alt="heart_icon"
              />
              {likeCnt}
            </div>
          </MyButton>
          <FillButton
            style={{
              width: 'auto', height: '3rem', margin: '2rem auto', padding: '0.5rem 2rem', display: 'block',
            }}
            onClick={() => {}}
          >
            목록으로 이동
          </FillButton>
        </div>
        {comment?.map((cmmt, idx) => (
          <div key={idx} style={{ margin: 'auto', width: '100%' }}>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              padding: '2rem 0',
              backgroundColor: 'lightgray',
              paddingLeft: '1rem',
              borderTop: '1px solid black',
              borderBottom: '1px solid black',
            }}
            >
              <img
                className="img1"
                style={{
                  width: '4.5rem', height: '4.5rem', borderRadius: '50%',
                }}
                src={cmmt?.userImage}
                alt=""
              />
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                flex: '0 0 auto',
                maxWidth: '10%',
              }}
              >
                <div
                  className="txt4"
                  style={{
                    margin: '0.3rem 0.5rem',
                    color: '#666666',
                    fontSize: '1rem',
                    fontFamily: 'namum-myeongjo-regular',
                    fontWeight: '400',
                    wordWrap: 'break-word',
                  }}
                >
                  {cmmt?.commentDate}
                </div>
                <div
                  className="txt3"
                  style={{
                    margin: '0.3rem 0.5rem',
                    color: 'black',
                    fontSize: '1rem',
                    fontFamily: 'namum-myeongjo-regular',
                    fontWeight: '400',
                    wordWrap: 'break-word',
                  }}
                >
                  {cmmt?.userNickname}
                  {cmmt?.isWriter === 'Y' && (
                  <button
                    type="button"
                    style={{
                      background: 'none', margin: '3px', borderRadius: '0', border: '1px solid black',
                    }}
                  >
                    수정
                  </button>
                  )}
                  {cmmt?.isWriter === 'Y' && (
                  <button
                    type="button"
                    style={{
                      background: 'none', margin: '3px', borderRadius: '0', border: '1px solid black',
                    }}
                  >
                    삭제
                  </button>
                  )}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>
                <div style={{
                  margin: '0.3rem 0.5rem',
                  fontSize: '1rem',
                  fontFamily: 'namum-myeongjo-regular',
                  fontWeight: '400',
                  wordWrap: 'break-word',
                }}
                >
                  {cmmt?.commentContent}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div style={{
          width: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          height: '10rem',
          margin: '2rem auto',
        }}
        >
          <textarea
            placeholder="댓글을 입력해주세요."
            value={commetText}
            style={{
              resize: 'none',
              width: '95%',
              height: '10rem',
              border: ' 1px solid black',
              display: 'inline-block',
              padding: '1rem',
              boxSizing: 'border-box',
              fontFamily: 'namum-myeongjo-regular',
            }}
            onChange={handleCommentText}
          />
          <MyButton
            onClick={handleRegistComment}
            type="button"
            style={{
              display: 'inline-block',
              width: '5%',
              height: '10rem',
              padding: '0.5rem',
            }}
          >
            등록
          </MyButton>
        </div>
      </div>

    </>
  );
};

export default BoardDetail;
