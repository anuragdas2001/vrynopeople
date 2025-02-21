import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SideBar from "@/components/SideBar";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const noSidebarRoutes = ["/signin"];

  const showSidebar = !noSidebarRoutes.some((route) =>
    router.pathname.startsWith(route)
  );

  const isCollapsed =
    // router.pathname.startsWith("/") ||
    router.pathname.startsWith("/attendance") ||
    router.pathname.startsWith("/onboarding") ||
    router.pathname.startsWith("/organisation") ||
    router.pathname.startsWith("/settings");

  return (
    <div className="flex h-auto ">
      {showSidebar && <SideBar isCollapsed={isCollapsed} />}
      <main className={`flex-1  ${showSidebar ? "" : ""}`}>
        {/* Page-specific layout support */}
        <Component {...pageProps} />
      </main>
    </div>
  );
}
