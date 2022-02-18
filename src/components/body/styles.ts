import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {IStyledComponentsProps} from '../../typescript/interface';

export const Component = styled.View`
  flex: 1;
  alignitems: center;
  background-color: ${(props: IStyledComponentsProps) =>
    props.theme.colors.background};
`;
