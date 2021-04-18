import { Text } from '@chakra-ui/react';
import { CreatePost, PostsList } from 'components';
import { usePosts } from 'hooks';

export default function Posts() {
  const { data, error, status } = usePosts();

  switch (status) {
    case 'loading':
      return <div>⏳</div>;
    case 'error':
      return <Text>{error.message}</Text>;
    default:
      return (
        <>
          <PostsList posts={data} />
          <CreatePost
            handler={() => {
              console.log('submit');
            }}
          />
        </>
      );
  }
}
