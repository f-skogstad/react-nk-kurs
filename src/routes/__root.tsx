import { Container, MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Navbar } from '@/components/Navbar/Navbar';
import { PostProvider } from '@/context/PostsContext';

// Create a client
const queryClient = new QueryClient();

const theme = createTheme({
  /** Your theme override here */
});

export const Route = createRootRoute({
  component: () => (
    <>
      <PostProvider>
        <MantineProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <Navbar />
            <Container>
              <Outlet />
            </Container>
            <ReactQueryDevtools initialIsOpen />
            <TanStackRouterDevtools />
          </QueryClientProvider>
        </MantineProvider>
      </PostProvider>
    </>
  ),
});
