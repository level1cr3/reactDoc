import {
  createContext,
  useState,
  type Dispatch,
  type ReactElement,
  type SetStateAction,
} from "react";

type CountContextType = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

export const CountContext = createContext<CountContextType | undefined>(
  undefined
);

type Props = {
  children: ReactElement[];
};

const CountProvider = ({ children }: Props) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

export default CountProvider;
