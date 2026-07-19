import './FilterBar.css';

const CATEGORIES = [
  { label: 'All', value: 'all' },
  { label: 'Starter', value: 'starter' },
  { label: 'Main', value: 'main' },
  { label: 'Sides', value: 'sides' },
  { label: 'Desert', value: 'desert' },
];

const DIETS = [
  { label: 'All', value: 'all' },
  { label: '🌿 Veg', value: 'veg' },
  { label: '🍖 Non-Veg', value: 'nonveg' },
];

function FilterBar({
  category,
  diet,
  searchInput,
  onCategoryChange,
  onDietChange,
  onSearchInputChange,
  onSearch,
}) {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <span className="filter-label">Category</span>
        <div className="chip-row">
          {CATEGORIES.map((item) => (
            <button
              key={item.value}
              type="button"
              className={`chip ${category === item.value ? 'chip-active' : ''}`}
              onClick={() => onCategoryChange(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <span className="filter-label">Diet</span>
        <div className="chip-row">
          {DIETS.map((item) => (
            <button
              key={item.value}
              type="button"
              className={`chip ${diet === item.value ? 'chip-active' : ''}`}
              onClick={() => onDietChange(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="search-row">
        <input
          type="text"
          value={searchInput}
          onChange={(event) => onSearchInputChange(event.target.value)}
          placeholder="Search by name (e.g. chicken)"
        />
        <button type="button" className="search-button" onClick={onSearch}>
          Search
        </button>
      </div>
    </div>
  );
}

export default FilterBar;