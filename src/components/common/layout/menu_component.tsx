import { IMenuOption, MenuOptions } from '@constants';
import { Close } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

interface IMenuComponent {
  open: boolean;
  onClose: () => void;
}

const useStyles = makeStyles({
  appBar: {
    background: '#1E1E1E !important'
  }
});

export default function MenuComponent({
  open,
  onClose
}: IMenuComponent): ReactElement {
  const navigate = useNavigate();
  const classes = useStyles();

  const goTo = (item: IMenuOption): void => {
    onClose();
    navigate(item.path, {});
  };

  return (
    <Drawer
      PaperProps={{
        style: { width: '100%', background: '#1E1E1E' }
      }}
      onClose={onClose}
      anchor={'left'}
      open={open}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={onClose}
          >
            <Close />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box style={{ width: '100%', paddingTop: 56 }}>
        <nav aria-label="secondary mailbox folders">
          <List>
            {MenuOptions?.map((item) => (
              <ListItem key={item.title} disablePadding>
                <ListItemButton onClick={() => goTo(item)}>
                  <ListItemText>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ flexGrow: 1, color: 'white' }}
                      id={item.title}
                    >
                      {item.title}
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
      </Box>
    </Drawer>
  );
}
