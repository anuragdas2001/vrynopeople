"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { contraints } from "../../contraints";
import { AccountActions } from "../../account-action";

const SideBar = ({ isCollapsed }: { isCollapsed?: boolean }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>("/");
  const [collapsed, setCollapsed] = useState<boolean>(isCollapsed || false);

  // Sync the `isCollapsed` prop with the `collapsed` state
  useEffect(() => {
    setCollapsed(isCollapsed || false);
  }, [isCollapsed]);

  // Automatically toggle collapse based on screen size
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth <= 1024) {
  //       setCollapsed(true); // Collapse for small screens
  //     } else if (!isCollapsed) {
  //       setCollapsed(false); // Expand for larger screens only if `isCollapsed` is not explicitly set
  //     }
  //   };

  //   // Add event listener on resize
  //   window.addEventListener("resize", handleResize);
  //   handleResize(); // Trigger on initial load

  //   // Clean up event listener on component unmount
  //   return () => window.removeEventListener("resize", handleResize);
  // }, [isCollapsed]);

  // Set active tab based on the route
  useEffect(() => {
    const path = `/${router.pathname.split("/")[1]}`;
    setActiveTab(path || "/");
  }, [router.pathname]);

  const handleTabClick = (url: string) => {
    // if (url == "organisation" || url == "settings") {
    //   setActiveTab(url);
    //   router.push(`${url}/general`);
    // }
    setActiveTab(url);
    router.push(url);
  };

  const getButtonClasses = (isActive: boolean) => {
    return `h-10 w-full flex gap-4 justify-start items-center px-4 
      ${
        isActive
          ? "bg-gray-100 border-l-4 border-blue-500"
          : "hover:bg-gray-100 border-l-4 border-transparent"
      } 
      transition-all duration-300 mb-2`;
  };

  return (
    <div
      className={`h-screen ${
        collapsed ? "w-20 " : "w- "
      } px-2 py-2 bg-white flex flex-col transition-all duration-300`}
    >
      {/* Logo and Title */}
      <div className="flex justify-start items-center mb-4">
        <img
          src="data:image/png;base64,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"
          className={`h-10 w-10 bg-gray-200 rounded-full ${
            collapsed ? "ml-3" : ""
          }`}
        ></img>
        {!collapsed && (
          <h1 className="text-xl font-bold text-blue-500 -ml-3">
            rynoWorkForce
          </h1>
        )}
      </div>
      <hr className="border-2 border-gray-300 w-full mb-4" />

      {/* Content Area */}
      <div className="flex-grow">
        {contraints.map((item) => {
          const isActive = item.url === activeTab;
          return (
            <button
              key={item.id}
              className={getButtonClasses(isActive)}
              onClick={() => handleTabClick(item.url)}
            >
              <div className="flex items-center gap-4">
                {item.icon && (
                  <span className={isActive ? "text-blue-500" : ""}>
                    <item.icon />
                  </span>
                )}
                {!collapsed && (
                  <span
                    className={`transition-colors duration-300 ${
                      isActive ? "text-blue-500" : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Account Actions */}
      <div className="mt-auto">
        <hr className="border-2 border-gray-300 w-full mb-4" />
        {AccountActions.map((item) => {
          const isActive = item.url === activeTab;
          return (
            <button
              key={item.id}
              className={getButtonClasses(isActive)}
              onClick={() => handleTabClick(item.url)}
            >
              <div className="flex items-center gap-4">
                {item.icon && (
                  <span
                    className={isActive ? "text-blue-500" : "text-gray-500"}
                  >
                    <item.icon />
                  </span>
                )}
                {item.image && (
                  <div className="h-6 w-6">
                    <img
                      className="bg-gray-600 rounded-full"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                )}
                {!collapsed && (
                  <span
                    className={`transition-colors duration-300 ${
                      isActive ? "text-blue-500" : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
