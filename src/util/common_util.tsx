export const filterMap = () => {
  const hashMap = new Map();
  hashMap.set('스포츠', 0);
  hashMap.set('IT/과학', 1);
  hashMap.set('경제', 2);
  hashMap.set('연예', 3);

  return hashMap;
};

export const filterNumber = (filter: string) => {
  const map = filterMap();

  const filterNum = map.get(filter);

  return filterNum;
};
