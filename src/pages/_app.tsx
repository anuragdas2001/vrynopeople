import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Sidepanel from "@/components/Sidepanel";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentTab = router.pathname;

  console.log("currentTab", currentTab);

  // Check if the second part of the path matches 'attendance'
  const isCollapsed = router.pathname.startsWith("/attendance");
  console.log("isCollapsed", isCollapsed);
  return (
    <div className="flex h-screen">
      <Sidepanel isCollapsed={isCollapsed} />
      <main className="flex-1 p-4">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
