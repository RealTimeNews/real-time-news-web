import { useRef, useState } from 'react';
import '../../App';
import styles from '../../css/style.module.scss';

interface Props {
  toggleSignUpPopup: () => void;
}

const SignUpPresenter = ({ toggleSignUpPopup }: Props) => {
  const refInputId = useRef<HTMLInputElement | null>(null);
  const refInputPw = useRef<HTMLInputElement | null>(null);
  const refInputNickname = useRef<HTMLInputElement | null>(null);
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userNickname, setUserNickname] = useState('');

  const handleChangeInputId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const handleChangeInputPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPw(e.target.value);
  };

  const handleChangeInputNickname = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserNickname(e.target.value);
  };

  const doSignUp = () => {
    console.log(userId, userPw, userNickname);
  };
  return (
    <div className={styles['signUp-popup']}>
      <div className={styles['popup-header']}>
        <p className={styles['popup-title']}>회원가입 </p>
      </div>
      <div className={styles['popup-body']}>
        <div className={styles['popup-content-list']}>
          <div className={styles['popup-content-item']}>
            <div className={styles['popup-content-item-title']}> 아이디 </div>
            <input
              ref={(ref) => {
                refInputId.current = ref;
              }}
              className={styles['popup-content-item-input']}
              type="text"
              placeholder="아이디를 입력하세요."
              value={userId}
              onChange={handleChangeInputId}
            ></input>
          </div>
          <div className={styles['popup-content-item']}>
            <div className={styles['popup-content-item-title']}> 비밀번호 </div>
            <input
              ref={(ref) => {
                refInputPw.current = ref;
              }}
              className={styles['popup-content-item-input']}
              type="password"
              placeholder="비밀번호를 입력하세요."
              value={userPw}
              onChange={handleChangeInputPw}
            ></input>
          </div>
          <div className={styles['popup-content-item']}>
            <div className={styles['popup-content-item-title']}> 닉네임 </div>
            <input
              ref={(ref) => {
                refInputNickname.current = ref;
              }}
              className={styles['popup-content-item-input']}
              type="text"
              placeholder="닉네임을 입력하세요."
              value={userNickname}
              onChange={handleChangeInputNickname}
            ></input>
          </div>
        </div>
      </div>
      <div className={styles['popup-footer']}>
        <button
          disabled={
            userId.length <= 0 || userPw.length <= 0 || userNickname.length <= 0
          }
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
