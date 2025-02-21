import React from "react";
import { Clock, Globe, User } from "lucide-react"; // Import necessary icons

const TeamAttendanceSidePanel = ({
  employee,
  employees = [], // Default to an empty array
  onEmployeeChange,
}: {
  employee?: { name: string; team: string; status: string };
  employees?: { id: string; name: string }[]; // Mark `employees` as optional
  onEmployeeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-full">
      <div className="p-6 space-y-6">
        {/* Employee Info Section */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <User className="w-5 h-5 text-blue-500" />
            <h3 className="font-semibold text-gray-900">Employee</h3>
          </div>
          <select
            className="w-full p-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={employee?.name || ""}
            onChange={onEmployeeChange}
          >
            {employees.map((emp) => (
              <option key={emp.id} value={emp.name}>
                {emp.name}
              </option>
            ))}
          </select>
        </div>

        {/* Separator */}
        <div className="h-px bg-gray-200" />

        {/* Team Info */}
        {employee && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <User className="w-5 h-5 text-blue-500" />
              <h3 className="font-semibold text-gray-900">Team</h3>
            </div>
            <p className="text-gray-600">{employee.team}</p>
          </div>
        )}

        {/* Separator */}
        <div className="h-px bg-gray-200" />

        {/* Time Info */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-blue-500" />
            <h3 className="font-semibold text-gray-900">Work Hours</h3>
          </div>
          <p className="text-gray-600">9:00 AM - 5:00 PM</p>
        </div>

        {/* Separator */}
        <div className="h-px bg-gray-200" />

        {/* Timezone Section */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Globe className="w-5 h-5 text-blue-500" />
            <h3 className="font-semibold text-gray-900">Timezone</h3>
          </div>
          <p className="text-gray-600">Asia/Kolkata</p>
        </div>

        {/* Separator */}
        <div className="h-px bg-gray-200" />

        {/* Status */}
        {employee && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <User className="w-5 h-5 text-blue-500" />
              <h3 className="font-semibold text-gray-900">Status</h3>
            </div>
            <p
              className={`text-sm ${
                employee.status === "Active" ? "text-green-500" : "text-red-500"
              }`}
            >
              {employee.status}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamAttendanceSidePanel;
