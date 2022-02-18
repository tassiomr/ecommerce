import * as React from 'react';
import {Text} from '..';
import {BackButton, CartButton} from '../buttons';
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
      <CartButton />
    </Container>
  );
};
