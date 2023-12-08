import { ReactNode, createContext, useState } from "react";
import { IProduct } from "../common/types";

interface Props {
  children: ReactNode;
}
type stateContextType = {
  isCollapse: boolean;
  handleCollapse: () => void;
  isPopup: boolean;
  handlePopup: () => void;
};

export const stateContext = createContext({} as stateContextType);

const StateContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}: Props) => {
  const [isCollapse, setCollapse] = useState(false);
  const [isPopup, setPopup] = useState(false);

  const handleCollapse = () => {
    setCollapse(!isCollapse);
  };

  const handlePopup = () => {
    setPopup(!isPopup);
  };

  const value = {
    isCollapse,
    isPopup,
    handlePopup,
    handleCollapse,
  };

  return (
    <stateContext.Provider value={value}>{children}</stateContext.Provider>
  );
};

export default StateContextProvider;
