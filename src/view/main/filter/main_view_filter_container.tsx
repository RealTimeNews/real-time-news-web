import { observer } from 'mobx-react';
import { useEffect, useRef, useState } from 'react';
import styles from '../../../css/style.module.scss';
import { filterNumber } from '../../../util/common_util';
import { HashTagInfo } from '../../../util/interface_util';
import HashTagInputPresenter from '../../hashtag/hashtag_input_presenter';
import HashTagPresenter from '../../hashtag/hashtag_presenter';
import MainViewFilterHeaderPresenter from './main_view_filter_header_presenter';

const MainViewFilterContainer = observer(() => {
  const [totalHashTagInfo, setTotalHashTagInfo] = useState<HashTagInfo[]>([
    {
      id: 1,
      hashTag: '메시',
      filter: '스포츠',
      count: 50
    },
    {
      id: 2,
      hashTag: '메시 코로나',
      filter: '스포츠',
      count: 78
    },
    {
      id: 3,
      hashTag: '호날두',
      filter: '스포츠',
      count: 28
    },
    {
      id: 4,
      hashTag: '호날두 노쇼',
      filter: '스포츠',
      count: 23
    },
    {
      id: 5,
      hashTag: '코로나',
      filter: '경제',
      count: 15
    },
    {
      id: 6,
      hashTag: '코로나 확진자',
      filter: '경제',
      count: 109
    },
    {
      id: 7,
      hashTag: '인공지능 AI',
      filter: 'IT/과학',
      count: 77
    },
    {
      id: 8,
      hashTag: '블록체인 NFT',
      filter: 'IT/과학',
      count: 41
    },
    {
      id: 9,
      hashTag: '유재석 확진',
      filter: '연예',
      count: 38
    },
    {
      id: 10,
      hashTag: '김종국 논란',
      filter: '연예',
      count: 40
    }
  ]);

  const hashTagId = useRef(totalHashTagInfo.length);
  const [filter, setFilter] = useState('All');
  const [totalHashTagList, setTotalHashTagList] = useState<HashTagInfo[]>([]);
  const [isHashTagPopupVisible, setIsHashTagPopupVisible] = useState(false);

  const handleFilter = (filter: string) => {
    setFilter(filter);
  };

  const sortList = (list: HashTagInfo[]) => {
    list.sort((a: HashTagInfo, b: HashTagInfo) => {
      if (filterNumber(a.filter) === filterNumber(b.filter)) {
        return b.count - a.count;
      }
      return filterNumber(a.filter) - filterNumber(b.filter);
    });
    return list;
  };

  const toggleHashTagInputPopup = () => {
    setIsHashTagPopupVisible(!isHashTagPopupVisible);
  };

  const createHashTag = (
    hashTagFilter: string,
    hashTagName: string,
    hashTagCount: number
  ) => {
    hashTagId.current += 1;

    const newHashTag: HashTagInfo = {
      id: hashTagId.current,
      filter: hashTagFilter,
      hashTag: hashTagName,
      count: hashTagCount
    };

    setTotalHashTagInfo((totalHashTagInfo) =>
      totalHashTagInfo.concat(newHashTag)
    );
  };

  useEffect(() => {
    if (filter === 'All') {
      setTotalHashTagList(sortList(totalHashTagInfo));
    } else {
      const newHashTagList: HashTagInfo[] = totalHashTagInfo.filter(
        (hashTag: HashTagInfo) => hashTag.filter === filter
      );
      setTotalHashTagList(sortList(newHashTagList));
    }
  }, [filter, totalHashTagInfo]);

  return (
    <div className={styles['main-component']}>
      <h2>필터페이지</h2>
      <MainViewFilterHeaderPresenter
        handleFilter={handleFilter}
        toggleHashTagInputPopup={toggleHashTagInputPopup}
      />
      <div className={styles['hashtag-wrap']}>
        {totalHashTagList.map((hashTagInfo: HashTagInfo) => {
          return (
            <HashTagPresenter key={hashTagInfo.id} hashTagInfo={hashTagInfo} />
          );
        })}
      </div>
      {isHashTagPopupVisible && (
        <HashTagInputPresenter
          isVisible={isHashTagPopupVisible}
          toggleHashTagInputPopup={toggleHashTagInputPopup}
          createHashTag={createHashTag}
        />
      )}
    </div>
  );
});

export default MainViewFilterContainer;
