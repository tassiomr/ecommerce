import styled from 'styled-components/native';
import {Platform, StyleSheet} from 'react-native';
import {IStyledComponentsProps} from '../../typescript/interface';

export const Container = styled.View`
  width: 100%;
  height: 55px;
  flex-direction: row;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props: IStyledComponentsProps) =>
    props.theme.colors.background};
`;

export const EmptyView = styled.View`
  width: 25px;
  height: 25px;
`;
