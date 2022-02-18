import * as React from 'react';
import {Body, Text} from '../../components';

export const Details: React.FC = () => {
  return (
    <Body isLoading={false}>
      <Text text={'Hello World'} />
    </Body>
  );
};
