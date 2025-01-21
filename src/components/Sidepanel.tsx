"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import { contraints } from "../../contraints";
import { AccountActions } from "../../account-action";

const Sidepanel = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="h-screen w-64 px-4 py-2 bg-white flex flex-col">
      {/* Logo and Title */}
      <div className="flex items-center gap-4">
        <img
          src="data:image/png;base64,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"
          className="h-10 w-10"
          alt="Logo"
        />
        <h1 className="text-xl font-bold mb-2 text-blue-500 ">
          VrynoWorkForce
        </h1>
      </div>
      <hr className="border-2 border-gray-300 w-full mb-4" />

      {/* Content Area */}
      <div className="flex-grow">
        {/* Constraints */}
        {contraints.map((item) => {
          const isActive = item.name === activeTab;
          return (
            <button
              key={item.id}
              className={`h-10 w-full flex gap-4 justify-start items-center px-4 ${
                isActive
                  ? "bg-gray-100 border-blue-500"
                  : "hover:bg-gray-100 border-transparent"
              } border-l-4 transition-all mb-2`}
              onClick={() => {
                setActiveTab(item.name);
                router.push(item.url);
              }}
            >
              {item.icon &&
                (isActive ? (
                  <item.icon className="text-blue-500" />
                ) : (
                  <item.icon />
                ))}
              {isActive ? (
                <span className="text-blue-500">{item.name}</span>
              ) : (
                <span>{item.name}</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Account Actions */}
      <div className="mt-auto">
        <hr className="border-2 border-gray-300 w-full mt-4" />
        {AccountActions.map((item) => {
          const isActive = item.name === activeTab;
          return (
            <button
              key={item.id}
              className={`h-10 w-full flex gap-4 justify-start items-center px-4 ${
                isActive
                  ? "bg-gray-100 border-blue-500"
                  : "hover:bg-gray-100 border-transparent"
              } border-l-4 transition-all mb-2`}
              onClick={() => {
                setActiveTab(item.name);
                router.push(item.url);
              }}
            >
              {item.icon &&
                (isActive ? (
                  <item.icon className="text-blue-500" />
                ) : (
                  <item.icon />
                ))}
              {item.image && (
                <div className="h-6 w-6">
                  <img
                    className="bg-gray-600 rounded-full"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
              )}
              <span>{item.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Sidepanel;
