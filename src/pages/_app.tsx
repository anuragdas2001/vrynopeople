import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SideBar from "@/components/SideBar";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Check if the second part of the path matches 'attendance'
  const isCollapsed = router.pathname.startsWith("/attendance");

  return (
    <div className="flex h-auto ">
      <SideBar isCollapsed={isCollapsed} />
      <main className="flex-1 p-4">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
