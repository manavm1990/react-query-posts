import { Box, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { usePosts } from 'hooks';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Posts({ show }) {
  const { data, error, status } = usePosts();

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
