import * as React from 'react';
import {Text} from '..';
import {BackButton} from '../buttons';
import {Container, EmptyView} from './styles';

type Props = {
  title: string;
  showBackButton?: boolean;
};

export const Nav: React.FC<Props> = ({title, showBackButton = true}) => {
  return (
    <Container>
      {showBackButton ? <BackButton /> : <EmptyView />}
      <Text text={title} />
    </Container>
  );
};
