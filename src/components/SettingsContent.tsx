import React from "react";
import { settingsData } from "../../settings";
import {
  Calendar,
  AlertCircle,
  ChevronRight,
  Sun,
  Moon,
  Monitor,
  List,
  Grid,
  CalendarIcon,
} from "lucide-react";
interface SettingsContentProps {
  activeTab: string;
  layout: string;
  theme: string;
  fontSize: string;
  density: string;
  onLayoutChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onThemeChange: (theme: string) => void;
  onFontSizeChange: (fontSize: string) => void;
  onDensityChange: (density: string) => void;
  onApplyChanges: () => void;
}
const SettingsContent: React.FC<SettingsContentProps> = ({
  activeTab,
  layout,
  theme,
  fontSize,
  density,
  onLayoutChange,
  onThemeChange,
  onFontSizeChange,
  onDensityChange,
  onApplyChanges,
}) => {
  const currentTab = settingsData.find((tab) => tab.id === activeTab);

  if (!currentTab) return null;

  // Render specific content based on the active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "calenders":
        return renderCalendersContent();
      case "appearance":
        return renderAppearanceContent();
      case "general":
      case "conferencing":
      case "security":
        return renderDefaultTabContent();
      default:
        return renderEmptyStateContent();
    }
  };

  const renderCalendersContent = () => {
    return (
      <div className="flex justify-center items-center flex-col space-y-6 py-8">
        <div className="w-full max-w-3xl rounded-md shadow-sm p-6 text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="flex justify-center items-center bg-gray-100 rounded-full p-4">
              <Calendar className="h-10 w-10 text-blue-500" />
            </div>
          </div>

          <p className="text-lg font-semibold text-gray-900 mb-4">
            No Calendar Apps Connected
          </p>
          <p className="text-sm text-gray-500 mb-6">
            {currentTab.content.noAppsMessage ||
              "You don't have any calendar apps connected yet."}
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Connect Calendar Apps
          </button>
        </div>
      </div>
    );
  };

  const renderDefaultTabContent = () => {
    const defaults = currentTab.content.defaults;
    if (!defaults || defaults.length === 0) return renderEmptyStateContent();

    return (
      <div className="overflow-y-auto max-h-[calc(100vh-16rem)] scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100">
        <div className="space-y-6">
          {defaults.map(({ name, value }) => (
            <div
              key={name}
              className="group flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <div>
                <h3 className="text-sm font-medium text-gray-900">{name}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Configure your {name.toLowerCase()} preferences
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">{value}</span>
                <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderAppearanceContent = () => {
    const layoutOptions = [
      { value: "list", icon: List, label: "List View" },
      { value: "grid", icon: Grid, label: "Grid View" },
      { value: "calendar", icon: CalendarIcon, label: "Calendar View" },
    ];

    const themeOptions = [
      { value: "light", icon: Sun, label: "Light Mode" },
      { value: "dark", icon: Moon, label: "Dark Mode" },
      { value: "system", icon: Monitor, label: "System Default" },
    ];

    return (
      <div className="flex justify-center items-center flex-col space-y-8 py-8">
        <div className="w-full">
          {/* Layout Selection */}
          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Layout
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {layoutOptions.map(({ value, icon: Icon, label }) => (
                <label
                  key={value}
                  className={`
                    flex flex-col items-center justify-center p-6 rounded-lg border
                    ${
                      layout === value
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300"
                    }
                    hover:shadow-lg cursor-pointer transition-all duration-200
                  `}
                >
                  <input
                    type="radio"
                    name="layout"
                    value={value}
                    className="hidden"
                    checked={layout === value}
                    onChange={onLayoutChange}
                  />
                  <div className="flex flex-col items-center space-y-4">
                    <Icon
                      className={`h-10 w-10 ${
                        layout === value ? "text-blue-500" : "text-gray-500"
                      }`}
                    />
                    <span
                      className={`text-lg font-medium ${
                        layout === value ? "text-blue-700" : "text-gray-700"
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Theme Selection */}
          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Theme</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {themeOptions.map(({ value, icon: Icon, label }) => (
                <button
                  key={value}
                  onClick={() => onThemeChange(value)}
                  className={`
                    p-4 rounded-lg border ${
                      theme === value
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300"
                    }
                    hover:shadow-md transition-all duration-200
                  `}
                >
                  <div className="flex items-center space-x-3">
                    <Icon
                      className={`h-5 w-5 ${
                        theme === value ? "text-blue-500" : "text-gray-500"
                      }`}
                    />
                    <span
                      className={`font-medium ${
                        theme === value ? "text-blue-700" : "text-gray-700"
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Font Size */}
          <div className="space-y-4 mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Font Size
            </h3>
            <div className="flex flex-col space-y-2">
              <select
                value={fontSize}
                onChange={(e) => onFontSizeChange(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
          </div>

          {/* Density */}
          <div className="space-y-4 mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Interface Density
            </h3>
            <div className="flex gap-4">
              {["compact", "comfortable", "spacious"].map((value) => (
                <button
                  key={value}
                  onClick={() => onDensityChange(value)}
                  className={`
                    px-4 py-2 rounded-lg border
                    ${
                      density === value
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-300 text-gray-700"
                    }
                    hover:shadow-md transition-all duration-200 capitalize
                  `}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>

          {/* Apply Button */}
          <div className="flex justify-end">
            <button
              onClick={onApplyChanges}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            >
              Apply Changes
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderEmptyStateContent = () => (
    <div className="text-center py-12">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
        <AlertCircle className="h-8 w-8 text-gray-400" />
      </div>
      <p className="text-sm text-gray-500">
        No settings available for this category.
      </p>
    </div>
  );

  return (
    <div className="flex-1 flex justify-center items-start mt-6">
      <div className="mx-10 w-full bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <div className="border-b pb-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {currentTab.label} Settings
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              {currentTab.content.description}
            </p>
          </div>

          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default SettingsContent;
