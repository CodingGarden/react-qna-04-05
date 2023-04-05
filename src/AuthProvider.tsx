import { ReactNode, useMemo, useState } from 'react';
import AuthContext from './AuthContext';

function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const value = useMemo(
    () => ({
      isLoggedIn,
      setLoggedIn,
    }),
    [isLoggedIn, setLoggedIn]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
