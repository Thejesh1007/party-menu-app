import { Link } from 'react-router-dom';
import '../styles/cards.css';

function FoodCard({ item }) {
  return (
    <Link to={`/menu/${item.id}`} className="food-card">
      <div className="food-card-image-wrap">
        <img src={item.image} alt={item.name} />
        <span className={`diet-badge ${item.isVeg ? 'diet-veg' : 'diet-nonveg'}`}>
          {item.isVeg ? 'VEG' : 'NON-VEG'}
        </span>
      </div>
      <div className="food-card-body">
        <span className="food-card-category">{item.category}</span>
        <h3 className="food-card-name">{item.name}</h3>
        <p className="food-card-description">{item.description}</p>
        <span className="food-card-servings">{item.servings}</span>
      </div>
    </Link>
  );
}

export default FoodCard;