import React from 'react';
import styles from '../../css/style.module.scss';
import { HashTagInfo } from '../../util/interface_util';
import HashTagPresenter from '../hashtag/hashtag_presenter';

interface Props {
  hashTagList: HashTagInfo[];
}

const MainViewPresenter = ({ hashTagList }: Props) => {
  return (
    <div className={styles['main-component']}>
      <h2>메인페이지</h2>
      <div className={styles['hashtag-wrap']}>
        {hashTagList.map((hashTagInfo: HashTagInfo) => {
          return (
            <HashTagPresenter key={hashTagInfo.id} hashTagInfo={hashTagInfo} />
          );
        })}
      </div>
    </div>
  );
};
export default React.memo(MainViewPresenter);
