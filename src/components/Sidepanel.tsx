import React from 'react';
import { ChevronRight } from 'lucide-react';

const SettingsSidebar = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="w-64 flex-shrink-0 bg-white shadow-md">
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        <p className="text-sm text-gray-500 mt-1">Manage your preferences</p>
      </div>
      <nav className="space-y-1 px-4">
        {tabs.map((item) => {
          const isActive = activeTab === item.id;
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
              <span className="mr-3">{item.icon}</span>
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

export default SettingsSidebar;