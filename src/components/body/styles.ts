import styled from 'styled-components/native';
import {IStyledComponentsProps} from '../../typescript/interface';

export const Component = styled.View`
  flex: 1;
  width: 100%;
  alignitems: center;
  paddingleft: 8px;
  paddingright: 8px;
  backgroundcolor: ${(props: IStyledComponentsProps) => props.theme.colors.background}
`;
