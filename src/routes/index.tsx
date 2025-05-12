import { Container, Title } from '@mantine/core';
import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <Container>
      <Title>Home</Title>
      <Link to='/about'>About</Link>
    </Container>
  );
}
