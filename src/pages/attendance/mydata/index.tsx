import React, { useRef, useEffect, useState } from "react";
import moment from "moment";
import {
  Calendar,
  Views,
  DateLocalizer,
  momentLocalizer,
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { TeamsData } from "../../../../team";
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
  id: string; // The ID of the team member (string type in your data)
  name: string; // Name of the team member
  designation: string; // Designation of the team member
  email: string; // Email of the team member
  team: string; // Team of the team member
  status: string; // Status of the team member
  joinedDate: string; // Date the team member joined
  attendance: { date: Date; start: Date; end: Date; status: string }[];
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
    console.log("Selected time:", moment(time).format("HH:mm"));
  };

  const handleSubmit = () => {
    console.log("Submitting attendance:", {
      status: selectedStatus,
      time: selectedTime,
    });
    // Add your submit logic here
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
          <div className="grid gap-3">
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
                handleTimeSelect(
                  moment(e.target.value, "HH:mm").toDate() // Convert to Date object
                )
              }
            />
          </div>
        )}

        {/* Submit Button */}
        {selectedStatus && (
          <button
            id="submit-attendance"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium p-3 rounded-xl transition-colors flex items-center justify-center gap-2"
            onClick={handleSubmit}
          >
            Submit Attendance
          </button>
        )}
      </div>
    </div>
  );
};

// Event Component with Tooltip
const EventComponent = ({ event }: any) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger className="w-full h-full">
        <div
          className={`p-1 text-sm font-medium ${
            event.status === "present" ? "text-emerald-100" : "text-red-100"
          }`}
        >
          {event.status === "present" ? (
            <>
              {moment(event.start).format("h:mm A")} -{" "}
              {moment(event.end).format("h:mm A")}
            </>
          ) : (
            "Absent"
          )}
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <div className="p-2">
          <p className="font-medium">{event.title}</p>
          {event.status === "present" ? (
            <p className="text-xs text-emerald-600">
              Working hours: {moment(event.start).format("h:mm A")} -{" "}
              {moment(event.end).format("h:mm A")}
            </p>
          ) : (
            <p className="text-xs text-red-600">Absent for the day</p>
          )}
        </div>
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
  const calendarRef = useRef<any>(null);

  useEffect(() => {
    if (calendarRef.current) {
      calendarRef.current.handleViewChange("month");
    }
  }, []);

  const handleRangeChange = (
    range: Date[] | { start: Date; end: Date },
    view?: string | undefined
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
    switch (event?.status) {
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

  return (
    <div className="p-6">
      {/* Calendar */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6">
          <Calendar
            localizer={mLocalizer}
            events={events}
            defaultView="month"
            view={currentView as any}
            style={{ height: 700 }}
            eventPropGetter={eventStyleGetter}
            components={{
              event: EventComponent,
            }}
            onView={(view) => {
              if (currentView !== view) onViewChange(view); // This will now work
            }}
            onRangeChange={handleRangeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default MyAttendanceData;
