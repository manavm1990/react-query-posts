import { fetchPosts } from 'lib';
import { useQuery } from 'react-query';

export default function usePosts() {
  return useQuery('posts', fetchPosts, {
    refetchOnWindowFocus: false,
    staleTime: 50000,
  });
}
