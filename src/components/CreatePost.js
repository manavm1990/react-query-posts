import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from '@chakra-ui/react';
import { PropTypes } from 'prop-types';

export default function CreatePost({ handler, buttonTxt }) {
  return (
    <Stack
      mt="0.75rem"
      spacing="1rem"
      p="1rem"
      borderTop="1px"
      borderColor="gray.200"
    >
      <Heading as="h2">Create New Post</Heading>
      <form>
        <FormControl
          id="title"
          isRequired
          display="flex"
          flexDir="column"
          style={{ gap: '1rem' }}
        >
          <FormLabel>Post Title:</FormLabel>
          <Input />
        </FormControl>

        <Button my="1rem">{buttonTxt}</Button>
      </form>
    </Stack>
  );
}

CreatePost.propTypes = {
  buttonTxt: PropTypes.string,
  handler: PropTypes.func.isRequired,
};

CreatePost.defaultProps = { buttonTxt: 'Create Post!' };
