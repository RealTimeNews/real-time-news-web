import { Link } from 'react-router-dom';
import '../../App';

const MainHeaderPresenter = () => {
  return (
    <div className="navHeader">
      <div className="navIcon">
        <h1>리얼타임뉴스</h1>
      </div>
      <div className="navIcon">
        <Link to="./">
          <button className="NavButton"> Home </button>
        </Link>
      </div>
      <div className="navIcon">
        <Link to="./1">
          <button className="NavButton"> 1 </button>
        </Link>
      </div>
      <div className="navIconRight">
        <Link to="./login">
          <button className="NavButton"> 로그인 </button>
        </Link>
      </div>
    </div>
  );
};
export default MainHeaderPresenter;
