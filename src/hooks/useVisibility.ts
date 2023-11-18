import debounce from "lodash/debounce";
import { useEffect, useRef, useState } from "react";

const useVisibility = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [isVisible, setVisible] = useState(false);

  const listener = debounce(() => {
    const { scrollY, innerHeight } = window;

    if (ref.current) {
      const { offsetTop, offsetHeight } = ref.current;

      if (
        scrollY + innerHeight >= offsetTop &&
        scrollY <= offsetTop + offsetHeight
      ) {
        setVisible(true);
      }
    }
  }, 100);

  useEffect(() => {
    if (ref.current) {
      window.addEventListener("scroll", listener);
    }

    return () => {
      if (ref.current) {
        window.removeEventListener("scroll", listener);
      }
    };
  }, [ref.current]);

  return { ref, isVisible };
};

export default useVisibility;
