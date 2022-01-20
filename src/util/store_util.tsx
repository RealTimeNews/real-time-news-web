import { createContext, useContext, useState } from 'react';
import MainStore from '../view_model/store/main_store';

export const storeContext = createContext<MainStore | null>(null);

interface Props {
  children: any;
  onInit?: (store: MainStore) => void;
}

export const MainStoreProvider = ({ children, onInit }: Props) => {
  const [store] = useState(() => new MainStore());
  if (onInit) onInit(store);

  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};

export const useStore = () => {
  const store = useContext(storeContext);
  if (!store) {
    throw new Error('Cannot upload Store');
  }
  return store;
};

MainStoreProvider.defaultProps = {
  onInit: undefined
};
