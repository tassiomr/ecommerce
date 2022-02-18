import styled from 'styled-components/native';
import {IStyledComponentsProps} from '../../typescript/interface';
import {TextSize} from '../../typescript/type';

export const Component = styled.Text<
  IStyledComponentsProps & {textSize: TextSize}
>`
  color: ${({theme}) => theme.colors.accent};
  font-size: ${({theme, textSize}) => theme.sizes.font[textSize]};
  font-weight: 700;
`;
