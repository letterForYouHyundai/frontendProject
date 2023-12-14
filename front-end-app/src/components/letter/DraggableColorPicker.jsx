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
  {
    colorNo: 8,
    name: 'Serenity',
    hex: '#91A8D0',
    rgb: '(145, 168, 208)',
    textColor: 'black',
  },
  {
    colorNo: 9,
    name: 'Emerald',
    hex: '#009573',
    rgb: '(0, 149, 115)',
    textColor: 'white',
  },
  {
    colorNo: 10,
    name: 'Aqua Sky',
    hex: '#7BC4C4',
    rgb: '(123, 196, 196)',
    textColor: 'black',
  },
  {
    colorNo: 11,
    name: 'True Red',
    hex: '#BF1832',
    rgb: '(191, 24, 50)',
    textColor: 'white',
  },
  {
    colorNo: 12,
    name: 'Rose Quartz',
    hex: '#F8CAC9',
    rgb: '(248, 202, 201)',
    textColor: 'black',
  },
  {
    colorNo: 13,
    name: 'Marsala',
    hex: '#974F4B',
    rgb: '(151, 79, 75)',
    textColor: 'white',
  },
  {
    colorNo: 14,
    name: 'Fuchsia Rose',
    hex: '#C74275',
    rgb: '(199, 66, 117)',
    textColor: 'white',
  },
  {
    colorNo: 15,
    name: 'Cerulean Blue',
    hex: '#98B2D1',
    rgb: '(152, 178, 209)',
    textColor: 'black',
  },
  {
    colorNo: 16,
    name: 'Tangerine Tango',
    hex: '#E2583E',
    rgb: '(226, 88, 62)',
    textColor: 'white',
  },
];

const DraggableColorPicker = ({ onPickerClick }) => (
  <DraggableDiv>
    {colorPalette.map((color, index) => <LetterMiniTemplate key={index} text={color.name} pickerColor={color.hex} value={color.colorNo} onClick={(e) => onPickerClick(color)} />)}
  </DraggableDiv>
);

export default DraggableColorPicker;
