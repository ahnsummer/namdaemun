declare module '@mui/material/styles' {
  interface Palette {
    ochre: Palette['primary'];
  }
  interface PaletteOptions {
    ochre: PaletteOptions['palette'];
  }
  export function createTheme(options: ThemeOptions): Theme;
}
