import React from 'react';

const BlogStats = ({ blogs }) => {
  const totalBlogs = blogs.length;
  const featuredCount = blogs.filter(b => b.featured).length;
  const totalReadingTime = blogs.reduce((sum, b) => sum + b.readingTime, 0);

  return (
    <div className="blog-stats">
      <div className="stat-card">
        <h4>📚 Total Blogs</h4>
        <p>{totalBlogs}</p>
      </div>
      <div className="stat-card">
        <h4>⭐ Featured</h4>
        <p>{featuredCount}</p>
      </div>
      <div className="stat-card">
        <h4>⏱️ Total Reading Time</h4>
        <p>{totalReadingTime} min</p>
      </div>
    </div>
  );
};

export default React.memo(BlogStats);