import { usePosts } from '@/utils/queries';
import { Card, Image, Text, Badge, Button, Group, Loader } from '@mantine/core';

export function Posts() {
  const { status, data, error } = usePosts();

  if (status === 'pending') return <Loader />;

  if (status === 'error') return <div>Error: {error.message}</div>;

  return data?.map((post: any) => (
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

      <Button color='#ff850c' mt='md' radius='md' w={'100px'}>
        Les mer
      </Button>
    </Card>
  ));
}
