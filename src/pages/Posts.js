import { Box, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { usePosts } from 'hooks';
import { createFetchPost } from 'lib';
import { useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';

export default function Posts() {
  const { data, error, status } = usePosts();

  const currentQC = useQueryClient();

  switch (status) {
    case 'loading':
      return <div>⏳</div>;
    case 'error':
      return <Text>{error.message}</Text>;
    default:
      return (
        <Box px="1rem">
          <Heading>{data.length} Posts</Heading>
          <UnorderedList>
            {data.map(({ id, title }) => (
              <ListItem
                key={id}
                onMouseEnter={() => {
                  currentQC.prefetchQuery(
                    ['post', id.toString()],
                    createFetchPost(id)
                  );
                }}
              >
                <Link to={`/${id}`}>{title}</Link>
              </ListItem>
            ))}
          </UnorderedList>
          )
        </Box>
      );
  }
}

/**
 *
 */
