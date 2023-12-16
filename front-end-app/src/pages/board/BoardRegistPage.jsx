/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import * as Page from 'styles/pages/LetterViewPageStyles';
import Button from 'components/commons/Button';
import * as BoardRegist from 'styles/pages/BoardRegistPageStyles';
import useApi from 'hooks/useApi';
import { useNavigate } from 'react-router-dom';

const BoardRegistPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]); // 여러 이미지를 저장할 배열
  const [imagePreviews, setImagePreviews] = useState([]);
  const [apiCall, setApiCall] = useState({
    url: '',
    method: 'POST',
    body: null,
    headers: null,
  });
  const { data, isLoading, error } = useApi({ ...apiCall });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const boardDTO = JSON.stringify({
      boardTitle: title,
      boardContent: content,
    });
    formData.append('boardDTO', new Blob([boardDTO], { type: 'application/json' }));

    images.forEach((image, index) => {
      formData.append('multipartFiles', image);
    });
    setApiCall({
      url: '/board/register',
      method: 'POST',
      body: formData,
      headers: null,
    });
  };

  useEffect(() => {
    if (error) {
      console.error(error);
    } else if (data) {
      // 게시글 상세로 이동~!
      navigate('/board');
    }
  }, [data, error]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 2); // 최대 2개의 이미지만 선택
    const previews = files.map((file) => (file.type.startsWith('image/') ? URL.createObjectURL(file) : null));
    setImagePreviews(previews);
    setImages(files);
  };

  return (
    <>
      <Page.TitleText>게시글 등록</Page.TitleText>
      <BoardRegist.FormContainer>
        <form>
          <BoardRegist.Input
            type="text"
            placeholder="제목을 입력해주세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <BoardRegist.Textarea
            placeholder="내용을 입력해주세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {/* <BoardRegist.Input type="file" onChange={handleImageChange} /> */}
          <BoardRegist.Input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            multiple
            id="image-upload"
            style={{ display: 'none' }}
            name="image-upload"
          />

          <div style={{ margin: 'auto', width: '70%', padding: '1rem' }}>
            <div style={{ margin: '1rem' }}>
              <label htmlFor="image-upload" style={{ padding: '0.5rem', border: '1px black solid' }}>이미지 올리기</label>
            </div>
            {imagePreviews?.map((preview, index) => (
              preview && <BoardRegist.ImagePreview key={index} src={preview} alt={`Image preview ${index + 1}`} />
            ))}
          </div>
          <Button
            type="button"
            style={{
              width: 'auto', padding: '0.5rem 7rem', margin: 'auto', display: 'block',
            }}
            onClick={handleSubmit}
            buttonStyle="fill"
          >
            게시하기
          </Button>
        </form>
      </BoardRegist.FormContainer>

    </>
  );
};

export default BoardRegistPage;
