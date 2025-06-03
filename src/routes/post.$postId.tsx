import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/post/$postId')({
  component: Post,
});

function Post() {
  const { postId } = Route.useParams();
  return <div>Post ID: {postId}</div>;
}
