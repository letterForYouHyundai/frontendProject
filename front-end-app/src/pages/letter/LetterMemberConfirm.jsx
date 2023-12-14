import React, { useState } from 'react';
import './LetterMemberConfirm.css';

// LetterMemberConfirm 컴포넌트 내에서 부모 컴포넌트로 값을 전달하는 함수를 받음
const LetterMemberConfirm = ({
  isChecked, setIsChecked, inputValue, setInputValue,
}) => (
  <div>
    {/* 체크박스 */}
    <input
      type="checkbox"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
    />
    회원 대상 발송 여부

    <br />

    {/* 입력 가능한 텍스트 상자 */}
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="회원 이메일를 입력해주세요."
    />
  </div>
);

export default LetterMemberConfirm;
