import styles from '../../css/style.module.scss';
import { ChattingInfo } from '../../util/interface_util';

interface Props {
  chattingInfo: ChattingInfo;
}

const ChattingPresenter = ({ chattingInfo }: Props) => {
  return (
    <div className={styles['side-view-chatting-item']}>
      <div className={styles['side-view-chatting-item-header']}>
        {chattingInfo.userName}
      </div>
      <div className={styles['side-view-chatting-item-content']}>
        {chattingInfo.text}
      </div>
    </div>
  );
};

export default ChattingPresenter;
