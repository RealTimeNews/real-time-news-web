import { observer } from 'mobx-react';
import { useEffect, useRef, useState } from 'react';
import { HashTagInfo } from '../../util/interface_util';
import MainViewPresenter from './main_view_presenter';

const MainViewContainer = observer(() => {
  const [totalHashTagList, setTotalHashTagList] = useState<HashTagInfo[]>([]);
  const count = useRef(0);

  const getDataList: HashTagInfo[] = [
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
      id: 9,
      hashTag: '김종국 논란',
      filter: '연예',
      count: 40
    }
  ];

  let timer: ReturnType<typeof setTimeout>;

  useEffect(() => {
    if (count.current < getDataList.length) {
      timer = setInterval(() => {
        setTotalHashTagList((totalHashTagList) =>
          totalHashTagList.concat(getDataList[count.current])
        );
        count.current += 1;
      }, 1500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [totalHashTagList]);

  return <MainViewPresenter hashTagList={totalHashTagList} />;
});

export default MainViewContainer;
