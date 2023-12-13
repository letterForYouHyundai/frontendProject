import React from 'react';
import LetterMiniTemplate from 'components/letter/LetterMiniTemplate';
import { DraggableDiv } from 'styles/components/letter/DraggableColorPickerStyles';

const colorPalette = [
  {
    colorNo: 1,
    name: 'Viva Magenta',
    hex: '#BB2749',
    rgb: '(187, 39, 73)',
    textColor: 'white',
  },
  {
    colorNo: 2,
    name: 'Veri Peri',
    hex: '#6567AB',
    rgb: '(101, 103, 171)',
    textColor: 'white',
  },
  {
    colorNo: 3,
    name: 'Illuminating',
    hex: '#F5E04D',
    rgb: '(245, 224, 77)',
    textColor: 'black',
  },
  {
    colorNo: 4,
    name: 'Classic Blue',
    hex: '#0E4C81',
    rgb: '(14, 76, 129)',
    textColor: 'white',
  },
  {
    colorNo: 5,
    name: 'Living Coral',
    hex: '#FE7061',
    rgb: '(254, 112, 97)',
    textColor: 'black',
  },
  {
    colorNo: 6,
    name: 'Ultra Violet',
    hex: '#5F4C8B',
    rgb: '(95, 76, 139)',
    textColor: 'white',
  },
  {
    colorNo: 7,
    name: 'Greenery',
    hex: '#88B04B',
    rgb: '(136, 176, 75)',
    textColor: 'black',
  },
];

const DraggableColorPicker = ({ onPickerClick }) => (
  <DraggableDiv>
    {colorPalette.map((color, index) => <LetterMiniTemplate key={index} text={color.name} pickerColor={color.hex} value={color.colorNo} onClick={(e) => onPickerClick(color)} />)}
  </DraggableDiv>
);

export default DraggableColorPicker;
