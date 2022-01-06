import MainViewPresenter from './main_view_presenter';

export default function MainViewContainer() {
  const dayList = [
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
    '일요일'
  ];

  return <MainViewPresenter dayList={dayList} />;
}
