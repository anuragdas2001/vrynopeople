import React from "react";
import { TeamsData } from "../../team";
import { Pyramid } from "lucide-react";

const ReporteesList = () => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-500 border-green-200";
      case "on-leave":
      case "on leave":
        return "bg-yellow-100 text-yellow-600 border-yellow-200";
      case "inactive":
        return "bg-red-100 text-red-500 border-red-200";
      default:
        return "bg-gray-100 text-gray-600 border-gray-200";
    }
  };

  return (
    <div className="border rounded-xl  p-4 space-y-4">
      <div className="flex gap-4 items-center">
      <Pyramid className="h-8 w-8"/>
      <h1 className="text-2xl font-bold text-gray-900">My Reportees</h1>
      </div>

      <div className="space-y-3">
        {TeamsData.map((member) => (
          <div key={member.id} className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                  member.status
                )}`}
              >
                {member.status}
              </span>
            </div>
            <p className="text-sm text-gray-600">{member.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReporteesList;
