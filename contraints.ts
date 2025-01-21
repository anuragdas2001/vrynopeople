import {
  House,
  Handshake,
  TreePalm,
  CalendarCheck,
  Hourglass,
  Trophy,
} from "lucide-react";
export const contraints = [
  {
    id: "1",
    name: "Home",
    url: "/",
    userEventName: "HomeEvent",
    icon: House,
  },
  {
    id: "2",
    name: "Onboarding",
    url: "/onboarding",
    userEventName: "OnboardingEvent",
    icon: Handshake,
  },
  {
    id: "3",
    name: "Leave Tracker",
    url: "/leave-tracker",
    userEventName: "LeaveTrackerEvent",
    icon: TreePalm,
  },
  {
    id: "4",
    name: "Attendance",
    url: "/attendance",
    userEventName: "AttendanceEvent",
    icon: CalendarCheck,
  },
  {
    id: "5",
    name: "Time Tracker",
    url: "/time-tracker",
    userEventName: "TimeTrackerEvent",
    icon: Hourglass,
  },
  {
    id: "6",
    name: "Performance",
    url: "/performance",
    userEventName: "PerformanceEvent",
    icon: Trophy,
  },
];
