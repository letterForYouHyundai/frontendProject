import styled from 'styled-components';
import 'assets/fonts/fonts.css';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem;
`;

export const Input = styled.input`
  display: block;
  margin: 1rem auto;
  padding: 1rem;
  border: 1px solid #ccc;
  width: 70%;
  font-size: 1rem;
  font-family: 'namum-myeongjo-regular', Helvetica;
`;

export const Textarea = styled.textarea`
  display: block;
  margin: 1rem auto;
  padding: 1rem;  
  border: 1px solid #ccc;
  width: 70%;
  resize: none;
  height: 30rem;
  font-size: 1rem;
  font-family: 'namum-myeongjo-regular', Helvetica;
`;

export const ImagePreview = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover; // 이미지 비율 유지
  margin: 1rem;
`;
