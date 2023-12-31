// DrawerNav.tsx
import { useState, Fragment } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Control from '../Controls/Controls'; // Update import path
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Form from '../SearchBar/SearchBar';
import Link from 'next/link'; // Update import path

interface DrawerNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const DrawerNav: React.FC<DrawerNavProps> = () => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor: string, open: boolean) => (event: any) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: string) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Shop', 'Men', 'Women', 'Kids', 'Babies'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText>
                <Link href="/category/men">{text}</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <ListItem disablePadding>
          <Control />
        </ListItem>
      </List>
      <List>
        <ListItem>
          <div className="search__drawer">
          </div>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <Fragment>
      {['left'].map((anchor) => (
        <Fragment key={anchor}>
          {state.left ? (
            <MenuOpenIcon fontSize="large" />
          ) : (
            <MenuIcon
              fontSize="large"
              onClick={toggleDrawer(anchor, true)}
            />
          )}
          {/* <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer> */}
        </Fragment>
      ))}
    </Fragment>
  );
};

export default DrawerNav;
