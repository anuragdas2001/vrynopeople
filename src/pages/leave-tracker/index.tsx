"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { leavetracker } from "../../../leavetracker";

const LeaveTracker = () => {
  const getColors = (type: string) => {
    switch (type) {
      case "Casual Leave":
        return { bgColor: "bg-blue-100", iconColor: "text-blue-500" };
      case "Earned Leave":
        return { bgColor: "bg-green-100", iconColor: "text-green-500" };
      case "Leave Without Pay":
        return { bgColor: "bg-red-100", iconColor: "text-red-500" };
      case "Paternity Leave":
        return { bgColor: "bg-yellow-100", iconColor: "text-yellow-500" };
      case "Sabbatical Leave":
        return { bgColor: "bg-orange-100", iconColor: "text-orange-500" };
      case "Sick Leave":
        return { bgColor: "bg-purple-100", iconColor: "text-purple-500" };
      default:
        return { bgColor: "bg-gray-100", iconColor: "text-gray-500" };
    }
  };

  // Calculate total leave balance
  const totalAvailable = leavetracker.reduce((sum, leave) => sum + leave.available, 0);
  const totalBooked = leavetracker.reduce((sum, leave) => sum + leave.booked, 0);

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-gray-800">Leave Balance</h2>
          <div className="flex gap-4 mt-2">
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium text-gray-600">Available:</span>
              <span className="text-xl font-bold text-green-600">{totalAvailable}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium text-gray-600">Booked:</span>
              <span className="text-xl font-bold text-red-500">{totalBooked}</span>
            </div>
          </div>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
          Apply for Leave
        </Button>
      </div>

      {/* Leave Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-4">
        {leavetracker.map((leave, index) => {
          const { bgColor, iconColor } = getColors(leave.type);
          return (
            <Card key={index} className="h-60 w-11/12 bg-white shadow-lg rounded-lg p-4">
              {/* Card Header */}
              <CardHeader className="flex flex-row items-center gap-4 mb-4">
                <div className={`p-2 rounded-full ${bgColor}`}>
                  <leave.icon className={`h-8 w-8 ${iconColor}`} />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {leave.type}
                </CardTitle>
              </CardHeader>

              {/* Card Content */}
              <CardContent className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col items-start">
                    <CardTitle className="text-lg font-medium text-gray-700">
                      Available
                    </CardTitle>
                    <CardDescription className="text-2xl font-bold text-green-600">
                      {leave.available}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-start">
                    <CardTitle className="text-lg font-medium text-gray-700">
                      Booked
                    </CardTitle>
                    <CardDescription className="text-2xl font-bold text-red-500">
                      {leave.booked}
                    </CardDescription>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default LeaveTracker;