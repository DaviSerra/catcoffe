import type { AppProps } from "next/app";
import { Quicksand } from "next/font/google";
import "@/styles/globals.css";

const quicksand = Quicksand({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={quicksand.className}>
      <Component {...pageProps} />
    </main>
  );
}
