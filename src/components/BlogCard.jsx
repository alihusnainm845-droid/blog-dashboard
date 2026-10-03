import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { deleteBlog, toggleFeatured } from '../redux/blogSlice';

const BlogCard = ({ blog }) => {
  const dispatch = useDispatch();

  const handleDelete = useCallback(() => {
    dispatch(deleteBlog(blog.id));
  }, [dispatch, blog.id]);

  const handleToggleFeatured = useCallback(() => {
    dispatch(toggleFeatured(blog.id));
  }, [dispatch, blog.id]);

  return (
    <div className={`blog-card ${blog.featured ? 'featured' : ''}`}>
      {blog.featured && <span className="featured-badge">⭐ Featured</span>}
      <h3>{blog.title}</h3>
      <div className="blog-meta">
        <span className="category">{blog.category}</span>
        <span>👤 {blog.author}</span>
        <span>⏱️ {blog.readingTime} min</span>
      </div>
      <div className="blog-actions">
        <button onClick={handleToggleFeatured} className="btn-favorite">
          {blog.featured ? '⭐ Unfavorite' : '☆ Favorite'}
        </button>
        <button onClick={handleDelete} className="btn-delete">
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default React.memo(BlogCard);