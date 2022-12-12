import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Header />
      <Hero />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp