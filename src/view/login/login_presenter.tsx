import React, { useRef, useState } from 'react';
import styles from '../../css/style.module.scss';
import '../../App';

interface Props {
  toggleSignUpPopup: () => void;
}

const LoginPresenter = ({ toggleSignUpPopup }: Props) => {
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
    <div className={styles['main-component']}>
      <h3 className={styles['main-title']}>Real Time News</h3>
      <div className={styles['main-wrap']}>
        <div className={styles['main-content']}>
          <div className={styles['main-content-row']}>
            <input
              className={styles['main-content-input']}
              ref={(ref) => {
                refInputId.current = ref;
              }}
              type="text"
              placeholder="아이디를 입력하세요."
              value={userId}
              onChange={handleChangeInputId}
            ></input>
          </div>
          <div className={styles['main-content-row']}>
            <input
              className={styles['main-content-input']}
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
        <div className={styles['main-button-wrap']}>
          <button
            disabled={userId.length <= 0 || userPw.length <= 0}
            type="button"
            className={styles['main-button']}
            onClick={doLogin}
          >
            로그인
          </button>
          <button
            disabled={false}
            type="button"
            className={styles['main-button']}
            onClick={toggleSignUpPopup}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};
export default LoginPresenter;
