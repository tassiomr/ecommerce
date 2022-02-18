import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Icon} from '../icon';
import {Container} from './styles';

export const BackButton: React.FC = () => {
  const navigation = useNavigation();

  const pop = () => navigation.pop();
  
  return (
    <Container onPress={navigation}>
      <Icon name="arrow-left" size="small" />
    </Container>
  );
};
