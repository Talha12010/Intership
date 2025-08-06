export default function searchbar({ onSearch }) {
    return (
      <input
        type="text"
        placeholder="Search posts..."
        onChange={e => onSearch(e.target.value)}
        style={{ margin: "20px auto", display: "block" }}
      />
    );
  }
  