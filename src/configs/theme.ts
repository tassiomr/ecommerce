import {Theme} from '../typescript/type';

const palette = {
  white: '#fff',
  black: '#000',
  lemon_green: '#55f244',
  light_grey: '#e3d3d3',
  brown: '#192907',
}

const light: Theme = {
  background: palette.white,
  accent: palette.black,
  primary: palette.lemon_green,
  edges: palette.light_grey
};

const dark: Theme = {
  background: palette.black,
  accent: palette.white,
  primary: palette.lemon_green,
  edges: palette.brown
};

const colors = {
  light,
  dark,
};

export default colors;
