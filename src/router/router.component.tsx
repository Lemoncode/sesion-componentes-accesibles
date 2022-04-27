import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CheckboxPage } from '../pages/checkbox';
import { AccordionPage } from '../pages/accordion';
import { TooltipPage } from '../pages/tooltip';
import { MenuPage } from '../pages/menu';
import { ChatPage } from '../pages/chat';
import { routes } from './router.constants';

export const AppRouter: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={routes.root}
          element={<Navigate replace to={routes.checkbox} />}
        />
        <Route path={routes.checkbox} element={<CheckboxPage />} />
        <Route path={routes.accordion} element={<AccordionPage />} />
        <Route path={routes.tooltip} element={<TooltipPage />} />
        <Route path={routes.menu} element={<MenuPage />} />
        <Route path={routes.chat} element={<ChatPage />} />
      </Routes>
    </HashRouter>
  );
};
