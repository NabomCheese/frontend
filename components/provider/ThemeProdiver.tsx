import React from 'react';
import { ThemeProvider as CustomThemeProvider } from 'styled-components';
import { Dark, Light } from '@/theme';
import { useRecoilState } from 'recoil';
import { themeState } from '@/recoil/theme';
import ThemeTypes from '@/theme/types/theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [currentTheme, setCurrentTheme] = useRecoilState<ThemeTypes>(themeState);

  React.useEffect(() => {
    const handleThemeChange = (event: MediaQueryListEvent) => {
      const newTheme = event.matches ? ThemeTypes.dark : ThemeTypes.light;
      setCurrentTheme(newTheme);
    };

    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQueryList.addEventListener('change', handleThemeChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleThemeChange);
    };
  }, [setCurrentTheme]);

  return (
    <CustomThemeProvider theme={{ colors: currentTheme === ThemeTypes.dark ? Dark : Light }}>
      {props.children}
    </CustomThemeProvider>
  );
};

export default ThemeProvider;
