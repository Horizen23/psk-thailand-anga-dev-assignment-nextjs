import { css } from 'styled-components'


export const MEDIA_WIDTHS = {
  mobile: 767,
  tablet: 1199,
  min: {
    mobile: 0,
    tablet: 768,
    desktop: 1200,
  },
  max: {
    mobile: 767,
    tablet: 1199,
    desktop: 9999,
  }
} as const

export enum Z_INDEX {
  deprecated_zero = 0,
  deprecated_content = 1,
  dropdown = 1000,
  sticky = 1020,
  fixed = 1030,
  modalBackdrop = 1040,
  offcanvas = 1050,
  modal = 1060,
  popover = 1070,
  tooltip = 1080,
  snackbar = 1100,
  dialogBackdrop = 1110,
  dialog = 1120,
}

export enum Height {
  Navbar = 82,
}

export const mediaWidthTemplates: { [width in keyof typeof MEDIA_WIDTHS]: typeof css } = Object.keys(MEDIA_WIDTHS).reduce(
  (accumulator, size) => {
    ; (accumulator as any)[size] = (a: any, b: any, c: any) => css`
      @media (max-width: ${(MEDIA_WIDTHS as any)[size]}px) {
        ${css(a, b, c)}
      }
    `
    return accumulator
  },
  {}
) as any

export const handlesStyle = {
  mediaWidth: mediaWidthTemplates,
  flexColumnNoWrap: css`
   display: flex;
   flex-flow: column nowrap;
 `,
  flexRowNoWrap: css`
   display: flex;
   flex-flow: row nowrap;
 `,
}

export interface ColorsTypeProps {
  typography: {
      textPrimary: string;
      textBody: string;
      textWhite: string;
      textBlue: string;
      textOrange: string;
      textLink: string;
      textComplete: string;
      textPending: string;
      textDisable: string;
      textError: string;
  };
  icon: {
      main: string;
      blue: string;
      orange: string;
      green: string;
      yellow: string;
      grey: string;
      darkGrey: string;
      dark: string;
      error: string;
  };
  disable: {
      main: string;
      second: string;
  };
  buttons: {
      primary: string;
      secondary: string;
  };
  line: {
      primary: string;
      secondary: string;
  };
  bg: {
      primary: string;
      secondary: string;
      thirdly: string;
  };
  main: {
      main1: string;
      main2: string;
      main3: string;
  };
 
}

export interface BaseThemeInterfaceColors {
  colors: ColorsTypeProps;
}

export interface ThemeInterface extends Omit<BaseThemeInterfaceColors, 'colors'> {
  z_index: typeof Z_INDEX;
  size: {
    height : typeof Height
  };
  media_width: typeof MEDIA_WIDTHS;
  colors: ColorsTypeProps;
  style: typeof handlesStyle; // Including handlesStyle as a property
}

const theme: ThemeInterface = {
  colors: {} as any,
  z_index: Z_INDEX,
  media_width: MEDIA_WIDTHS,
  size: {
    height : Height,
  },
  style:handlesStyle,
}


export { theme }
