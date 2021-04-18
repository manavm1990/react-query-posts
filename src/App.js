import {
  Box,
  Button,
  ChakraProvider,
  extendTheme,
  Spacer,
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

  const config = { initialColorMode: 'dark' };

  const theme = {
    styles: {
      global: {
        button: {
          maxWidth: 'max-content',
        },
      },
      ...config,
    },
  };

  const customTheme = extendTheme(theme);

  return (
    <ChakraProvider theme={customTheme}>
      <Box fontSize="xl">
        <QueryClientProvider client={qc}>
          <Box px="1rem" my="2rem">
            <ColorModeSwitcher position="absolute" right="1rem" />
          </Box>

          <Router>
            <Switch>
              <Route exact path="/">
                {' '}
                <Button
                  onClick={() => {
                    setIsVisible(prev => !prev);
                  }}
                  maxW="max-content"
                  ml="1rem"
                  mb="1rem"
                >
                  Show Posts
                </Button>
                <Spacer />
                {isVisible ? <PostsPage /> : null}
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
