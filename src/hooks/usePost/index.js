import { createFetchPost } from 'lib';
import { useQuery, useQueryClient } from 'react-query';

export default function usePost(id) {
  const currentQC = useQueryClient();

  return useQuery(['post', id], createFetchPost(id), {
    initialData: () =>
      currentQC?.getQueryData('posts').find(post => post.id === id),
    refetchOnWindowFocus: false,
    staleTime: 50000,
  });
}
