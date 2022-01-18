import { useRef, useState } from 'react';
import '../../App';
import styles from '../../css/style.module.scss';

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
    <div className={styles['signUp-popup']}>
      <div className={styles['popup-header']}>
        <p className={styles['popup-tit']}>회원가입 팝업창</p>
      </div>
      <div className={styles['popup-body']}>
        <div className={styles['popup-content-list']}>
          <div className={styles['popup-content-item']}> 아이디 </div>
          <div className={styles['popup-content-item']}>
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
          <div className={styles['popup-content-item']}> 비밀번호 </div>
          <div className={styles['popup-content-item']}>
            <input
              ref={(ref) => {
                refInputId.current = ref;
              }}
              type="password"
              placeholder="비밀번호를 입력하세요."
              value={userPw}
              onChange={handleChangeInputPw}
            ></input>
          </div>
          <div className={styles['popup-content-item']}> 기타등등 1 </div>
          <div className={styles['popup-content-item']}> 기타등등 2 </div>
          <div className={styles['popup-content-item']}> 기타등등 3 </div>
        </div>
      </div>
      <div className={styles['popup-footer']}>
        <button
          disabled={userId.length <= 0 || userPw.length <= 0}
          className={styles['popup-button']}
          onClick={doSignUp}
        >
          회원가입
        </button>
        <button
          disabled={false}
          className={styles['popup-button']}
          onClick={toggleSignUpPopup}
        >
          창닫기
        </button>
      </div>
    </div>
  );
};
export default SignUpPresenter;
