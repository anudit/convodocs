import { Inter } from '@next/font/google'
import "../styles.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} className={inter.className} />;
}
