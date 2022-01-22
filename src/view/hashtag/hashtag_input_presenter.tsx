import { Dialog } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import styles from '../../css/style.module.scss';

interface Props {
  isVisible: boolean;
  toggleHashTagInputPopup: () => void;
  createHashTag: (
    hashTagFilter: string,
    hashTagName: string,
    hashTagCount: number
  ) => void;
}

const HashTagInputPresenter = ({
  isVisible,
  toggleHashTagInputPopup,
  createHashTag
}: Props) => {
  const refInputFilter = useRef<HTMLSelectElement | null>(null);
  const refInputHashtag = useRef<HTMLInputElement | null>(null);
  const refInputCount = useRef<HTMLInputElement | null>(null);
  const [hashTagFilter, setHashTagFilter] = useState('스포츠');
  const [hashTagName, setHashTagName] = useState('');
  const [hashTagCount, setHashTagCount] = useState(0);

  const handleChangeHashTagFilter = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setHashTagFilter(e.target.value);
  };

  const handleChangeHashTagName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHashTagName(e.target.value);
  };

  const handleChangeHashTagCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHashTagCount(parseInt(e.target.value));
  };

  const doCreateHashTag = () => {
    if (isNaN(hashTagCount)) {
      alert('빈도수가 숫자가 아닙니다!');
      return;
    }
    createHashTag(hashTagFilter, hashTagName, hashTagCount);
    toggleHashTagInputPopup();
  };

  return (
    <Dialog open={isVisible}>
      <div className={styles['signUp-popup']}>
        <div className={styles['popup-header']}>
          <p className={styles['popup-title']}>해시태그 등록하기 </p>
        </div>
        <div className={styles['popup-body']}>
          <div className={styles['popup-content-list']}>
            <div className={styles['popup-content-item']}>
              <div className={styles['popup-content-item-title']}> 분류 </div>
              <form>
                <select
                  ref={(ref) => {
                    refInputFilter.current = ref;
                  }}
                  className={styles['popup-content-item-input']}
                  onChange={handleChangeHashTagFilter}
                >
                  <option value="스포츠">스포츠</option>
                  <option value="IT/과학">IT/과학</option>
                  <option value="경제">경제</option>
                  <option value="연예">연예</option>
                </select>
              </form>
            </div>
            <div className={styles['popup-content-item']}>
              <div className={styles['popup-content-item-title']}>해시태그</div>
              <input
                ref={(ref) => {
                  refInputHashtag.current = ref;
                }}
                className={styles['popup-content-item-input']}
                type="text"
                placeholder="해시태그명을 입력하세요."
                value={hashTagName}
                onChange={handleChangeHashTagName}
              ></input>
            </div>
            <div className={styles['popup-content-item']}>
              <div className={styles['popup-content-item-title']}> 빈도수 </div>
              <input
                ref={(ref) => {
                  refInputCount.current = ref;
                }}
                className={styles['popup-content-item-input']}
                type="number"
                value={hashTagCount}
                onChange={handleChangeHashTagCount}
              ></input>
            </div>
          </div>
        </div>
        <div className={styles['popup-footer']}>
          <button
            disabled={hashTagName.length <= 0}
            className={styles['popup-button']}
            onClick={doCreateHashTag}
          >
            등록
          </button>
          <button
            className={styles['popup-button']}
            onClick={toggleHashTagInputPopup}
          >
            창닫기
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default HashTagInputPresenter;
