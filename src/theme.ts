import { PrimaryBlue } from './colors';

export enum ThemeNames {
  light = 'light',
  dark = 'dark',
}

export type Theme = {
  name: ThemeNames;
  backgroundColor: string;
  textColor: string;
  textColorSad: string;
  textColorCelebrate: string;
  headerColor: string;
  bannerColor: string;
};

type Themes = {
  [key in ThemeNames]: Theme;
};

export const lightTheme: Theme = {
  name: ThemeNames.light,
  backgroundColor: '#FFFFFF',
  textColor: PrimaryBlue,
  textColorSad: PrimaryBlue,
  textColorCelebrate: PrimaryBlue,
  headerColor: 'purple',
  bannerColor: 'purple',
};

export const darkTheme: Theme = {
  name: ThemeNames.dark,
  backgroundColor: PrimaryBlue,
  textColor: PrimaryBlue,
  textColorSad: PrimaryBlue,
  textColorCelebrate: PrimaryBlue,
  headerColor: PrimaryBlue,
  bannerColor: PrimaryBlue,
};

export const themes: Themes = {
  [ThemeNames.light]: lightTheme,
  [ThemeNames.dark]: darkTheme,
};
