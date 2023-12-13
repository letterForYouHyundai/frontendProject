import styled from 'styled-components';
import Button from '@mui/material/Button';
import 'assets/fonts/fonts.css';

export const MyButton = styled(Button)`
  && {
    color: black;
    border-radius: 0;
    border: 1px solid black;
    width: 31.25rem;
    height: 3.75rem;
    font-family: 'namum-myeongjo-regular', Helvetica;
  }
`;

export const FillButton = styled(Button)`
  && {
    color: white;
    border-radius: 0;
    background-color: black;
    width: 31.25rem;
    height: 3.75rem;
    font-family: 'namum-myeongjo-regular', Helvetica;
    &:hover {
      border: 1px solid black;
    }
  }
`;
