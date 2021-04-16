import { Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { api } from 'services';

export default function Posts() {
  const { data, error, status } = useQuery('posts', () => api.index(), {
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
          <Heading>{data.length} Posts</Heading>
          <UnorderedList>
            {data.map(({ id, title }) => (
              <ListItem key={id}>
                <Link to={`/${id}`}>{title}</Link>
              </ListItem>
            ))}
          </UnorderedList>
        </>
      );
  }
}
