import { useRef, useState } from 'react';
import '../../App';

interface Props {
  toggleSignUpPopup: () => void;
}

const SignUpPresenter = ({ toggleSignUpPopup }: Props) => {
  const refInputId = useRef<HTMLInputElement | null>(null);
  const refInputPw = useRef<HTMLInputElement | null>(null);
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const handleChangeInputId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const handleChangeInputPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPw(e.target.value);
  };

  const doSignUp = () => {
    console.log(userId, userPw);
  };
  return (
    <div className="PopupComponent">
      <div className="PopupHeader">
        <p className="PopupTitle">회원가입 팝업창</p>
        <button
          type="button"
          className="ButtonClose"
          onClick={toggleSignUpPopup}
        >
          닫기
        </button>
      </div>
      <div className="PopupBody">
        <div className="PopupContent">
          <span>아이디 : </span>
          <input
            ref={(ref) => {
              refInputId.current = ref;
            }}
            type="text"
            placeholder="아이디를 입력하세요."
            value={userId}
            onChange={handleChangeInputId}
          ></input>
        </div>
        <div className="PopupContent">
          <span>비번 : </span>
          <input
            ref={(ref) => {
              refInputPw.current = ref;
            }}
            type="password"
            placeholder="비번을 입력하세요."
            value={userPw}
            onChange={handleChangeInputPw}
          ></input>
        </div>
      </div>
      <div className="PopUpFooter">
        <button
          disabled={userId.length <= 0 || userPw.length <= 0}
          type="button"
          className="PopupButton"
          onClick={doSignUp}
        >
          회원가입
        </button>
        {/* <button
          disabled={false}
          type="button"
          className="PopupButton"
          onClick={toggleSignUpPopup}
        >
          취소
        </button> */}
      </div>
    </div>
  );
};
export default SignUpPresenter;
