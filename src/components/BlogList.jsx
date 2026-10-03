import React from 'react';
import BlogCard from './BlogCard';

const BlogList = ({ blogs }) => {
  if (blogs.length === 0) {
    return <p className="no-blogs">No blogs found 😕</p>;
  }

  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default React.memo(BlogList);