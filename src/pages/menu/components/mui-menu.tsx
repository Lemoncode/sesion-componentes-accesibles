import React from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import logo from '../../../assets/lemoncode-logo.svg';
import { useMenu } from './mui-menu.hooks';
import * as classes from './mui-menu.styles';

export const MuiMenu: React.FC = () => {
  const { menuElement, isOpen, onOpen, onClose } = useMenu();
  return (
    <AppBar color="default" className={classes.root} position="static">
      <Toolbar className={classes.toolbar}>
        <IconButton aria-label="Lemoncode">
          <img className={classes.logo} src={logo} />
        </IconButton>
        <IconButton
          aria-label="User settings"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={onOpen}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={menuElement}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={isOpen}
          onClose={onClose}
        >
          <MenuItem>User profile</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
