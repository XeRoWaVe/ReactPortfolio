import { useEffect, useState } from "react";

export const useIsVisible = (ref) => {
  const [isINtersecting, setIsintersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsintersecting(entry.isIntersecting);
    });

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isINtersecting;
};
