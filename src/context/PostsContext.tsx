import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from 'react';
import { type IPost } from '@/types';

type PostContextProps = {
  posts: IPost[];
  setPosts: (posts: IPost[]) => void;
  addNewPost: (post: IPost) => void;
  removePost: (postId: IPost['id']) => void;
};

const PostContext = createContext<PostContextProps>({
  posts: [] as IPost[],
  setPosts: () => {},
  addNewPost: () => {},
  removePost: () => {},
});

export const PostProvider = ({ children }: PropsWithChildren) => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const addNewPost = (post: IPost) => {
    setPosts([...posts, post]);
  };

  const removePost = (postId: IPost['id']) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
    <PostContext.Provider value={{ posts, setPosts, addNewPost, removePost }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => useContext(PostContext);
