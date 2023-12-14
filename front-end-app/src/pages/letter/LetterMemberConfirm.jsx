import React, { useState } from 'react';
import './LetterMemberConfirm.css';

const LetterMemberConfirm = ({
  isChecked, setIsChecked, inputValue, setInputValue, memberYn, setMemberYn,
}) => {
  // Update memberYn whenever inputValue changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setMemberYn(null); // Reset memberYn to the initial value
  };

  // Your initial value for memberYn
  const initialMemberYn = 'initialValue';

  return (
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
        onChange={handleInputChange}
        placeholder="회원 이메일를 입력해주세요."
      />
    </div>
  );
};

export default LetterMemberConfirm;
