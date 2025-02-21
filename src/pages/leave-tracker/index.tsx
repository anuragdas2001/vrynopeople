"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { leavetracker } from "../../../leavetracker";
interface ProgressProps {
  value: number;

  className?: string;

  indicatorClassName?: string;
}
const LeaveTracker = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedLeaveType, setSelectedLeaveType] = useState("");
  const [leaveDays, setLeaveDays] = useState("");
  const [leaveReason, setLeaveReason] = useState("");

  const getColors = (type: string) => {
    switch (type) {
      case "Casual Leave":
        return {
          bg: "bg-blue-50",
          text: "text-blue-600",
          progress: "bg-blue-500",
        };
      case "Earned Leave":
        return {
          bg: "bg-emerald-50",
          text: "text-emerald-600",
          progress: "bg-emerald-500",
        };
      case "Leave Without Pay":
        return {
          bg: "bg-rose-50",
          text: "text-rose-600",
          progress: "bg-rose-500",
        };
      case "Paternity Leave":
        return {
          bg: "bg-amber-50",
          text: "text-amber-600",
          progress: "bg-amber-500",
        };
      case "Sabbatical Leave":
        return {
          bg: "bg-orange-50",
          text: "text-orange-600",
          progress: "bg-orange-500",
        };
      case "Sick Leave":
        return {
          bg: "bg-purple-50",
          text: "text-purple-600",
          progress: "bg-purple-500",
        };
      default:
        return {
          bg: "bg-gray-50",
          text: "text-gray-600",
          progress: "bg-gray-500",
        };
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission here
    console.log({
      leaveType: selectedLeaveType,
      days: leaveDays,
      reason: leaveReason,
    });
    // Reset form
    setSelectedLeaveType("");
    setLeaveDays("");
    setLeaveReason("");
    setIsDialogOpen(false);
  };

  const totalAvailable = leavetracker.reduce(
    (sum, leave) => sum + leave.available,
    0
  );
  const totalBooked = leavetracker.reduce(
    (sum, leave) => sum + leave.booked,
    0
  );
  const totalDays = totalAvailable + totalBooked;
  // console.log("progress", progress);
  return (
    <div className="p-8 space-y-8">
      {/* Summary Section */}
      <Card className="border-none shadow-lg bg-gradient-to-br from-blue-500 to-blue-900">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">Leave Dashboard</h2>
              <div className="flex gap-6">
                <div className="bg-white/20 rounded-xl p-4">
                  <p className="text-white/70 text-sm">Available Leave</p>
                  <p className="text-2xl font-bold text-white">
                    {totalAvailable} days
                  </p>
                </div>
                <div className="bg-white/20 rounded-xl p-4">
                  <p className="text-white/70 text-sm">Booked Leave</p>
                  <p className="text-2xl font-bold text-white">
                    {totalBooked} days
                  </p>
                </div>
              </div>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700">
                  Request Leave
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Request Leave</DialogTitle>
                  <DialogDescription>
                    Submit your leave request by filling out the form below.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="leaveType">Leave Type</Label>
                    <Select
                      value={selectedLeaveType}
                      onValueChange={setSelectedLeaveType}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select leave type" />
                      </SelectTrigger>
                      <SelectContent>
                        {leavetracker.map((leave) => (
                          <SelectItem key={leave.type} value={leave.type}>
                            {leave.type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="days">Number of Days</Label>
                    <Input
                      id="days"
                      type="number"
                      min="1"
                      value={leaveDays}
                      onChange={(e) => setLeaveDays(e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reason">Reason for Leave</Label>
                    <Textarea
                      id="reason"
                      value={leaveReason}
                      onChange={(e) => setLeaveReason(e.target.value)}
                      required
                      className="w-full min-h-[100px]"
                      placeholder="Please provide a reason for your leave request..."
                    />
                  </div>

                  <div className="flex justify-end gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button type="submit">Submit Request</Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>

      {/* Leave Types Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {leavetracker.map((leave, index) => {
          const { bg, text, progress } = getColors(leave.type);
          const total = leave.available + leave.booked;
          const percentageUsed = (leave.booked / total) * 100;

          return (
            <Card
              key={index}
              className="border shadow-md hover:shadow-lg transition-shadow"
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${bg}`}>
                    <leave.icon className={`h-6 w-6 ${text}`} />
                  </div>
                  <CardTitle className="font-semibold">{leave.type}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Available</p>
                    <p className={`text-xl font-bold ${text}`}>
                      {leave.available}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Booked</p>
                    <p className="text-xl font-bold text-gray-700">
                      {leave.booked}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Progress
                    value={percentageUsed}
                    className="h-2"
                    // indicatorClassName={progress}
                  />
                  <p className="text-sm text-gray-500 text-right">
                    {leave.booked} of {total} days used
                  </p>
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
