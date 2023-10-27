import { useEffect, useState } from "react";

type Device = "lg" | "md" | "sm" | "xl" | "2xl";

const useResponsive = () => {
  const [device, setDevice] = useState<Device>();

  const resizeHandler = () => {
    if (window.innerWidth >= 1536) {
      setDevice("2xl");
    } else if (window.innerWidth >= 1280) {
      setDevice("xl");
    } else if (window.innerWidth >= 1024) {
      setDevice("lg");
    } else if (window.innerWidth >= 768) {
      setDevice("md");
    } else {
      setDevice("sm");
    }
  };

  useEffect(() => {
    resizeHandler();

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [setDevice]);

  return { device };
};

export default useResponsive;
