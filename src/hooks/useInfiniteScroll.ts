/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable consistent-return */
import { useCallback, useEffect, useRef, useState, RefObject } from "react";
import { AxiosResponse } from "axios";

interface IUseInfiniteScroll {
  loadingRef: RefObject<Element>;
  api: (offset?: number, limit?: number) => Promise<AxiosResponse<any>>;
  limit?: number;
  threshold?: number;
}

function UseInfiniteScroll<T>({ api, loadingRef, limit = 10, threshold = 1 }: IUseInfiniteScroll) {
  const [result, setResult] = useState<T | undefined>(undefined);
  const [hasMore, setHasMore] = useState(true);
  const lastId = useRef(0);

  const onIntersect: IntersectionObserverCallback = useCallback(
    async ([entry], observer) => {
      if (entry.isIntersecting && hasMore) {
        observer.unobserve(entry.target);
        const { data } = await api(lastId.current, limit);
        lastId.current = data.questions.length;
        setResult(data);
        if (lastId.current < limit) {
          observer.unobserve(entry.target);
          setHasMore(false);
        } else {
          observer.observe(entry.target);
        }
      }
    },
    [api, hasMore, limit],
  );

  useEffect(() => {
    if (!loadingRef.current) return;
    const options = { root: null, rootMargin: "0px", threshold };
    const observer = new IntersectionObserver(onIntersect, options);
    observer.observe(loadingRef.current);
    return () => observer.disconnect();
  }, [loadingRef, onIntersect, threshold]);

  return [result];
}

export default UseInfiniteScroll;
