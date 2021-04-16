import { Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { api } from 'services';

export default function Posts() {
  const { data, error, status, isFetching } = useQuery('posts', () =>
    api.index()
  );

  switch (status) {
    case 'loading':
      return <div>⏳</div>;
    case 'error':
      return <Text>{error.message}</Text>;
    default:
      return (
        <>
          <Heading>
            {isFetching ? 'Updating' : `${data.length} Latest`} Posts
          </Heading>
          <UnorderedList>
            {data.map(({ id, title }) => (
              <ListItem key={id}>{title}</ListItem>
            ))}
          </UnorderedList>
        </>
      );
  }
}
