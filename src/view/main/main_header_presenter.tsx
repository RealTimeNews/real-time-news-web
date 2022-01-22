import { Link } from 'react-router-dom';
import '../../App';
import styles from '../../css/style.module.scss';

interface Props {
  userNickname: string;
  onClickLogout: () => void;
}

const MainHeaderPresenter = ({ userNickname, onClickLogout }: Props) => {
  return (
    <div className={styles['nav-header']}>
      <div className={styles['nav-title']}>
        <h1 className={styles['nav-title-content']}>Real Time News</h1>
      </div>
      <div className={styles['nav-icon']}>
        <Link to="./">
          <button className="NavButton"> Home </button>
        </Link>
      </div>
      <div className={styles['nav-icon']}>
        <Link to="./filter">
          <button className="NavButton"> Filter </button>
        </Link>
      </div>
      {userNickname !== '' ? (
        <div className={styles['nav-icon-right']}>
          <button className="NavButton" onClick={onClickLogout}>
            LogOut
          </button>
        </div>
      ) : (
        <div className={styles['nav-icon-right']}>
          <Link to="./login">
            <button className="NavButton"> 로그인 </button>
          </Link>
        </div>
      )}
    </div>
  );
};
export default MainHeaderPresenter;
