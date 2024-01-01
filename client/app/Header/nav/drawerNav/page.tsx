"use client"
import { useState, Fragment, FC } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Link from "next/link";

const DrawerNav: FC = () => {
    const [state, setState] = useState<{ [key: string]: boolean }>({
        left: false,
      });

      const toggleDrawer = (anchor: string, open: boolean) => (event: any) => {
        if (
          event.type === "keydown" &&
          (event.key === "Tab" || event.key === "Shift")
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
            {["Home", "Shop", "Men", "Women", "Kids", "Babies"].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText>
                    {/* Use Next.js Link component for client-side navigation */}
                    <Link href={`/category/${text.toLowerCase()}`}>{text}</Link>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <List>
            <ListItem disablePadding>{/* Uncomment or add your Control component */}</ListItem>
          </List>
          <List>
            <ListItem>
              <div className="search__drawer">{/* Uncomment or add your Form component */}</div>
            </ListItem>
          </List>
          <Divider />
        </Box>
      );
  return (
    <Fragment>
      {["left"].map((anchor) => (
        <Fragment>
          {state.left ? (
            <MenuOpenIcon fontSize="large" />
          ) : (
            <MenuIcon fontSize="large" onClick={toggleDrawer(anchor, true)} />
          )}
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default DrawerNav;
