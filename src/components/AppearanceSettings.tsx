import { CalendarIcon, Grid, List } from "lucide-react";

interface AppearanceSettingsProps {
  layout: "list" | "grid" | "calendar";
  setLayout: (layout: "list" | "grid" | "calendar") => void;
}

const AppearanceSettings: React.FC<AppearanceSettingsProps> = ({
  layout,
  setLayout,
}) => {
  return (
    <div className="flex justify-center items-center flex-col space-y-8 py-8">
      {/* Layout Selection */}
      <div className="space-y-6 mb-12">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Layout</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { value: "list", icon: List, label: "List View" },
            { value: "grid", icon: Grid, label: "Grid View" },
            { value: "calendar", icon: CalendarIcon, label: "Calendar View" },
          ].map(({ value, icon: Icon, label }) => (
            <label
              key={value}
              className={`flex flex-col items-center justify-center p-6 rounded-lg border ${
                layout === value
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300"
              } hover:shadow-lg cursor-pointer transition-all duration-200`}
            >
              <input
                type="radio"
                name="layout"
                value={value}
                className="hidden"
                checked={layout === value}
                onChange={() =>
                  setLayout(value as "list" | "grid" | "calendar")
                }
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
      {/* Similar structure for theme, font size, and density */}
    </div>
  );
};

export default AppearanceSettings;
