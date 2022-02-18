import * as React from 'react';
import {Body, Text} from '../../components';

export const Home: React.FC = () => {
  return (
    <Body isLoading={false} title='Home' showBackButton={false}>
      <Text text={'Hello World'} />
    </Body>
  );
};
