import { Title, Text } from '@mantine/core';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <>
      <Title>Om oss</Title>
      <Text>Mer informasjon kommer...</Text>
    </>
  );
}
