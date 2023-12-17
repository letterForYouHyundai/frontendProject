// BoardDetail.js

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
  const navigate = useNavigate();

  const [apiCall, setApiCall] = useState({
    url: `/board/${id}`,
    method: 'GET',
    body: null,
    headers: null,
    useNav: false,
  });
  const { data, isLoading, error } = useApi({ ...apiCall });
  const editData = {

  };

  const [boardLike, setBoardLike] = useState('N');
  const [likeCnt, setLikeCnt] = useState(0);
  const [boardData, setBoardData] = useState(null);
  const [comment, setComment] = useState(null);
  const [commetText, setCommetText] = useState('');
  const [sendCommetId, setSendCommetId] = useState('');
  const [editMode, setEditMode] = useState(false);

  const getBoardInfo = async () => {
    const response = await axios.get(`/api/board/${id}`);
    if (response.data.code === 200) {
      setBoardData({ ...response.data.result });
    }
  };

  const handleClickLike = async () => {
    try {
      const response = await axios.post(`/api/board/likes/${id}`, { boardNo: id });
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
    const response = await axios.post('/api/board/comment', { boardNo: id, commentContent: commetText });
    if (response.data.code === 200) {
      setCommetText('');
      getBoardInfo();
    }
  };

  const handleEditComment = () => {
    // 보낼 데이터
    editData.commentId = sendCommetId;
    editData.commentContent = commetText;
    // POST 요청 보내기
    axios.post(`/api/board/comment/${sendCommetId}`, editData)
      .then((response) => {
        console.log('댓글이 성공적으로 수정되었습니다.', response.data);
        return response.data.code;
      })
      .then((status) => {
        if (status === 200) getBoardInfo();
      })
      .catch(() => {
        console.error('댓글 수정에 실패했습니다.', error);
        // 실패 시 실행되는 코드
      })
      .finally(() => {
        setCommetText('');
        setSendCommetId('');
        setEditMode(false);
      });
  };

  const handleCommentText = (e) => {
    const { value } = e.target;
    setCommetText(value);
  };

  const deleteComment = (e) => {
    const shouldDelete = window.confirm('정말 삭제하시겠습니까?');
    if (shouldDelete) {
      axios.put(`/api/board/comment/${e}`)
        .then((response) => {
          console.log('삭제가 확인되었습니다.');
          return response.data.code;
        })
        .then((status) => {
          if (status === 200) getBoardInfo();
        })
        .catch(() => {
          console.error('삭제오류');
        });
    }
  };

  const editCommentFrm = (commentId, commentContent) => {
    const shouldDelete = window.confirm('정말로 수정하시겠습니까?');
    if (shouldDelete) {
      setEditMode(true);
      setCommetText(commentContent);
      setSendCommetId(commentId);
    }
  };

  const handleUpdateBoard = () => {
    const updateCheck = window.confirm('게시글을 수정하시겠습니까?');
    if (updateCheck) {
      navigate('/board/update', { state: { boardNo: id } });
    }
  };

  const handleDeleteBoard = () => {
    const deleteCheck = window.confirm('게시글을 삭제하시겠습니까?');
    if (deleteCheck) {
      // call delete api
      axios.put(`/api/board/${id}`, { boardNo: id })
        .then((response) => {
          console.log('삭제가 확인되었습니다.');
          return response.data.code;
        })
        .then((status) => {
          if (status === 200) {
            navigate('/board');
            window.alert('게시글이 삭제됐습니다');
          }
        })
        .catch(() => {
          console.error('삭제오류');
          window.alert('삭제에 실패했습니다...');
        });
    }
  };

  // API 데이터를 로컬 상태로 동기화
  useEffect(() => {
    if (error) {
      navigate('/board');
      window.alert(error?.response?.data?.error?.message);
    } else {
      setBoardData(data);
    }
  }, [data, error]);

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
        {boardData?.isWriter === 'Y' && (
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <MyButton style={{ width: 'auto', height: 'auto' }} onClick={handleUpdateBoard}>수정</MyButton>
          <MyButton style={{ width: 'auto', height: 'auto' }} onClick={handleDeleteBoard}>삭제</MyButton>
        </div>
        )}
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
          <pre
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
          </pre>
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
            onClick={() => { navigate('/board'); }}
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
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {cmmt?.userNickname}
                  {cmmt?.isWriter === 'Y' && (
                  <button
                    type="button"
                    onClick={() => editCommentFrm(cmmt?.commentId, cmmt?.commentContent)}
                    style={{
                      background: 'none',
                      margin: '3px',
                      borderRadius: '0',
                      border: '1px solid black',
                    }}
                  >
                    수정
                  </button>
                  )}
                  {cmmt?.isWriter === 'Y' && (
                  <button
                    type="button"
                    onClick={() => deleteComment(cmmt?.commentId)}
                    style={{
                      background: 'none',
                      margin: '3px',
                      borderRadius: '0',
                      border: '1px solid black',
                    }}
                  >
                    삭제
                  </button>
                  )}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>
                <pre style={{
                  margin: '0.3rem 0.5rem',
                  fontSize: '1rem',
                  fontFamily: 'namum-myeongjo-regular',
                  fontWeight: '400',
                  wordWrap: 'break-word',
                }}
                >
                  {cmmt?.commentContent}
                </pre>
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
          {editMode ? (
            <MyButton
              onClick={handleEditComment}
              type="button"
              style={{
                display: 'inline-block',
                width: '5%',
                height: '10rem',
                padding: '0.5rem',
              }}
            >
              수정
            </MyButton>
          ) : (
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
          )}
        </div>
      </div>

    </>
  );
};

export default BoardDetail;
