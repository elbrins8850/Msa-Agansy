import { LangProvider } from '../src/context/LangContext';
import '../src/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <LangProvider>
      <Component {...pageProps} />
    </LangProvider>
  );
}
