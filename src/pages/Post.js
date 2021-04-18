import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { usePost } from 'hooks';
import { Link, useParams } from 'react-router-dom';

export default function Post() {
  const { id } = useParams();

  const { data, error, status } = usePost(id);

  switch (status) {
    case 'loading':
      return <div>⏳</div>;
    case 'error':
      return <Text>{error.message}</Text>;
    default:
      return (
        <Box pl="1rem">
          <Link to="/">
            <Button colorScheme="teal" size="xs" maxW="max-content">
              ⬅️ Back
            </Button>
          </Link>
          <Heading>{data.title}</Heading>
          <Text>{data.body}</Text>
        </Box>
      );
  }
}
