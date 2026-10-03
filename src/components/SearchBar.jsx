import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchText, setCategory } from '../redux/blogSlice';

const SearchBar = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const { searchText, selectedCategory } = useSelector(state => state.blogs);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="search-bar">
      <input
        ref={inputRef}
        type="text"
        placeholder="🔍 Search by title or author..."
        value={searchText}
        onChange={(e) => dispatch(setSearchText(e.target.value))}
      />
      <select
        value={selectedCategory}
        onChange={(e) => dispatch(setCategory(e.target.value))}
      >
        <option value="All">All Categories</option>
        <option value="React">React</option>
        <option value="Redux">Redux</option>
        <option value="Node">Node</option>
      </select>
    </div>
  );
};

export default React.memo(SearchBar);