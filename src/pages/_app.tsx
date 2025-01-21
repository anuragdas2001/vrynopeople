import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Sidepanel from "@/components/Sidepanel";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-screen">
      <Sidepanel />
      <main className="flex-1 p-4">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
