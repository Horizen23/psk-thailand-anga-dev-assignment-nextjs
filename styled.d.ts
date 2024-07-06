import 'styled-components'

import { ThemeInterface } from './src/theme/default.ts';


declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface { }
}
