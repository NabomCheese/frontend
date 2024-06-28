import 'styled-components';
import { Palette } from '@/theme/types/palette';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Palette;
  }
}
