import { useRef } from 'react';

export function useAction<T>(
  Action: new (store: any, ...params: any[]) => T,
  store: any,
  ...args: any[]
): T {
  const instance = new Action(store, args);

  const actionRef = useRef<T | null>(null);
  if (!actionRef.current) {
    actionRef.current = instance;
  }

  return actionRef.current;
}
