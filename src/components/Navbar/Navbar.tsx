import { useState } from 'react';
import { Box, Burger, Container, Group, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Navbar.module.css';
import logo from '@/img/logo.png';
import MenuItem from './MenuItem';

const links = [
  { link: '/', label: 'Hjem' },
  { link: '/about', label: 'Om oss' },
];

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const menuItems = links.map((link) => (
    <MenuItem
      key={link.label}
      link={link}
      active={active}
      setActive={setActive}
    />
  ));

  return (
    <header className={classes.header}>
      <Container size='md' className={classes.inner}>
        <Box h={'100%'} w={'auto'}>
          <Image src={logo} alt='Mantine logo' />
        </Box>
        <Group gap={5} visibleFrom='xs'>
          {menuItems}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom='xs' size='sm' />
      </Container>
    </header>
  );
}
