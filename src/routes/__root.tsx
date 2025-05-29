import { Container, MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Navbar } from '../components/Navbar';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

const theme = createTheme({
  /** Your theme override here */
});

export const Route = createRootRoute({
  component: () => (
    <>
      <MantineProvider theme={theme}>
        <PersistQueryClientProvider
          client={queryClient}
          persistOptions={{ persister }}
        >
          <Navbar />
          <Container>
            <Outlet />
          </Container>
          <ReactQueryDevtools initialIsOpen />
          <TanStackRouterDevtools />
        </PersistQueryClientProvider>
      </MantineProvider>
    </>
  ),
});
