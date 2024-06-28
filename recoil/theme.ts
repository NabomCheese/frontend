import Flag from '@/theme/types/theme';
import { atom } from 'recoil';

export const themeState = atom<Flag>({
  key: 'THEME_STATE',
  default: Flag.light,
});
