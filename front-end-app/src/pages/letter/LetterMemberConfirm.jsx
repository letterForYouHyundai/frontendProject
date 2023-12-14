import React, { useState } from 'react';
import './LetterMemberConfirm.css';

const LetterMemberConfirm = ({
  isChecked,
  setIsChecked,
  inputValue,
  setInputValue,
  memberYn,
  setMemberYn,
}) => {
  // Update memberYn whenever inputValue changes
  const handleInputChange = (e) => {
    const value = e.target.value.trim(); // Trim the value after ensuring it's not null or undefined
    setInputValue(value);
    setMemberYn(null); // Reset memberYn to the initial value
  };

  // Function to clear input value
  const clearInput = () => {
    setInputValue(''); // Clear the input value
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
        onChange={() => {
          if (!isChecked) {
            clearInput(); // Clear input value if the checkbox is being unchecked
          }
          setIsChecked(!isChecked);
        }}
      />
      회원 대상 발송 여부

      <br />

      {/* 입력 가능한 텍스트 상자 */}
      {isChecked && ( // Render input only if isChecked is true
        <input
          type="text"
          value={inputValue || ''} // Ensure inputValue is not null or undefined
          onChange={handleInputChange}
          placeholder="회원 이메일를 입력해주세요."
        />
      )}
    </div>
  );
};

export default LetterMemberConfirm;
