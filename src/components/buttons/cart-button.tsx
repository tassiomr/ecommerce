import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Icon} from '../icon';
import {Container} from './styles';

export const CartButton: React.FC = () => {
  const navigation = useNavigation();

  function goToCart() {
    navigation.push('Cart');
  }

  return (
    <Container onPress={goToCart}>
      <Icon name="shopping" size="small" />
    </Container>
  );
};
