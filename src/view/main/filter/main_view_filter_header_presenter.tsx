import React, { useRef } from 'react';
import styles from '../../../css/style.module.scss';

interface Props {
  handleFilter: (filter: string) => void;
}

const MainViewFilterHeaderPresenter = ({ handleFilter }: Props) => {
  const filterRef = useRef<HTMLSelectElement | null>(null);

  const changeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleFilter(e.target.value);
  };

  return (
    <div className={styles['hashtag-filter-header']}>
      <form>
        <select
          ref={(ref) => {
            filterRef.current = ref;
          }}
          className={styles['hashtag-filter-header-combobox']}
          name="hashTagFilter"
          onChange={changeFilter}
        >
          <option value="All">All</option>
          <option value="스포츠">스포츠</option>
          <option value="IT/과학">IT/과학</option>
          <option value="경제">경제</option>
          <option value="연예">연예</option>
        </select>
      </form>
    </div>
  );
};
export default MainViewFilterHeaderPresenter;
