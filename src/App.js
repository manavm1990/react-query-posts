import { Box, ChakraProvider, Grid, theme } from '@chakra-ui/react';
import { PostsPage } from 'pages';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import './index.css';

const qc = new QueryClient();

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <QueryClientProvider client={qc}>
            <Router>
              <Switch>
                <Route exact path="/">
                  <PostsPage />
                </Route>

                {/* <Route path="/:id">
                  <PostPage />
                </Route> */}
              </Switch>
            </Router>
            <ReactQueryDevtools />
          </QueryClientProvider>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
