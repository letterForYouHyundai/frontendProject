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
      <FillButton
        style={{
          width: 'auto', height: 'auto', margin: '1rem 0', padding: '0.5rem 2rem',
        }}
        onClick={() => {}}
      >
        목록으로 이동
      </FillButton>
      <div style={{ width: '100%', height: '100%' }}>
        <div style={{
          padding: '1rem 0',
          color: 'black',
          fontSize: '2rem',
          fontFamily: 'namum-myeongjo-bold',
          fontWeight: '400',
          wordWrap: 'break-word',
          textAlign: 'center',
        }}
        >
          {data?.boardTitle}
        </div>
        <div style={{ minHeight: '30.75rem', borderTop: '1px solid black', margin: '2rem 0' }}>
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
              width: '80%',
              minHeight: '10rem',
              margin: '2rem auto',
            }}
          >
            {data?.boardContent}
          </div>
          {data?.attachList?.map((attach, idx) => (
            <img
              style={{
                maxWidth: '50%', maxHeight: '50%', display: 'block', margin: '0.5rem auto',
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
              width: '5%',
              height: '10%',
              padding: '0.5rem',
              margin: 'auto',
            }}
            onClick={() => {}}
          >
            <img
              src={HeartIcon}
              style={{
                width: '1.5rem',
                height: '1.5rem',
              }}
              alt="heart_icon"
            />
            {data?.boardLike}
          </MyButton>
        </div>
        <div style={{
          width: '100%',
          display: 'inline-flex',
          alignItems: 'flex-start',
          height: '10rem',
          margin: '2rem 0',
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
              padding: '0.5rem',
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

        {/* Repeating elements for each comment */}
        {/* <div style={{ width: '68.75rem', height: '4.375rem', background: '#E7E7E7' }}>
          <div style={{ width: '68.75rem', height: '4.375rem' }} />
          <div style={{
            color: '#666666', fontSize: '0.75rem', fontFamily: 'GungSeo', fontWeight: '400', wordWrap: 'break-word',
          }}
          >
            12.07 01:58:54
          </div>
          <img style={{ width: '3.125rem', height: '3.125rem', borderRadius: '100px' }} src="https://via.placeholder.com/50x50" alt="" />
          <div style={{
            color: 'black', fontSize: '0.875rem', fontFamily: 'GungSeo', fontWeight: '400', wordWrap: 'break-word',
          }}
          >
            요즘 민트초코가 1등 맛 아닙니까?
          </div>
          <div style={{
            color: 'black', fontSize: '0.75rem', fontFamily: 'GungSeo', fontWeight: '400', wordWrap: 'break-word',
          }}
          >
            담대한 개구리
          </div>
          <img style={{ width: '1.5rem', height: '1.5rem' }} src="https://via.placeholder.com/24x24" alt="" />
        </div> */}
      </div>

    </>
  );
};

export default BoardDetail;
