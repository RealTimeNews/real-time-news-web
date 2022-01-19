import { useStore } from '../../util/store_util';
import MainViewPresenter from './main_view_presenter';

export default function MainViewContainer() {
  const videoURL = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';

  const store = useStore();

  const name = store?.loginData.getUserName();

  console.log(name);

  return <MainViewPresenter videoURL={videoURL} />;
}
