// BoardDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import useApi from 'hooks/useApi';
import * as Page from 'styles/pages/LetterViewPageStyles';
import { FillButton, MyButton } from 'styles/components/commons/ButtonStyles';
import 'assets/fonts/fonts.css';
import LoadingSpinner from 'components/commons/LoadingSpinner';
import HeartIcon from 'assets/image/icons/heart.png';

const BoardDetail = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useApi({ url: `/board/${id}`, method: 'GET' });

  // <div>
  //   <h1>게시물 상세 페이지</h1>
  //   <p>{`게시물 ID: ${id}`}</p>
  //   <p>{`boardTitle: ${data?.boardTitle}`}</p>
  //   <p>{`userNickname: ${data?.userNickname}`}</p>
  //   <p>
  //     attachList:
  //     {data?.attachList?.map((attach, idx) => <p key={idx}>{attach?.file_name}</p>)}
  //   </p>
  //   <p>{`boardContent: ${data?.boardContent}`}</p>
  //   <p>{`boardDate: ${data?.boardDate}`}</p>
  //   <p>{`boardLike: ${data?.boardLike}`}</p>
  //   <p>
  //     commentList:
  //     {data?.commentList?.map((comment, idx) => <p key={idx}>{comment?.comment_content}</p>)}
  //   </p>
  //   <p>{`userImage: ${data?.userImage}`}</p>
  // </div>
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
          {data?.boardTitle}
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
              src={data?.userImage}
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
                {data?.boardDate}
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
                {data?.userNickname}
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
            {data?.boardContent}
          </div>
          {data?.attachList?.map((attach, idx) => (
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
            onClick={() => {}}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
            >
              <img
                src={HeartIcon}
                style={{
                  width: '1.5rem',
                  height: '1.5rem',
                  marginRight: '0.3rem',
                }}
                alt="heart_icon"
              />
              {data?.boardLike}
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
        {data?.commentList?.map((comment, idx) => (
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
                src={comment?.userImage}
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
                  {comment?.commentDate}
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
                  {comment?.userNickname}
                  <br />
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
                  {comment?.commentContent}
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
          />
          <MyButton
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
