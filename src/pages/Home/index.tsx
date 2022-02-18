import * as React from 'react';
import {Body, Text} from '../../components';
import {List} from '../../components/flatlist';

export const Home: React.FC = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Body isLoading={false} title="Home" showBackButton={false}>
      <List items={list} />
    </Body>
  );
};
