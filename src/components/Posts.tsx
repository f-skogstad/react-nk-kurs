import { usePosts } from '@/utils/queries';
import { Link } from '@tanstack/react-router';
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Loader,
  Alert,
} from '@mantine/core';
import { usePostContext } from '@/context/PostsContext';

export function Posts() {
  const { posts, setPosts } = usePostContext();

  // Fetch posts from API if they haven't been fetched yet
  if (!posts || posts.length === 0) {
    const { status, data, error, isLoading, isError } = usePosts();

    if (isLoading) {
      return <Loader />;
    }

    if (isError) {
      return <Alert>Error: {error.message}</Alert>;
    }

    if (status === 'success') {
      setPosts(data);
      console.log('Posts fetched from API:', data);
    }
  }

  // Render the first 5 posts
  return posts?.slice(0, 5).map((post: any) => (
    <Card key={post.id} mt='xl' shadow='sm' padding='lg' radius='md' withBorder>
      <Card.Section>
        <Image
          src='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png'
          height={160}
          alt='Placeholder'
        />
      </Card.Section>

      <Group justify='space-between' mt='md' mb='xs'>
        <Text fw={500}>"{post.title}"</Text>
        <Badge color='pink'>Nyhet</Badge>
      </Group>

      <Text size='sm' c='dimmed'>
        {post.body}
      </Text>

      <Button
        component={Link}
        to={`/post/${post.id}`}
        color='#ff850c'
        mt='md'
        radius='md'
        w='100px'
      >
        Les mer
      </Button>
    </Card>
  ));
}
