import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from 'contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import useApi from 'hooks/useApi';
import LetterTemplate from 'components/letter/LetterTemplate';
import DraggableColorPicker from 'components/letter/DraggableColorPicker';
import { MyButton } from 'styles/components/commons/ButtonStyles';
import LetterMemberrConfirm from 'pages/letter/LetterMemberConfirm';

const LetterRegistPage = () => {
  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [receiveEmail, setReceiveEmail] = useState('');
  const [memberYn, setMemberYn] = useState('');
  const [letterUrl, setLetterUrl] = useState('');
  const [letterNo, setLetterNo] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState('');

  // color
  const [colorInfo, setColorInfo] = useState({
    colorNo: 1,
    name: 'Viva Magenta',
    hex: '#BB2749',
    rgb: '(187, 39, 73)',
    textColor: 'white',
  });
  const [apiCall, setApiCall] = useState({
    url: '',
    method: 'GET',
    body: null,
    headers: null,
    useNav: false,
  });
  const { data, isLoading, error } = useApi({ ...apiCall });

  const handleComplete = () => {
    if (!title.trim()) {
    // content나 title이 null이거나 공백인 경우 처리할 로직 작성
      alert(' Title을 입력해주세요.');
      return;
    }
    if (!content.trim()) {
      alert(' 편지 내용을 입력해주세요.');
      return;
    }
    // 보내는 대상의 이름을 입력해주세요.
    if (!userName === null) {
      alert('보내는 대상의 이름을 입력해주세요.');
      return;
    }

    // 나중에 validation check박스 추가시 있는 경우에는 아이디 validation 체크
    if (isChecked === true) {
      if (!inputValue.trim()) {
        alert('회원 이메일을 입력해주세요.');
        return;
      }
      if (memberYn === null) {
        alert('보내는 대상이 회원인지 조회해주세요.');
        return;
      }
      if (memberYn === 'N') {
        alert('보내는 대상이 회원이 아닙니다.');
        return;
      }
    }
    const letterData = {
      letterTitle: title,
      letterContent: content,
      letterSendId: inputValue,
      userAlias: userName, // receiveUserAlias
      letterColorNo: colorInfo.colorNo,
    };

    setApiCall((prev) => ({
      ...prev,
      url: '/letter/insertLetter',
      method: 'POST',
      body: letterData,
    }));
  };
  // 로그인 안했을 경우 자동으로 로그인 페이지로 이동
  useEffect(() => {
    if (!userInfo) {
      navigate('/member/login'); // '/member/login'으로 이동
      // navigate(-1); // 이전 페이지로 이동
      // 다음 페이지에 파라미터 넘기는 것도 가능, useLocation을 사용해서 넘어간 페이지에서 파라미터 확인 가능
      // navigate('/next-page', { state: { param1: 'value1', param2: 'value2' } });
    }
  }, []);

  useEffect(() => {
    if (data != null || data === undefined) {
      if (data.checkMemberYn === 'N') {
        setMemberYn('N');
      } else {
        setMemberYn('Y');
      }
      if (data.letterUrl != null && data.letterUrl !== undefined) {
        setLetterUrl(data.letterUrl);
      }
      if (data.letterNo != null && data.letterNo !== undefined) {
        setLetterNo(data.letterNo);
      }
    }
  }, [data]);
  useEffect(() => {
    if (letterUrl !== null && letterUrl !== undefined && letterUrl !== '' && letterNo !== null && letterNo !== undefined && letterNo !== '') {
      navigate('/letter/complete', { state: { letterUrl, letterNo } });
    }
  }, [letterUrl, letterNo]);

  useEffect(() => {

  }, [receiveEmail]);
  // 멤버인지 여부를 체크한다.
  const checkMemberYn = () => {
    // console.log(`receiveEmail:  ${receiveEmail}`);
    // 이후에 회원아이디가 변경되면 해당 설정 추가
    setMemberYn('N');
    setApiCall({ ...apiCall, method: 'GET', url: `/member/checkMemberYn?userEmail=${inputValue}` });
  };

  //  private String letterNo; 편지 번호
  //  private String letterReceiveId; 편지 수신 아이디
  // private String letterSendId; 편지 송신 아이디
  // private String letterTitle; 편지 제목
  // private String letterContent; 편지 내용
  // private String letterUrl; 편지 URL
  //  private String registDt; 편지 작성일자
  // private String kakaoSendYn; 카카오톡 송신여부
  // private String letterColorNo; 편지 배경번호
  // private String letterReceiveYn; 받은 편지 열람여부
  // private String accessToken; 엑세스토큰

  const handleTitleText = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  const handleContentText = (e) => {
    const { value } = e.target;
    setContent(value);
  };

  const handleUserText = (e) => {
    const { value } = e.target;
    setUserName(value);
  };

  const handlePickerClick = (cInfo) => {
    setColorInfo(cInfo);
  };
  return (
    <>
      <DraggableColorPicker onPickerClick={handlePickerClick} />
      <LetterTemplate from={false} title={title} content={content} userName={userName} colorInfo={colorInfo} onChangeTitle={handleTitleText} onChangeContent={handleContentText} onChangeUser={handleUserText} />
      <LetterMemberrConfirm
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <MyButton type="button" onClick={handleComplete} variant="outlined">편지 작성 완료</MyButton>
      <MyButton type="button" onClick={checkMemberYn} variant="outlined">회원 여부 조회</MyButton>
    </>
  );
};

export default LetterRegistPage;
