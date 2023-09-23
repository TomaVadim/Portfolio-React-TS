import { createContext } from "react";

type MyContext = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}


export const Context = createContext<MyContext>({isOpen: false, setIsOpen: () => {}});