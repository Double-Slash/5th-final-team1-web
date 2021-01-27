/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable consistent-return */
import { useCallback, useEffect, useRef, useState } from "react";
import { AxiosResponse } from "axios";

interface IUseInfiniteScroll<DBType> {
  api: ({ text, page }: { text: string; page: number }) => Promise<AxiosResponse<any>>;
  lastId: number;
  dataTable: string;
  searchList: DBType[] | undefined;
  searchText: string;
}

function usePaginationScroll<DBType, Tag extends HTMLElement>({
  api,
  dataTable,
  lastId,
  searchList,
  searchText,
}: IUseInfiniteScroll<DBType>): [DBType[] | undefined, React.RefObject<Tag>] {
  const [resultData, setResultData] = useState<DBType[] | undefined>();
  const [hasMore, setHasMore] = useState(true);
  const lastIdList = useRef<number[]>([]);
  const loadingRef = useRef<Tag>(null);
  const pageNumber = useRef(1);

  const onIntersect: IntersectionObserverCallback = useCallback(
    async ([entry], observer) => {
      if (!searchText) return;
      if (pageNumber.current === 1) {
        pageNumber.current = 2;
        return;
      }
      if (entry.isIntersecting && hasMore) {
        observer.unobserve(entry.target);
        const { data } = await api({ text: searchText, page: pageNumber.current });
        const dataLength = data[dataTable].length;
        if (data[dataTable][dataLength - 1].id === lastIdList.current[lastIdList.current.length - 1]) {
          setHasMore(false);
          observer.unobserve(entry.target);
        } else {
          setResultData(data[dataTable]);
          lastIdList.current.push(data[dataTable][dataLength - 1].id);
          pageNumber.current += 1;
          observer.observe(entry.target);
        }
      }
    },
    [api, dataTable, hasMore, searchText],
  );

  useEffect(() => {
    if (!loadingRef.current) return;
    const options = { root: null, rootMargin: "0px", threshold: 1 };
    const observer = new IntersectionObserver(onIntersect, options);
    observer.observe(loadingRef.current);
    return () => observer.disconnect();
  }, [loadingRef, onIntersect]);

  useEffect(() => {
    if (!searchList || !lastId) return;
    setResultData(searchList);
    lastIdList.current.push(lastId);
  }, [lastId, searchList]);

  return [resultData, loadingRef];
}

export default usePaginationScroll;
