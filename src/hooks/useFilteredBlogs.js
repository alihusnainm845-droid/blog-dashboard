import { useMemo } from 'react';

export const useFilteredBlogs = (blogs, searchText, category) => {
  return useMemo(() => {
    return blogs.filter(blog => {
      const matchSearch =
        blog.title.toLowerCase().includes(searchText.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchText.toLowerCase());
      const matchCategory = category === 'All' || blog.category === category;
      return matchSearch && matchCategory;
    });
  }, [blogs, searchText, category]);
};