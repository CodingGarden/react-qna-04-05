import { useContext } from 'react';
import AuthContext from '../AuthContext';

function Header() {
  const { isLoggedIn, setLoggedIn } = useContext(AuthContext);
  return (
    <header style={{ background: '#333', color: '#eee' }}>
      {isLoggedIn ? 'You are logged in!' : 'You are not logged in...'}
      <br />
      {isLoggedIn ? (
        <button type="button" onClick={() => setLoggedIn(false)}>
          Log Out
        </button>
      ) : (
        <button type="button" onClick={() => setLoggedIn(true)}>
          Log In
        </button>
      )}
    </header>
  );
}

export default Header;
