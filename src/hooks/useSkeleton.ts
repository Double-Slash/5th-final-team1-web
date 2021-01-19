/* eslint-disable consistent-return */
import { useCallback, useEffect, useRef, useState } from "react";

interface IUseSkeleton {
  skeletonRef?: React.RefObject<Element>;
  threshold?: number;
}

function UseSkeleton({ threshold }: IUseSkeleton): [boolean, React.RefObject<HTMLUListElement>] {
  const [isLoad, setIsLoad] = useState(false);
  const [lazyLoading, setLazyLoading] = useState(false);
  const observer = useRef<IntersectionObserver | undefined>(undefined);
  const skeletonRef = useRef<HTMLUListElement>(null);

  const onIntersection: IntersectionObserverCallback = useCallback(([entry], io) => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      setIsLoad(true);
    }
  }, []);

  useEffect(() => {
    if (!skeletonRef?.current) return;
    if (!observer.current) {
      const options = { root: null, rootMargin: "0px", threshold };
      observer.current = new IntersectionObserver(onIntersection, options);
    }
    observer.current.observe(skeletonRef.current);
    return () => {
      if (!observer.current) return;
      observer.current.disconnect();
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
