interface Props {
  dayList: string[];
}

const MainViewPresenter = ({ dayList }: Props) => {
  const render = dayList.map((day, idx) => {
    return <li key={idx}>{day}</li>;
  });
  return (
    <div className="rightComponent">
      <b>메인페이지</b>
      <ul>{render}</ul>
    </div>
  );
};
export default MainViewPresenter;
