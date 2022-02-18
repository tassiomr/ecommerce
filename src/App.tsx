import * as React from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components';
import sizes from './configs/sizes';
import Themes from './configs/theme';
import {Routes} from './routes';

const App = () => {
  const theme = useColorScheme();
  return (
    <ThemeProvider theme={{colors: Themes.dark, sizes}}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
