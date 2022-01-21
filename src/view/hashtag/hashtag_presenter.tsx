import styles from '../../css/style.module.scss';
import { filterNumber } from '../../util/common_util';
import { HashTagInfo } from '../../util/interface_util';

interface Props {
  hashTagInfo: HashTagInfo;
}

const HashTagPresenter = ({ hashTagInfo }: Props) => {
  const filterNum = filterNumber(hashTagInfo.filter);
  let hashTagFilter;

  switch (filterNum) {
    case 0:
      hashTagFilter = (
        <div className={styles['hashtag-content-title-sport']}>
          {hashTagInfo.filter}
        </div>
      );
      break;
    case 1:
      hashTagFilter = (
        <div className={styles['hashtag-content-title-science']}>
          {hashTagInfo.filter}
        </div>
      );
      break;
    case 2:
      hashTagFilter = (
        <div className={styles['hashtag-content-title-economy']}>
          {hashTagInfo.filter}
        </div>
      );
      break;
    case 3:
      hashTagFilter = (
        <div className={styles['hashtag-content-title-entertainment']}>
          {hashTagInfo.filter}
        </div>
      );
      break;
  }

  return (
    <div className={styles['hashtag-content']}>
      <div className={styles['hashtag-content-title-wrap']}>
        <div className={styles['hashtag-content-title']}>{hashTagFilter}</div>
        <div className={styles['hashtag-content-count']}>
          {hashTagInfo.count}회
        </div>
      </div>
      <div className={styles['hashtag-content-item']}>
        #{hashTagInfo.hashTag}
      </div>
    </div>
  );
};

export default HashTagPresenter;
