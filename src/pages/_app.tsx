import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SideBar from "@/components/SideBar";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const noSidebarRoutes = ["/signin", "/signup"]; // Add all routes without sidebar here

  // Check if the current route matches a no-sidebar route
  const showSidebar = !noSidebarRoutes.some((route) =>
    router.pathname.startsWith(route)
  );
  // Check if the second part of the path matches 'attendance'
  const isCollapsed =
    router.pathname.startsWith("/attendance") ||
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
