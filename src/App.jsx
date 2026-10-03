import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogs } from './redux/blogSlice';
import { useFilteredBlogs } from './hooks/useFilteredBlogs';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import BlogList from './components/BlogList';
import BlogStats from './components/BlogStats';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { blogs, searchText, selectedCategory, loading, error } = useSelector(
    state => state.blogs
  );

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const filteredBlogs = useFilteredBlogs(blogs, searchText, selectedCategory);

  return (
    <div className="app">
      <Header />
      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading blogs...</p>
        </div>
      )}
      {error && <div className="error">❌ Error: {error}</div>}
      {!loading && !error && (
        <>
          <SearchBar />
          <BlogStats blogs={filteredBlogs} />
          <BlogList blogs={filteredBlogs} />
        </>
      )}
    </div>
  );
}

export default App;