/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './LetterMemberConfirm.css';
import { MyButton } from 'styles/components/commons/ButtonStyles';

const LetterMemberConfirm = ({
  isChecked,
  setIsChecked,
  inputValue,
  setInputValue,
  memberYn,
  setMemberYn,
  checkMemberYn,
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
    <div style={{ width: '30rem', margin: '3rem auto' }}>
      {/* 체크박스 */}
      <input
        type="checkbox"
        checked={isChecked}
        id="sendUser"
        name="sendUser"
        onChange={() => {
          if (!isChecked) {
            clearInput(); // Clear input value if the checkbox is being unchecked
          }
          setIsChecked(!isChecked);
        }}
      />
      <label htmlFor="sendUser">
        회원에게 보내기
      </label>
      <br />

      {/* 입력 가능한 텍스트 상자 */}
      {isChecked && ( // Render input only if isChecked is true
        <>
          <input
            style={{ width: '20rem', height: '2rem', margin: '0.5rem 0' }}
            type="text"
            value={inputValue || ''} // Ensure inputValue is not null or undefined
            onChange={handleInputChange}
            placeholder="회원 이메일를 입력해주세요."
          />
          <MyButton style={{ width: '30%', height: '3rem', display: 'block' }} type="button" onClick={checkMemberYn} variant="outlined">회원 여부 조회</MyButton>

        </>
      )}
    </div>
  );
};

export default LetterMemberConfirm;
