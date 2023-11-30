import { ReactNode, createContext, useState } from "react";

interface Props {
  children: ReactNode;
}
type stateContextType = {
  isCollapse: boolean;
  handleCollapse: () => void;
};

export const stateContext = createContext({} as stateContextType);

const StateContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}: Props) => {
  const [isCollapse, setCollapse] = useState(true);

  const handleCollapse = () => {
    setCollapse(!isCollapse);
  };

  const value = {
    isCollapse,
    handleCollapse,
  };

  return (
    <stateContext.Provider value={value}>{children}</stateContext.Provider>
  );
};

export default StateContextProvider;
