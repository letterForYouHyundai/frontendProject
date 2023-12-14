import styled from 'styled-components';
import 'assets/fonts/fonts.css';

export const Container = styled.div`
  min-width: 35rem;
  width: 40%;
  height: auto;
  background: #F5F4F1;
  margin: auto;
  padding: 4rem 2rem;
`;

export const InnerBox = styled.div`
  width: 90%;
  min-height: 85%;
  height: auto;
  margin: auto;
  padding: 2rem 1rem;
  background: white;
  border-radius: 0.5rem;
`;

export const Square = styled.div`
  width: 90%;
  min-height: 25rem;
  height: auto;
  margin: auto;
  background: #F5F4F1;
  border-radius: 0.4rem;
`;

export const UserText = styled.p`
  color: black;
  font-size: 2rem;
  word-wrap: break-word;
  padding: 1rem 1rem 1rem 2rem;
  display: inline-block;
`;

export const UserInput = styled.input`
  color: black;
  font-size: 2rem;
  padding: 1rem 0;
  background: none;
  border: none;
  font-family: 'namum-myeongjo-regular', Helvetica;
  width: 70%;
  display: inline;
`;

export const ColorInfo = styled.div`
  color: black;
  font-size: 1rem;
  font-weight: 700;
  word-wrap: break-word;
  padding: 1rem 2rem;
`;

export const TitleMessageInput = styled.input`
  color: #EEF0F1;
  font-size: 1.5rem;
  font-weight: 700;
  word-wrap: break-word;
  height: auto;
  padding: 1rem;
  background: none;
  border: none;
  font-family: 'namum-myeongjo-regular', Helvetica;
  width: 90%;
  display: block;
`;

export const TitleMessageText = styled.span`
  color: #EEF0F1;
  font-size: 1.5rem;
  font-weight: 700;
  word-wrap: break-word;
  height: auto;
  padding: 1rem;
  background: none;
  border: none;
  font-family: 'namum-myeongjo-regular', Helvetica;
  width: 90%;
  display: block;
`;

export const DetailedMessageTextArea = styled.textarea`
  color: black;
  font-size: 1rem;
  font-weight: 300;
  word-wrap: break-word;
  padding: 1rem;
  background: none;
  border: none;
  font-family: 'namum-myeongjo-regular', Helvetica;
  min-width: 90%;
  resize: none;
  height: auto;
  display: block;
`;

export const DetailedMessageText = styled.span`
  color: black;
  font-size: 1rem;
  font-weight: 300;
  word-wrap: break-word;
  padding: 1rem;
  background: none;
  border: none;
  font-family: 'namum-myeongjo-regular', Helvetica;
  min-width: 90%;
  resize: none;
  height: auto;
  display: block;
`;
