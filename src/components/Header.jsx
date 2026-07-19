import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Header.css';

function getSavedCount() {
  try {
    const raw = localStorage.getItem('party_menu_saved_recipes');
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.length : 0;
  } catch {
    return 0;
  }
}

function Header() {
  const { user, logout } = useAuth();
  const savedCount = getSavedCount();

  return (
    <header className="app-header">
      <div>
        <h1>Party Menu</h1>
        <p>Welcome, {user?.name}</p>
      </div>
      <div className="app-header-actions">
        <Link to="/saved-recipes" className="saved-recipes-link">
          Saved Recipes
          {savedCount > 0 && <span className="saved-badge">{savedCount}</span>}
        </Link>
        <button type="button" className="logout-button" onClick={logout}>
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;