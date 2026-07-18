import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function NotFound() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="notfound-page">
      <h1>404 – Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to={isAuthenticated ? '/' : '/signin'}>
        {isAuthenticated ? 'Back to Menu' : 'Back to Sign In'}
      </Link>
    </div>
  );
}

export default NotFound;