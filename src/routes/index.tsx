import { Title } from '@mantine/core';
import { createFileRoute } from '@tanstack/react-router';
import { Posts } from '@/components/Posts';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <>
      <Title>Nyheter</Title>
      <Posts />
    </>
  );
}
