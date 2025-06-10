import { useEffect } from 'react';
import { usePosts } from '@/utils/queries';
import { Loader, Alert } from '@mantine/core';
import { usePostContext } from '@/context/PostsContext';
import Post from './Post';

export function Posts() {
  const { posts, setPosts } = usePostContext();
  const { status, data, error, isLoading, isError } = usePosts();

  useEffect(() => {
    if (status === 'success') {
      setPosts(data);
    }
  }, [status, data]);

  // Render the list of posts
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Alert>Error: {error.message}</Alert>;
  }

  return posts?.map((post) => {
    return <Post key={post.id} post={post} />;
  });
}
