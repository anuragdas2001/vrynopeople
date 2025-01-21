import React, { useRef, useEffect, useState } from "react";
import moment from "moment";
import {
  Calendar,
  Views,
  DateLocalizer,
  momentLocalizer,
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { attendanceData } from "../../../../attendance";
import {
  format,
  parse,
  startOfWeek,
  getDay,
  setHours,
  setMinutes,
} from "date-fns";
import { enUS } from "date-fns/locale";
import { Clock, User, Globe, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useRouter } from "next/router";
const mLocalizer = momentLocalizer(moment);

// Types
interface AttendanceEvent {
  id: number;
  title: string;
  start: Date;
  end: Date;
  status: "present" | "absent" | "late";
  description?: string;
  userId?: string;
}

interface AttendanceProps {
  currentView: string;
  onViewChange: (view: string) => void;
  onDateRangeChange: (range: { start: Date; end: Date }) => void;
  events: AttendanceEvent[];
}

const AttendanceStatus = () => {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  const handleStatusSelect = (status: string) => {
    setSelectedStatus(status);
    console.log("Selected status:", status);
  };

  const handleTimeSelect = (time: Date) => {
    setSelectedTime(time);
    console.log("Selected time:", format(time, "HH:mm"));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Mark Attendance
      </h3>

      <div className="space-y-6">
        {/* Status Selection */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Status</h4>
          <div className="grid grid-cols-1 gap-3">
            {["Present", "Absent", "Late"].map((status) => (
              <button
                key={status}
                id={`status-${status.toLowerCase()}`}
                className={`p-2 hover:bg-blue-50 hover:border-blue-500 rounded-xl transition-colors border ${
                  selectedStatus === status
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white text-gray-900 border-gray-300"
                }`}
                onClick={() => handleStatusSelect(status)}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Time Selection */}
        {selectedStatus === "Late" && (
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Time In</h4>
            <input
              type="time"
              className="w-full p-2 border border-gray-300 rounded-xl"
              onChange={(e) =>
                handleTimeSelect(parse(e.target.value, "HH:mm", new Date()))
              }
            />
          </div>
        )}

        {/* Submit Button */}
        {selectedStatus && (
          <button
            id="submit-attendance"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium p-3 rounded-xl transition-colors flex items-center justify-center gap-2"
            onClick={() =>
              console.log("Submitting attendance:", {
                status: selectedStatus,
                time: selectedTime,
              })
            }
          >
            <span>Submit Attendance</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

const SidePanel = () => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-full">
    <div className="p-6 space-y-6">
      {/* User Info Section */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <User className="w-5 h-5 text-blue-500" />
          <h3 className="font-semibold text-gray-900">Employee</h3>
        </div>
        <p className="text-gray-600">John Doe</p>
      </div>

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
    </div>
  </div>
);

// Event Component with Tooltip
const EventComponent = ({ event }: { event: AttendanceEvent }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger className="w-full h-full">
        <div className="p-1 text-sm font-medium text-white">
          {event.status === "present"
            ? `${format(event.start, "h:mm a")} - ${format(
                event.end,
                "h:mm a"
              )}`
            : event.status.charAt(0).toUpperCase() + event.status.slice(1)}
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p className="font-medium">{event.title}</p>
        <p className="text-xs">
          {event.status === "present"
            ? `${format(event.start, "h:mm a")} - ${format(
                event.end,
                "h:mm a"
              )}`
            : "Absent"}
        </p>
        {event.description && <p className="text-xs">{event.description}</p>}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

const MyAttendanceData: React.FC<AttendanceProps> = ({
  currentView,
  onViewChange,
  onDateRangeChange,
  events,
}) => {
  const router = useRouter(); // Initialize the router
  const calendarRef = useRef<any>(null);
  const [activeTab, setActiveTab] = useState("my-attendance");

  useEffect(() => {
    if (calendarRef.current) {
      calendarRef.current.handleViewChange("month");
    }
  }, []);

  useEffect(() => {
    // Redirect to /attendance/team/reportees when the activeTab is "team-attendance"
    if (activeTab === "team-attendance") {
      router.push("/attendance/team/reportees");
    }
  }, [activeTab, router]);

  const handleRangeChange = (
    range: Date[] | { start: Date; end: Date },
    view?: View
  ) => {
    if (typeof onDateRangeChange === "function") {
      if (Array.isArray(range)) {
        onDateRangeChange({
          start: range[0],
          end: range[range.length - 1],
        });
      } else if (range && "start" in range) {
        onDateRangeChange(range);
      }
    }
  };

  const eventStyleGetter = (event: AttendanceEvent) => {
    let backgroundColor = "#3B82F6"; // default blue
    switch (event.status) {
      case "present":
        backgroundColor = "#22C55E"; // green
        break;
      case "absent":
        backgroundColor = "#EF4444"; // red
        break;
      case "late":
        backgroundColor = "#F59E0B"; // amber
        break;
    }
    return { style: { backgroundColor } };
  };

  // const getFilteredEvents = () => {
  //   if (activeTab === "team-attendance") {
  //     return events.map(event => ({
  //       ...event,
  //       title: `${event.title} (Team Member)`,
  //     }));
  //   }
  //   return events;
  // };

  return (
    <div className="p-6">
      

      <div className="grid grid-cols-12 gap-6 w-full mx-auto">
        {/* Side Panel */}
        <div className="col-span-2">
          <SidePanel />
        </div>

        {/* Calendar and Attendance Status */}
        <div className="col-span-10 grid grid-cols-12 gap-6">
          {/* Calendar */}
          <div className="col-span-10 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6">
              <Calendar
                localizer={mLocalizer}
                events={events}
                defaultView="month"
                style={{ height: 500 }}
                eventPropGetter={eventStyleGetter}
                components={{
                  event: EventComponent,
                }}
                onView={(view) => {
                  if (currentView !== view) onViewChange(view);
                }}
                onRangeChange={handleRangeChange}
              />
            </div>
          </div>

          {/* Attendance Status Section */}
          <div className="col-span-2">
            <AttendanceStatus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAttendanceData;
