import React from 'react';
import {TextSize} from '../../typescript/type';
import {Component} from './styles';

type Props = {
  text: string;
  textSize?: TextSize;
};

export const Text: React.FC<Props> = ({text, textSize = TextSize.header}) => {
  return <Component textSize={textSize}>{text}</Component>;
};
