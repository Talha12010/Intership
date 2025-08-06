export default function category({ categories, current, onSelect }) {
    return (
      <div className="filter-buttons">
        {categories.map(cat => (
          <button
            key={cat}
            className={cat === current ? "active" : ""}
            onClick={() => onSelect(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    );
  }
  