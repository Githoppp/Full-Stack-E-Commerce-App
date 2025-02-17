import { Link, useNavigate } from 'react-router-dom';
import { getToken, logoutUser } from '../services/authService';

function Navbar() {
  const navigate = useNavigate();
  const isAuthenticated = getToken() !== null;

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/products">Products</Link> | 
      {isAuthenticated && <Link to="/cart">Cart</Link>} |
      {!isAuthenticated ? (
        <Link to="/login">Login</Link>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </nav>
  );
}

export default Navbar;