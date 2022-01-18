import Hls from 'hls.js';
import { useEffect, useRef, useState } from 'react';
import styles from '../../css/style.module.scss';

interface Props {
  dayList: string[];
  videoURL: string;
}

const MainViewPresenter = ({ dayList, videoURL }: Props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [mainURL, setMainURL] = useState(videoURL);

  console.log(mainURL);
  useEffect(() => {
    if (!videoRef.current) return undefined;

    const hls = new Hls();
    hls.loadSource(mainURL);
    hls.attachMedia(videoRef.current);
    hls.startLoad();

    return () => {
      hls.stopLoad();
      hls.detachMedia();
    };
  }, [mainURL]);

  const render = dayList.map((day, idx) => {
    return <li key={idx}>{day}</li>;
  });

  return (
    <div className={styles['main-component']}>
      <b>메인페이지</b>
      <div>
        <video
          ref={(ref) => {
            videoRef.current = ref;
          }}
          autoPlay
        />
      </div>
    </div>
  );
};
export default MainViewPresenter;
