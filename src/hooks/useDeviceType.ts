import { useEffect, useState } from "react";

export type DeviceType = "iOS" | "Android" | "unknown";

function getMobileOperatingSystem(): DeviceType {
  const userAgent = navigator.userAgent;

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return "iOS";
  }

  return "unknown";
}

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<DeviceType>();

  useEffect(() => {
    const device = getMobileOperatingSystem();

    setDeviceType(device);
  }, [setDeviceType]);

  return { deviceType };
};

export default useDeviceType;
