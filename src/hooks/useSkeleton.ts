/* eslint-disable consistent-return */
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

interface IUseSkeleton {
  threshold?: number;
}

function UseSkeleton<T extends HTMLElement>({ threshold }: IUseSkeleton): [boolean, React.RefObject<T>] {
  const [isLoad, setIsLoad] = useState(false);
  const [lazyLoading, setLazyLoading] = useState(false);
  const observer = useRef<IntersectionObserver | undefined>(undefined);
  const skeletonRef = useRef<T>(null);

  const onIntersection: IntersectionObserverCallback = useCallback(([entry], io) => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      setIsLoad(true);
    }
  }, []);

  useLayoutEffect(() => {
    if (!skeletonRef?.current) return;
    if (!observer.current) {
      const options = { root: null, rootMargin: "0px", threshold };
      observer.current = new IntersectionObserver(onIntersection, options);
    }
    observer.current.observe(skeletonRef.current);
    return () => {
      if (!observer.current) return;
      return observer.current.disconnect();
    };
  }, [onIntersection, skeletonRef, threshold]);

  useEffect(() => {
    if (!isLoad) return;
    setTimeout(() => {
      setLazyLoading(true);
    }, 800);
  }, [isLoad]);

  return [lazyLoading, skeletonRef];
}

export default UseSkeleton;
