import { useState, useEffect, useMemo } from "react";
export function useOnScreen(ref, rootMargin) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => {
          setIntersecting(entry.isIntersecting);
        },
        { rootMargin }
      ),
    [rootMargin]
  );

  useEffect(() => {
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref,observer]);

  return isIntersecting;
}
