import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Clock, Calendar, Award } from "lucide-react";
import Timesheet from "@/components/Timesheet";
import Activities from "@/components/Activities";
import Projects from "@/components/Projects";
import Department from "@/components/Department";
import Tasks from "@/components/Task";
import Payroll from "@/components/Payroll";
import Announcements from "@/components/Announcements";
import QuickStats from "@/components/QuickStats";
import Timeline from "@/components/Timeline";
// Priority Badge Component
import Greetings from "@/components/Greetings";
const Home = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState(null);
  const [checkOutTime, setCheckOutTime] = useState(null);
  const [timeLog, setTimeLog] = useState([
    // {
    //   date: "2025-01-22",
    //   checkIn: "09:00 AM",
    //   checkOut: "05:30 PM",
    //   duration: "8h 30m",
    // },
    {
      date: "2025-01-21",
      checkIn: "08:45 AM",
      checkOut: "05:15 PM",
      duration: "8h 30m",
    },
    {
      date: "2025-01-20",
      checkIn: "09:15 AM",
      checkOut: "06:00 PM",
      duration: "8h 45m",
    },
  ]);
  const handleCheckIn = () => {
    const now = new Date();
    setCheckInTime(now);
    setIsCheckedIn(true);
  };

  const handleCheckOut = () => {
    const now = new Date();
    setCheckOutTime(now);
    setIsCheckedIn(false);

    // Add to time log
    const newLog = {
      date: now.toISOString().split("T")[0],
      checkIn:
        checkInTime?.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }) ?? "N/A",
      checkOut: now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      duration: calculateDuration(checkInTime, now),
    };

    setTimeLog([newLog, ...timeLog]); // Prepend the new log
  };

  const calculateDuration = (start, end) => {
    const diff = Math.abs(end - start);
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="min-h-screen  p-6">
      {/* Header */}
      <Greetings />
      {/* Timeline */}
      <Timeline />
      {/* Quick Stats */}
      <QuickStats />

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Activities */}
          <Timesheet
            isCheckedIn={isCheckedIn}
            checkInTime={checkInTime}
            checkOutTime={checkOutTime}
            timeLog={timeLog}
            handleCheckIn={handleCheckIn}
            handleCheckOut={handleCheckOut}
          />

          <Activities />

          {/* Projects Section */}
          <Projects />

          <Department />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Tasks Section */}
          <Tasks />

          {/* Payroll Section */}
          <Payroll />

          {/* Announcements Section */}
          <Announcements />
        </div>
      </div>
    </div>
  );
};

export default Home;
