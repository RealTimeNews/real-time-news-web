import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../../css/style.module.scss';
import { ChattingInfo } from '../../util/interface_util';
import { useStore } from '../../util/store_util';
import ChattingPresenter from '../chatting/chatting_presenter';

const SideViewPresenter = () => {
  const store = useStore();
  const history = useHistory();

  const [totalChattingList, setTotalChattingList] = useState<ChattingInfo[]>(
    []
  );
  const chattingId = useRef(0);

  const refInputText = useRef<HTMLInputElement | null>(null);
  const [inputText, setInputText] = useState('');
  const handleChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const doChatting = () => {
    if (store.loginData.userNickname !== '') {
      chattingId.current += 1;
      const newText = {
        id: chattingId.current,
        userName: store.loginData.userNickname,
        text: inputText
      };
      setTotalChattingList((totalChattingList) =>
        totalChattingList.concat(newText)
      );
      setInputText('');
      refInputText.current?.focus();
    } else {
      alert('로그인이 필요한 기능입니다.');
      setInputText('');
      history.push('/login');
    }
  };

  const onKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      doChatting();
    }
  };

  return (
    <div className={styles['side-view-component']}>
      <b>채팅</b>
      <div className={styles['side-view-chatting-list']}>
        {totalChattingList.map((chattingInfo: ChattingInfo) => {
          return (
            <ChattingPresenter
              key={chattingInfo.id}
              chattingInfo={chattingInfo}
            />
          );
        })}
      </div>
      <div className={styles['side-view-chatting-wrap']}>
        <input
          ref={(ref) => {
            refInputText.current = ref;
          }}
          className={styles['side-view-chatting-input']}
          type="text"
          placeholder="글씨를 입력하세요."
          value={inputText}
          onChange={handleChangeInputText}
          onKeyUp={onKeyPress}
        ></input>
        <button
          className={styles['side-view-chatting-button']}
          disabled={inputText.length <= 0}
          onClick={doChatting}
        >
          전송
        </button>
      </div>
    </div>
  );
};
export default SideViewPresenter;
