import { Link } from '@tanstack/react-router';
import { type IPost } from '@/types';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

type PostProps = {
  post: IPost;
};

export default function Post({ post }: PostProps) {
  return (
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
        <Badge color='#071013'>Nyhet</Badge>
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
  );
}
