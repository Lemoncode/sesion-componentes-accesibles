import React from 'react';
import { cx } from '@emotion/css';
import {
  AppBar,
  Toolbar,
  IconButton,
  Icon,
  Menu as MuiMenu,
  MenuItem,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import logo from './lemoncode-logo.svg';
import * as classes from './component.styles';
import { useMenu } from './component.hooks';

export const Menu: React.FC = () => {
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
        <MuiMenu
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
        </MuiMenu>
      </Toolbar>
    </AppBar>
  );
};
