import React from 'react';
import { cx } from '@emotion/css';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Link } from '@mui/material';
import { routes } from '../router';
import * as commonClasses from './common.styles';
import * as classes from './navbar.styles';

export const Navbar: React.FC = (props) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isActive = (route: string) => pathname === route;

  return (
    <AppBar color="default" position="static">
      <Toolbar
        role="navigation"
        aria-labelledby="hExamplesNavBar"
        className={classes.toolbar}
      >
        <h2 id="hExamplesNavBar" className={commonClasses.screenReaderOnly}>
          ejemplos
        </h2>
        <ul className={classes.list}>
          <li>
            <Link
              aria-current={isActive(routes.checkbox) ? 'page' : undefined}
              className={cx(classes.link, {
                active: isActive(routes.checkbox),
              })}
              onClick={() => navigate(routes.checkbox)}
            >
              <span>Checkbox</span>
            </Link>
          </li>
          <li>
            <Link
              aria-current={isActive(routes.accordion) ? 'page' : undefined}
              className={cx(classes.link, {
                active: isActive(routes.accordion),
              })}
              onClick={() => navigate(routes.accordion)}
            >
              <span>Accordion</span>
            </Link>
          </li>
          <li>
            <Link
              aria-current={isActive(routes.tooltip) ? 'page' : undefined}
              className={cx(classes.link, {
                active: isActive(routes.tooltip),
              })}
              onClick={() => navigate(routes.tooltip)}
            >
              <span>Tooltip</span>
            </Link>
          </li>
          <li>
            <Link
              aria-current={isActive(routes.menu) ? 'page' : undefined}
              className={cx(classes.link, { active: isActive(routes.menu) })}
              onClick={() => navigate(routes.menu)}
            >
              <span>Menu</span>
            </Link>
          </li>
          <li>
            <Link
              aria-current={isActive(routes.chat) ? 'page' : undefined}
              className={cx(classes.link, { active: isActive(routes.chat) })}
              onClick={() => navigate(routes.chat)}
            >
              <span>Chat</span>
            </Link>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};
