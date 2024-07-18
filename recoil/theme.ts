import { atom } from 'recoil';
import ThemeTypes from '@/theme/types/theme';

const themeState = atom<ThemeTypes>({
  key: 'THEME_STATE',
  default: ThemeTypes.light,
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      const storedTheme = window.localStorage.getItem('theme') as ThemeTypes | null;
      if (storedTheme) {
        setSelf(storedTheme);
      }

      onSet((newTheme) => {
        window.localStorage.setItem('theme', `${newTheme}`);
      });
    },
  ],
});


export {
  themeState
};