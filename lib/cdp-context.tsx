import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Define the shape of the context
interface gigyaContextType {
  isLoaded: boolean;
  currentUID: string;
  setCurrentUID: React.Dispatch<React.SetStateAction<string>>;
}

const gigyaContext = createContext<gigyaContextType | undefined>(undefined);

interface gigyaProviderProps {
  children: ReactNode;
}

export const GigyaProvider: React.FC<gigyaProviderProps> = ({ children }) => {
  const [isGigyaLoaded, setIsGigyaLoaded] = useState(false);

  const [areSDKSnippetsLoaded, setAreSDKSnippetsLoaded] = useState(false);

  const [currentUID, setCurrentUID] = useState<string>("");

  useEffect(() => {
    const checkForGigya = () => {
      if (window.gigya) {
        setIsGigyaLoaded(true);
        clearInterval(interval);
      }
    };

    const interval = setInterval(checkForGigya, 100);

    // Cleanup the interval if it's still running on unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isGigyaLoaded) {
      window.mvpCDP = null;

      (async () => {
        const mvpSDK = await window.gigya.cdp.init({
          apiDomain: "EU5",
          bUnitId: "4_ETsFYLshCiZp4soBquUPsA",
          appId: "HHnO6HQLp6P1_NcS6nWZeg",
        });

        window.mvpCDP = mvpSDK;

        setAreSDKSnippetsLoaded(true);
      })();
    }
  }, [isGigyaLoaded]);

  return (
    <gigyaContext.Provider
      value={{ isLoaded: areSDKSnippetsLoaded, currentUID, setCurrentUID }}
    >
      {children}
    </gigyaContext.Provider>
  );
};

export const useGigya = (): gigyaContextType => {
  const context = useContext(gigyaContext);

  if (!context) {
    throw new Error("usegigya must be used within a gigyaProvider");
  }
  return context;
};
