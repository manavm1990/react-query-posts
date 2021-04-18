import { Box, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { api } from 'services';

export default function Posts({ show }) {
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
        <Box px="1rem">
          <Heading>{data.length} Posts</Heading>
          {show ? (
            <UnorderedList>
              {data.map(({ id, title }) => (
                <ListItem key={id}>
                  <Link to={`/${id}`}>{title}</Link>
                </ListItem>
              ))}
            </UnorderedList>
          ) : null}
        </Box>
      );
  }
}

Posts.propTypes = { show: PropTypes.bool };

Posts.defaultProps = { show: false };
