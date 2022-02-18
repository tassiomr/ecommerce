export type Theme = {
  background: string;
  accent: string;
  primary: string;
  edges: string;
};

export type Sizes = {
  icons: {
    large: number;
    medium: number;
    small: number;
  };
  font: {
    [TextSize.header]: string;
    [TextSize.paragraph]: string;
    [TextSize.subtitle]: string;
    [TextSize.deatil]: string;
  };
};

export enum TextSize {
  paragraph,
  header,
  subtitle,
  deatil,
}
