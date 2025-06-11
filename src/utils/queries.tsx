import { useMutation, useQuery } from '@tanstack/react-query';
import { type IPost } from '@/types';
import { usePostContext } from '@/context/PostsContext';

// Get all posts
function useGetPosts() {
  const { setPosts } = usePostContext();
  return useQuery({
    queryKey: ['posts'],
    queryFn: async (): Promise<Array<IPost>> => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      let data = await response.json();
      data = data.slice(0, 5);
      setPosts(data);
      return data;
    },
  });
}

// Get single post
function useGetPost(id: number) {
  return useQuery({
    queryKey: ['post', id],
    queryFn: async (): Promise<IPost> => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      return await response.json();
    },
  });
}

// Create a new post
function useCreatePost() {
  return useMutation({
    mutationFn: async (newPost: IPost): Promise<IPost> => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newPost),
        }
      );
      return await response.json();
    },
  });
}

// Update an existing post
function useUpdatePost() {
  return useMutation({
    mutationFn: async (updatedPost: IPost): Promise<IPost> => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedPost),
        }
      );
      return await response.json();
    },
  });
}

// Delete a post
function useDeletePost() {
  return useMutation({
    mutationFn: async (id: number): Promise<void> => {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
      });
    },
  });
}

export { useGetPosts, useGetPost, useCreatePost, useUpdatePost, useDeletePost };
