import React from 'react';
import * as MiniLetter from 'styles/components/letter/MiniLetterStyles';

const LetterMiniTemplate = ({ text = 'Apricot', pickerColor, onClick }) => (
  <MiniLetter.Container tabIndex={0} onClick={onClick}>
    <MiniLetter.ColorDiv style={{ backgroundColor: pickerColor }} />
    <MiniLetter.TextDiv>
      {text}
    </MiniLetter.TextDiv>
  </MiniLetter.Container>

);

export default LetterMiniTemplate;
