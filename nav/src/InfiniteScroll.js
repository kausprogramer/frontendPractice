import React, { useState, useEffect, useRef, useCallback } from 'react';

const InfiniteScroll = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const loadMorePosts = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
      const data = await response.json();
      setPosts(prevPosts => [...prevPosts, ...data]);
      if (data.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching posts', error);
    }
  };

  useEffect(() => {
    loadMorePosts();
  }, [page]);

  const lastPostRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage(prevPage => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore]
  );

  return (
    <div>
      {posts.map((post, index) => (
        <div key={post.id} ref={index === posts.length - 1 ? lastPostRef : null} style={postCardStyle}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
      {hasMore && <p>Loading more posts...</p>}
      {!hasMore && <p>No more posts to load.</p>}
    </div>
  );
};

const postCardStyle = {
  border: '1px solid #ddd',
  padding: '10px',
  margin: '10px 0',
};

export default InfiniteScroll;
