import * as React from 'react';
import {ActivityIndicator} from 'react-native';
import {Nav} from '../nav';
import {Component} from './styles';

type Props = {
  children: React.ReactElement;
  isLoading?: boolean;
  showBackButton?: boolean;
  title: string;
};

export const Body: React.FC<Props> = ({
  children,
  isLoading,
  showBackButton,
  title,
}) => {
  return (
    <>
      <Nav showBackButton={showBackButton} title={title} />
      <Component>
        {isLoading ? <ActivityIndicator size="large" /> : children}
      </Component>
    </>
  );
};
