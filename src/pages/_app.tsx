import '@/styles/globals.css';
import '@/styles/font.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/styles/theme';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
