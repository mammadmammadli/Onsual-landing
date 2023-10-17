import { createContext, PropsWithChildren, useContext, useState } from "react";

type LottieProviderProps = PropsWithChildren & {};

export type LottieSections = "cover" | "guide-item";

const LottieContext = createContext<{
  previousLotties: LottieSections[];
  activeLottie: LottieSections | undefined;
  setActiveLottie: (activeLottie: LottieSections) => void;
  clearActiveLottie: () => void;
}>({
  activeLottie: undefined,
  previousLotties: [],
  setActiveLottie: () => {},
  clearActiveLottie: () => {},
});

const LottieProvider = ({ children }: LottieProviderProps) => {
  const [activeLottie, setActiveLottie] = useState<LottieSections>();
  const [previousLotties, setPreviousLottie] = useState<LottieSections[]>([]);

  const clearActiveLottie = () => {
    if (activeLottie) {
      setExpiredLottie(activeLottie);

      setActiveLottie(undefined);
    }
  };

  const setExpiredLottie = (activeLottie: LottieSections) => {
    if (previousLotties.includes(activeLottie)) return;

    setPreviousLottie((previousLottie) => [...previousLottie, activeLottie]);
  };

  return (
    <LottieContext.Provider
      value={{
        activeLottie,
        previousLotties,
        clearActiveLottie,
        setActiveLottie,
      }}
    >
      {children}
    </LottieContext.Provider>
  );
};

export const useLottie = () => useContext(LottieContext);

export default LottieProvider;
