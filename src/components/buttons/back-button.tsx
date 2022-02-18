import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Icon} from '../icon';
import {Container} from './styles';

export const BackButton: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container onPress={navigation.pop}>
      <Icon name="arrow-left" size="small" />
    </Container>
  );
};
