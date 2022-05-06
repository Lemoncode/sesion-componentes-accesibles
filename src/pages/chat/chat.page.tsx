import React from 'react';
import { Page } from '../../common';
import { NonAccessibleChat, AccessibleChat } from './components';

export const ChatPage: React.FC = () => {
  return (
    <Page
      exampleTitle="chat"
      nonAccessibleComponent={<NonAccessibleChat />}
      accessibleComponent={<AccessibleChat />}
    />
  );
};
