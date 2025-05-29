import { MantineProvider } from '@mantine/core';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

// Create a client
const queryClient = new QueryClient();

export const Route = createRootRoute({
  component: () => (
    <>
      <MantineProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
          <TanStackRouterDevtools />
        </QueryClientProvider>
      </MantineProvider>
    </>
  ),
});
