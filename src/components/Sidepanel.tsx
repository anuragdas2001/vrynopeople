import React from "react";
import { ChevronRight, LucideIcon } from "lucide-react";

export interface TabItem {
  id: string;
  label: string;
  icon: LucideIcon;
  url: string;
}

interface SidePanelProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  Data: TabItem[];
  Heading: string;
  Caption: string;
}

const SidePanel: React.FC<SidePanelProps> = ({
  activeTab,
  onTabChange,
  Data,
  Heading,
  Caption,
}) => {
  console.log("Data", Data);
  return (
    <div className="w-64 flex-shrink-0 border-x rounded-2xl">
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-gray-900">{Heading}</h1>
        <p className="text-sm text-gray-500 mt-1">{Caption}</p>
      </div>
      <nav className="space-y-1 px-4">
        {Data.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center px-4 py-3 text-sm rounded-lg transition-all
              ${
                isActive
                  ? "bg-gray-100 text-blue-600 font-medium"
                  : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="ml-3">{item.label}</span>
              <ChevronRight
                className={`ml-auto h-4 w-4 ${
                  isActive ? "text-blue-600" : "text-gray-400"
                }`}
              />
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default SidePanel;
