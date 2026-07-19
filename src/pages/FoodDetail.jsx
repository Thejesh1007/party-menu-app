import { Link, useParams } from 'react-router-dom';
import { getMenuItemById } from '../data/menuData';
import { useSavedRecipes } from '../context/SavedRecipesContext';
import './FoodDetail.css';

function FoodDetail() {
  const { id } = useParams();
  const item = getMenuItemById(id);
  const { isSaved, toggleSaved } = useSavedRecipes();

  if (!item) {
    return (
      <div className="fooddetail-notfound">
        <p>Recipe not found.</p>
        <Link to="/">Back to Menu</Link>
      </div>
    );
  }

  const saved = isSaved(item.id);
  const categoryLabel = item.category.charAt(0).toUpperCase() + item.category.slice(1);

  return (
    <div className="fooddetail-page">
      <div className="fooddetail-topbar">
        <Link to="/" className="back-to-menu">
          ← Back to Menu
        </Link>
        <div className="fooddetail-topbar-actions">
          <Link to="/saved-recipes" className="fooddetail-saved-link">
            Saved Recipes
          </Link>
          <button
            type="button"
            className={`save-toggle ${saved ? 'save-toggle-saved' : ''}`}
            onClick={() => toggleSaved(item)}
          >
            {saved ? '✓ Saved' : 'Save Recipe'}
          </button>
        </div>
      </div>

      <div className="fooddetail-main">
        <div className="fooddetail-image-wrap">
          <img src={item.image} alt={item.name} />
        </div>

        <div className="fooddetail-info">
          <div className="fooddetail-badges">
            <span className="badge badge-category">{categoryLabel}</span>
            <span className={`badge ${item.isVeg ? 'badge-veg' : 'badge-nonveg'}`}>
              {item.isVeg ? '🌿 Veg' : '🍖 Non-Veg'}
            </span>
          </div>
          <h1>{item.name}</h1>
          <p className="fooddetail-servings">{item.servings}</p>
          <p className="fooddetail-description">{item.fullDescription}</p>
        </div>
      </div>

      <div className="fooddetail-ingredients">
        <h2>Ingredients</h2>
        <div className="ingredients-list">
          {item.ingredients.map((ingredient, index) => (
            <div className="ingredient-row" key={`${ingredient.name}-${index}`}>
              <span>{ingredient.name}</span>
              <span className="ingredient-quantity">{ingredient.quantity}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FoodDetail;