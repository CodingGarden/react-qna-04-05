import { createContext } from 'react';

const AuthContext = createContext<{
  isLoggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
  // React.Dispatch<React.SetStateAction<boolean>>
}>({
  isLoggedIn: false,
  setLoggedIn: () => {},
});

export default AuthContext;
