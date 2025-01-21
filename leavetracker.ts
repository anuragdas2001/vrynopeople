import { Sunset, TimerReset, Baby, History, Stethoscope } from "lucide-react";
export const leavetracker = [
  {
    type: "Casual Leave",
    available: 12,
    booked: 0,
    icon: Sunset,
  },
  {
    type: "Earned Leave",
    available: 18,
    booked: 4,
    icon: TimerReset,
  },
  {
    type: "Leave Without Pay",
    available: 0,
    booked: 2,
    icon: Sunset,
  },
  {
    type: "Paternity Leave",
    available: 10,
    booked: 2,
    icon: Baby,
  },
  {
    type: "Sabbatical Leave",
    available: 5,
    booked: 0,
    icon: History,
  },
  {
    type: "Sick Leave",
    available: 8,
    booked: 1,
    icon: Stethoscope,
  },
];
