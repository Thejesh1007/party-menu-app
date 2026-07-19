import { useMemo, useState } from 'react';
import Header from '../components/Header';
import FilterBar from '../components/FilterBar';
import FoodCard from '../components/FoodCard';
import { filterMenuItems } from '../data/menuData';
import './Menu.css';

function Menu() {
  const [category, setCategory] = useState('all');
  const [diet, setDiet] = useState('all');
  const [searchInput, setSearchInput] = useState('');
  const [activeSearch, setActiveSearch] = useState('');

  const items = useMemo(
    () => filterMenuItems({ category, diet, name: activeSearch }),
    [category, diet, activeSearch]
  );

  const handleSearch = () => {
    setActiveSearch(searchInput.trim());
  };

  return (
    <div className="menu-page">
      <Header />

      <FilterBar
        category={category}
        diet={diet}
        searchInput={searchInput}
        onCategoryChange={setCategory}
        onDietChange={setDiet}
        onSearchInputChange={setSearchInput}
        onSearch={handleSearch}
      />

      <p className="menu-count">{items.length} items found</p>

      {items.length === 0 ? (
        <div className="menu-empty-state">
          <p>No dishes found. Try different filters.</p>
        </div>
      ) : (
        <div className="menu-grid">
          {items.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;