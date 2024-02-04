import { createTheme } from '@mui/material/styles';

declare module '@mui/material' {
  interface ButtonPropsColorOverrides {
    ochre: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#005BA6',
      dark: '#013c6d',
    },
    ochre: {
      main: '#E3D026',
      light: '#E9DB5D',
      dark: '#A29415',
      contrastText: '#242105',
    },
  },
});
