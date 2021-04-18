import { Button, Heading, Text } from '@chakra-ui/react';
import { useQuery, useQueryClient } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { api } from 'services';

export default function Post() {
  const { id } = useParams();

  const currentQC = useQueryClient();

  const { data, error, status } = useQuery(['post', id], () => api.show(id), {
    initialData: () =>
      currentQC?.getQueryData('posts').find(post => post.id === id),
    refetchOnWindowFocus: false,
    staleTime: 50000,
  });

  switch (status) {
    case 'loading':
      return <div>⏳</div>;
    case 'error':
      return <Text>{error.message}</Text>;
    default:
      return (
        <>
          <Link to="/">
            <Button colorScheme="teal" size="xs" maxW="max-content">
              ⬅️ Back
            </Button>
          </Link>
          <Heading>{data.title}</Heading>
          <Text>{data.body}</Text>
        </>
      );
  }
}
