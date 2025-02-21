import React, { useState } from "react";
import Timesheet from "@/components/Timesheet";
import Activities from "@/components/Activities";
import Projects from "@/components/Projects";
import Department from "@/components/Department";
import Tasks from "@/components/Task";
import Payroll from "@/components/Payroll";
import Announcements from "@/components/Announcements";
import QuickStats from "@/components/QuickStats";
import Timeline from "@/components/Timeline";
import Greetings from "@/components/Greetings";
import Reportees from "@/components/Reportees";

const Home = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState<Date | undefined>();
  const [checkOutTime, setCheckOutTime] = useState<Date | undefined>();
  const [timeLog, setTimeLog] = useState([
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
      duration: calculateDuration(checkInTime),
    };

    setTimeLog([newLog, ...timeLog]);
  };

  const calculateDuration = ({ start, end }:any) => {
    const diff = Math.abs(end - start);
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Header */}
      <Greetings />
      {/* Timeline */}
      <div className="w-full mb-6">
        <Timeline />
      </div>

      {/* Quick Stats */}
      <div className="w-full mb-6">
        <QuickStats />
      </div>
      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-3 space-y-6">
          <Reportees />
          <Payroll />
        </div>
        {/* Middle Column */}
        <div className="lg:col-span-6 space-y-6">
          <Timesheet
            isCheckedIn={isCheckedIn}
            checkInTime={checkInTime}
            checkOutTime={checkOutTime}
            timeLog={timeLog}
            handleCheckIn={handleCheckIn}
            handleCheckOut={handleCheckOut}
          />
          <Department />
          <Projects />
        </div>
        {/* Right Column */}
        <div className="lg:col-span-3 space-y-6">
          <Announcements />
          <Activities />
          <Tasks />
        </div>
      </div>
    </div>
  );
};

export default Home;
