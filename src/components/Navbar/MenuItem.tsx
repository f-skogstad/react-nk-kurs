import classes from './Navbar.module.css';
import { Link } from '@tanstack/react-router';

type MenuItemProps = {
  link: {
    link: string;
    label: string;
  };
  active: string;
  setActive: (link: string) => void;
};

export default function MenuItem({ link, active, setActive }: MenuItemProps) {
  return (
    <Link
      key={link.label}
      to={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  );
}
