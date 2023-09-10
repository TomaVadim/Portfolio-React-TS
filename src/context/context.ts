import { createContext } from "react";

interface MyContext {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}


export const Context = createContext<MyContext>({isOpen: false, setIsOpen: () => {}});