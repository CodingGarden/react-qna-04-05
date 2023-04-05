import { HashRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import AuthProvider from './AuthProvider';
import AuthContext from './AuthContext';

function Protected() {
  const { isLoggedIn } = useContext(AuthContext);
  if (isLoggedIn) return <Outlet />;
  return <Navigate to="/" />;
}

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Protected />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </HashRouter>
  );
}
