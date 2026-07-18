import { useParams, Link } from 'react-router-dom';

function FoodDetail() {
  const { id } = useParams();

  return (
    <div className="fooddetail-page-placeholder">
      <p>Food detail for item {id} coming in Phase 3.</p>
      <Link to="/">Back to Menu</Link>
    </div>
  );
}

export default FoodDetail;