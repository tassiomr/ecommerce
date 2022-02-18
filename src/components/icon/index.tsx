import * as React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContext} from 'styled-components';
import {Theme} from '../../typescript/type';

type Props = {
  name: string;
  color?: string;
  size: 'large' | 'medium' | 'small';
};

export const Icon: React.FC<Props> = ({name, color, size}) => {
  const theme = React.useContext(ThemeContext);

  return (
    <MaterialIcons
      name={name}
      color={color || theme.colors.accent}
      size={theme.sizes.icons[size]}
    />
  );
};
