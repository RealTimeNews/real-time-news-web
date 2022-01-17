import React, { useRef, useState } from 'react';
import '../../App';
const LoginPresenter = () => {
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

  const doLogin = () => {
    console.log(userId, userPw);
  };

  return (
    <div className="MainComponent">
      <h3>로그인 페이지</h3>
      <div>
        <div className="MainContent">
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
        <div className="MainContent">
          <span>비번 : </span>
          <input
            ref={(ref) => {
              refInputPw.current = ref;
            }}
            type="text"
            placeholder="비번을 입력하세요."
            value={userPw}
            onChange={handleChangeInputPw}
          ></input>
        </div>
        <button
          disabled={userId.length <= 0 || userPw.length <= 0}
          type="button"
          className="Button"
          onClick={doLogin}
        >
          로그인
        </button>
        <button disabled={false} type="button" className="Button">
          회원가입
        </button>
      </div>
    </div>
  );
};
export default LoginPresenter;
