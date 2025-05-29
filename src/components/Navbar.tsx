import { useState } from 'react';
import { Box, Burger, Container, Group, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Navbar.module.css';
import { Link } from '@tanstack/react-router';
import logo from '@/img/logo.png';

const links = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
];

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(e) => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size='md' className={classes.inner}>
        <Box h={'100%'} w={'auto'}>
          <Image src={logo} alt='Mantine logo' />
        </Box>
        <Group gap={5} visibleFrom='xs'>
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom='xs' size='sm' />
      </Container>
    </header>
  );
}
