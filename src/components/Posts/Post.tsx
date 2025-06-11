import { Link } from '@tanstack/react-router';
import { type IPost } from '@/types';
import { Card, Image, Text, Button, Group, ActionIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import { useState } from 'react';

type PostProps = {
  post: IPost;
};

export default function Post({ post }: PostProps) {
  // Initialize state for likes count
  const [likes, setLikes] = useState(0);

  // Function to handle like button click
  const toggleLike = (e: React.MouseEvent) => {
    setLikes(1 - likes);
  };

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
        <ActionIcon.Group>
          <ActionIcon.GroupSection
            variant='default'
            size='lg'
            bg='var(--mantine-color-body)'
            miw={60}
          >
            {likes}
          </ActionIcon.GroupSection>
          <ActionIcon
            variant='default'
            size='lg'
            radius='md'
            onClick={(e) => toggleLike(e)}
          >
            <IconHeart color='red' fill={likes ? 'red' : 'none'} />
          </ActionIcon>
        </ActionIcon.Group>
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
