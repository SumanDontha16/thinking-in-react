import React from "react";

const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) => {
  return (
    <form>
      <div className="mb-3">
        <h1 className="display-6"> Search </h1>
        <input
          className="form-control form-control-lg"
          type="text"
          value={filterText}
          placeholder="Search..."
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        <label class="form-check-label" for="flexCheckDefault">
          Only show products in stock
        </label>
      </div>
    </form>
  );
};

export default SearchBar;
