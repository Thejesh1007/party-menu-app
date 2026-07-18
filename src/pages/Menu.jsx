import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Menu() {
  const { user, logout } = useAuth();

  return (
    <div className="menu-page-placeholder">
      <h1>Party Menu</h1>
      <p>Welcome, {user?.name}</p>
      <Link to="/saved-recipes">Saved Recipes</Link>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Menu;