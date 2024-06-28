import React from 'react';
import { ThemeProvider as CustomThemeProvider } from 'styled-components';
import { Dark, Light } from '@/theme';
import { useRecoilState } from 'recoil';
import { themeState } from '@/recoil/theme';
import Theme from '@/theme/types/theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [currentTheme, setCurrentTheme] = useRecoilState(themeState);

  React.useEffect(() => {
    const getCurrentTheme = () =>
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        ? Theme.dark
        : Theme.light;

    setCurrentTheme(getCurrentTheme());

    const handleThemeChange = (event: MediaQueryListEvent) => {
      setCurrentTheme(event.matches ? Theme.dark : Theme.light);
    };

    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQueryList.addEventListener('change', handleThemeChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleThemeChange);
    };
  }, [setCurrentTheme]);

  return (
    <CustomThemeProvider theme={{ colors: currentTheme === Theme.dark ? Dark : Light }}>
      {props.children}
    </CustomThemeProvider>
  );
};

export default ThemeProvider;
