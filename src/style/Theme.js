import { createTheme } from '@mui/material';

export const Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#00E0FF'
    },
    secondary: {
      main: '#D4D7DD'
    },
    grey: {
      50: '#394B61'
    },
    background: {
      paper: '#1F2A3C',
      default: '#273244'
    },
    action: {
      hover: '#00E0FF'
    }
  },
  typography: {
    fontFamily: 'Open Sans',
    h1: {
      fontSize: '1rem',
      fontWeight: '600',
      fontFamily: 'Open Sans'
    },
    h2: {
      fontFamily: 'Open Sans',
      fontWeight: '700',
      fontSize: '30px',
      lineHeight: '41px'
    },
    button: {
      fontFamily: 'Open Sans',
      fontWeight: '700',
      textTransform: 'initial',
      fontSize: '16px'
    }
  }
});
