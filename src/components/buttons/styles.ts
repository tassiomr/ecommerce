import styled from 'styled-components/native';
import {Platform, StyleSheet} from 'react-native';
import {IStyledComponentsProps} from '../../typescript/interface';

export const Container = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${(props: IStyledComponentsProps) =>
    props.theme.colors.background};
  border-color: ${(props: IStyledComponentsProps) => props.theme.colors.edges};
  border-width: ${StyleSheet.hairlineWidth}
    ${Platform.select({
      android: {
        elevation: 5,
      },
    })};
`;
