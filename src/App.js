import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Spacer,
  theme,
} from '@chakra-ui/react';
import { fetchPosts } from 'lib';
import { PostPage, PostsPage } from 'pages';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const qc = new QueryClient();

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    qc.prefetchQuery('posts', fetchPosts);
  });

  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <QueryClientProvider client={qc}>
          <Flex px="1rem" my="2rem">
            <Button
              onClick={() => {
                setIsVisible(prev => !prev);
              }}
              maxW="max-content"
            >
              Show Posts
            </Button>
            <Spacer />

            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>

          <Router>
            <Switch>
              <Route exact path="/">
                <PostsPage show={isVisible} />
              </Route>

              <Route path="/:id">
                <PostPage />
              </Route>
            </Switch>
          </Router>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </Box>
    </ChakraProvider>
  );
}
