import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import { createFetchPost } from 'lib';
import PropTypes from 'prop-types';
import { useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';

export default function PostsList({ posts }) {
  const currentQC = useQueryClient();

  return (
    <Box px="1rem">
      <Heading>{posts.length} Posts</Heading>
      <UnorderedList>
        {posts.map(({ id, title }) => (
          <ListItem
            key={id}
            onMouseEnter={() => {
              currentQC.prefetchQuery(
                ['post', id.toString()],
                createFetchPost(id),
                { staleTime: Infinity }
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

PostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
