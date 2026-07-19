import { Link } from 'react-router-dom';
import { useSavedRecipes } from '../context/SavedRecipesContext';
import SavedRecipeCard from '../components/SavedRecipeCard';
import './SavedRecipes.css';

function SavedRecipes() {
  const { savedItems } = useSavedRecipes();

  return (
    <div className="savedrecipes-page">
      <div className="savedrecipes-topbar">
        <div>
          <h1>Saved Recipes</h1>
          <p>{savedItems.length} recipes saved</p>
        </div>
        <Link to="/" className="saved-back-link">
          Back to Menu
        </Link>
      </div>

      {savedItems.length === 0 ? (
        <div className="savedrecipes-empty-state">
          <p>No saved recipes yet.</p>
          <Link to="/">Browse the menu</Link>
        </div>
      ) : (
        <div className="savedrecipes-grid">
          {savedItems.map((item) => (
            <SavedRecipeCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SavedRecipes;