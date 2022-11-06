import { MenuComponent } from '@layout';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ReactElement, useState } from 'react';

interface IMainLayout {
  children: ReactElement;
}

const useStyles = makeStyles({
  appBar: {
    background: '#1E1E1E !important'
  },
  '&body': {
    background: 'red'
  }
});

export default function MainLayout({ children }: IMainLayout): ReactElement {
  const [menuOpen, setMenuOpen] = useState(false);

  const classes = useStyles();

  const toggleMenu = (): void => setMenuOpen(!menuOpen);

  return (
    <Container style={{ paddingTop: 56 }}>
      <MenuComponent onClose={toggleMenu} open={menuOpen} />
      <AppBar className={`${classes.appBar}`}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleMenu}
            id="drawer_button"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Title
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
    </Container>
  );
}
